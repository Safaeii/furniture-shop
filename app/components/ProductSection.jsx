
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const products = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      category: "Living Room",
      price: "249",
      rating: "4.8",
      image: "/images/chair.jpg",
    },
    {
      id: 2,
      name: "Comfort Sofa",
      category: "Living Room",
      price: "599",
      rating: "4.9",
      image: "/images/sofa.jpg",
    },
    {
      id: 3,
      name: "Wooden Dining Table",
      category: "Dining Room",
      price: "449",
      rating: "4.7",
      image: "/images/table.jpg",
    },
    {
      id: 4,
      name: "Modern Floor Lamp",
      category: "Lighting",
      price: "129",
      rating: "4.6",
      image: "/images/lamp.jpg",
    },
  ];

  return (
    <section className="bg-[#F8F3E8] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#D9A441]">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-[#29251f] md:text-4xl">
              Featured Products
            </h2>
          </div>

          <button
            type="button"
            className="hidden rounded-full border border-[#D9A441] px-6 py-3 font-medium text-[#29251f] transition hover:bg-[#D9A441] hover:text-white sm:block"
          >
            View All
          </button>
        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

