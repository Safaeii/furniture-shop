
"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import products from "../../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category
      ? product.category === category
      : true;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const pageTitle = category
    ? `${category} Furniture`
    : "All Products";

  return (
    <main className="min-h-screen bg-[#F8F3E8]">

      {/* Page Header */}
      <section className="border-b border-[#E8E3D8] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="text-sm font-medium uppercase tracking-widest text-[#D9A441]">
            Our Collection
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#29251f] md:text-5xl">
            {pageTitle}
          </h1>

          <p className="mt-4 max-w-xl text-[#6b6255]">
            Discover beautiful furniture designed to make
            your home comfortable and stylish.
          </p>

        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8173]"
            />

            <input
              type="text"
              placeholder="Search furniture..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[#E8E3D8] bg-white py-3 pl-11 pr-5 text-sm text-[#29251f] outline-none focus:border-[#D9A441]"
            />

          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">

            {/* All */}
            <a
              href="/products"
              className={
                !category
                  ? "rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-medium text-white"
                  : "rounded-full border border-[#E8E3D8] bg-white px-5 py-2.5 text-sm text-[#29251f] transition hover:border-[#D9A441]"
              }
            >
              All
            </a>

            {/* Living Room */}
            <a
              href="/products?category=Living%20Room"
              className={
                category === "Living Room"
                  ? "rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-medium text-white"
                  : "rounded-full border border-[#E8E3D8] bg-white px-5 py-2.5 text-sm text-[#29251f] transition hover:border-[#D9A441]"
              }
            >
              Living Room
            </a>

            {/* Bedroom */}
            <a
              href="/products?category=Bedroom"
              className={
                category === "Bedroom"
                  ? "rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-medium text-white"
                  : "rounded-full border border-[#E8E3D8] bg-white px-5 py-2.5 text-sm text-[#29251f] transition hover:border-[#D9A441]"
              }
            >
              Bedroom
            </a>

            {/* Dining Room */}
            <a
              href="/products?category=Dining%20Room"
              className={
                category === "Dining Room"
                  ? "rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-medium text-white"
                  : "rounded-full border border-[#E8E3D8] bg-white px-5 py-2.5 text-sm text-[#29251f] transition hover:border-[#D9A441]"
              }
            >
              Dining Room
            </a>

            {/* Lighting */}
            <a
              href="/products?category=Lighting"
              className={
                category === "Lighting"
                  ? "rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-medium text-white"
                  : "rounded-full border border-[#E8E3D8] bg-white px-5 py-2.5 text-sm text-[#29251f] transition hover:border-[#D9A441]"
              }
            >
              Lighting
            </a>

            {/* Filters */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-[#E8E3D8] bg-white px-5 py-2.5 text-sm text-[#29251f]"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6 mt-10">

          <p className="text-sm text-[#6b6255]">
            Showing{" "}
            <span className="font-semibold text-[#29251f]">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
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

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">

            <p className="text-lg font-medium text-[#29251f]">
              No products found
            </p>

            <p className="mt-2 text-sm text-[#6b6255]">
              Try another search or category.
            </p>

          </div>
        )}

      </section>
    </main>
  );
}

