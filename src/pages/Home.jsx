import ProductCard from "../components/contents/ProductCard";

function Home() {
  return (
    <main className="p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">BRAND NEW!</h1>
        <ProductCard latest={true} />
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">BEST SELLING</h1>
        <ProductCard randomize={false} />
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">FOR YOU</h1>
        <ProductCard randomize={true} />
      </div>
    </main>
  );
}

export default Home;
