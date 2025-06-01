import PropertyDetails from "@/components/propertyDetails";

export default function DetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <PropertyDetails id={id} />
    </div>
  );
}
