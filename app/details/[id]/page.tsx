import PropertyDetails from "@/components/propertyDetails";

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <PropertyDetails id={id} />
    </div>
  );
}
