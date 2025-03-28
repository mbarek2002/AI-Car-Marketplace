const CarPage = async ({ params })=> {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-12">
      Carid : {id}
    </div>
  );
}

export default CarPage