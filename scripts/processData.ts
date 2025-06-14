import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from '@langchain/openai';
import { QdrantVectorStore } from '@langchain/qdrant';
import { Document as LangchainDocument } from '@langchain/core/documents';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

async function processData(): Promise<void> {
  try {
    // Initialize Qdrant client
    const qdrantClient = new QdrantClient({
      url: process.env.QDRANT_URL || 'http://localhost:6333',
      apiKey: process.env.QDRANT_API_KEY,
    });

    // Initialize vector store
    const vectorStore = new QdrantVectorStore(
      new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY || '',
      }),
      {
        client: qdrantClient,
        collectionName: 'realestate_data',
      }
    );

    // Read JSON data from knowledgeBase.json
    const jsonPath = path.join(process.cwd(), 'public', 'knowledgeBase.json');
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    // Convert every top-level object in the JSON array to a document
    // This includes general info, property arrays, etc.
    const documents: LangchainDocument[] = jsonData.map((item: any, idx: number) => {
      // If it's a general info object, stringify all fields for context
      if (!item.title && !item.name && !item.location) {
        return new LangchainDocument({
          pageContent: JSON.stringify(item, null, 2),
          metadata: { id: `general_${idx}` }
        });
      }
      // If it's a property or property array, stringify as well
      return new LangchainDocument({
        pageContent: JSON.stringify(item, null, 2),
        metadata: { id: item.id || item.name || item.title || `item_${idx}` }
      });
    });

    // Split documents into chunks with overlap for better context
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 100,
    });

    const splitDocs = await textSplitter.splitDocuments(documents);

    // Add documents to vector store in batches to avoid payload size limits
    const batchSize = 100; // Adjust batch size as needed
    for (let i = 0; i < splitDocs.length; i += batchSize) {
      const batch = splitDocs.slice(i, i + batchSize);
      console.log(`Adding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(splitDocs.length / batchSize)}...`);
      await vectorStore.addDocuments(batch);
    }

    console.log('Data processing completed successfully!');
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

processData();