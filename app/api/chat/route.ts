import { NextResponse } from 'next/server';
import { ChatOpenAI } from '@langchain/openai';
import { QdrantClient } from '@qdrant/js-client-rest';
import { QdrantVectorStore } from '@langchain/qdrant';
import { OpenAIEmbeddings } from '@langchain/openai';
import fs from "fs";
import path from "path";

// Check env vars at the top
const missingKeys: string[] = [];
if (!process.env.OPENAI_API_KEY) missingKeys.push('OPENAI_API_KEY');
if (!process.env.QDRANT_API_KEY) missingKeys.push('QDRANT_API_KEY');
if (!process.env.QDRANT_URL) missingKeys.push('QDRANT_URL');

if (missingKeys.length > 0) {
  console.error('Missing environment variables:', missingKeys.join(', '));
  throw new Error(`Missing environment variables: ${missingKeys.join(', ')}`);
}

// Initialize OpenAI
const openai = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-4o',
});

// Initialize Qdrant client
const qdrantClient = new QdrantClient({
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_API_KEY,
});

// Initialize vector store
const vectorStore = new QdrantVectorStore(
  new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  }),
  {
    client: qdrantClient,
    collectionName: 'realestate_data',
  }
);

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // --- 1. Direct property/general info lookup ---
    const jsonPath = path.join(process.cwd(), 'public', 'knowledgeBase.json');
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    // Flatten all searchable objects (properties, general info, arrays)
    function flattenKnowledgeBase(data: any[]): any[] {
      const items: any[] = [];
      data.forEach(item => {
        // General info or arrays (no title/name/location/details)
        if (
          !item.title &&
          !item.name &&
          !item.location &&
          !item.details &&
          !item.residentialProperties &&
          !item.commercialProperties
        ) {
          items.push(item);
        }
        // Properties (with title/name and details)
        if ((item.title || item.name) && item.details) {
          items.push(item);
        }
        // Arrays of properties
        if (Array.isArray(item.residentialProperties)) {
          item.residentialProperties.forEach((prop: any) => {
            items.push(prop);
          });
        }
        if (Array.isArray(item.commercialProperties)) {
          item.commercialProperties.forEach((prop: any) => {
            items.push(prop);
          });
        }
      });
      return items;
    }

    const allItems = flattenKnowledgeBase(jsonData);
    const msgLower = message.toLowerCase();
    const matchedItem = allItems.find(
      i =>
        (i.title && msgLower.includes(i.title.toLowerCase())) ||
        (i.name && msgLower.includes(i.name.toLowerCase()))
    );

    // If matched property or general info, return details
    if (matchedItem) {
      // If it's a property, show property details
      if (matchedItem.details) {
        let detailsText = `**${matchedItem.title || matchedItem.name}**\n\n`;
        if (matchedItem.details?.overview?.paragraph1) detailsText += matchedItem.details.overview.paragraph1 + '\n\n';
        if (matchedItem.details?.overview?.paragraph2) detailsText += matchedItem.details.overview.paragraph2 + '\n\n';
        if (matchedItem.details?.features?.length) {
          detailsText += '**Key Features:**\n';
          matchedItem.details.features.forEach((f: string) => {
            detailsText += `- ${f}\n`;
          });
        }
        return NextResponse.json({ response: detailsText.trim(), source: matchedItem });
      }
      // If it's general info or an array, show as JSON
      return NextResponse.json({ response: JSON.stringify(matchedItem, null, 2), source: matchedItem });
    }

    // --- 2. List all properties intent (unchanged) ---
    if (
      /list.*(residential|commercial)?\s*properties.*gurgaon/i.test(message) ||
      /show.*(residential|commercial)?\s*properties.*gurgaon/i.test(message)
    ) {
      function extractProperties(type: "residential" | "commercial" | null) {
        const properties: { name: string; location: string }[] = [];
        jsonData.forEach((item: any) => {
          if (
            item.location &&
            /gurgaon/i.test(item.location) &&
            (item.title || item.name) &&
            (!type || item.category === type)
          ) {
            properties.push({ name: item.title || item.name, location: item.location });
          }
          if (Array.isArray(item.residentialProperties) && (!type || type === "residential")) {
            item.residentialProperties.forEach((prop: any) => {
              if (prop.location && /gurgaon/i.test(prop.location) && prop.name) {
                properties.push({ name: prop.name, location: prop.location });
              }
            });
          }
          if (Array.isArray(item.commercialProperties) && (!type || type === "commercial")) {
            item.commercialProperties.forEach((prop: any) => {
              if (prop.location && /gurgaon/i.test(prop.location) && prop.name) {
                properties.push({ name: prop.name, location: prop.location });
              }
            });
          }
        });
        return properties;
      }

      let type: "residential" | "commercial" | null = null;
      if (/residential/i.test(message)) type = "residential";
      if (/commercial/i.test(message)) type = "commercial";

      const allProperties = extractProperties(type);

      const context = allProperties.length
        ? allProperties.map((p, i) => `${i + 1}. ${p.name} (${p.location})`).join('\n')
        : "No properties found in Gurgaon.";

      const prompt = `
You are TreeBot, the helpful and knowledgeable AI assistant for Tree House Real Estate.

List all ${type ? type + " " : ""}properties in Gurgaon using ONLY the information below.
Format the list as a **numbered markdown list** (each property on a new line).

If the user asks for contact details or how to contact, always reply:
"For further assistance, please contact our team at +91 9811098193 or Treehousefarmland@gmail.com."

--------------------
Context:
${context}
--------------------

User Question: ${message}

Assistant Answer:
`;

      const response = await openai.invoke(prompt);
      const answer = typeof response === 'string' ? response : response?.content || response?.text || JSON.stringify(response);

      return NextResponse.json({ response: answer, source: null });
    }

    // --- 3. Vector search fallback (unchanged) ---
    const results = await vectorStore.similaritySearch(message, 10);
    const context = results.map(r => r.pageContent).join('\n\n');

    const prompt = `
You are TreeBot, the helpful and knowledgeable AI assistant for Tree House Real Estate.

Answer the user's question using ONLY the information provided in the context below.
If the user asks for a list (e.g., all commercial properties), list each and every relevant property mentioned in the context as a numbered list in plain text in the format:
1. Property A (Location)
2. Property B (Location)
3. Property C (Location)

If the answer is not present in the context, reply politely:
"I'm sorry, I don't have that information right now. For further assistance, please contact our team at +91 9811098193 or Treehousefarmland@gmail.com."

If the user asks about the developer and it's not found, say "Developer information is not available for this project."
If the user asks about configuration or BHK and it's not found, say "Configuration details are not available for this project."

Be concise, factual, and cite specific details from the context when possible.

--------------------
Context:
${context}
--------------------

User Question: ${message}
Assistant Answer:
`;

    const response = await openai.invoke(prompt);

    const answer = typeof response === 'string' ? response : response?.content || response?.text || JSON.stringify(response);

    return NextResponse.json({ response: answer, source: null });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
