
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

import products from "../../../data/products";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8F3E8] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-[#29251f]">
            Product Not Found
          </h1>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-6 py-3 text-white"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F3E8] px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-[#6b6255] hover:text-[#D9A441]"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-6 md:grid-cols-2 md:p-10">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-[#F8F3E8]">
            <img
              src={product.image}
              alt={product.name}
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-medium uppercase tracking-widest text-[#D9A441]">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#29251f]">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-2">
              <Star
                size={18}
                fill="currentColor"
                className="text-[#D9A441]"
              />

              <span className="text-[#6b6255]">
                {product.rating} / 5
              </span>
            </div>

            <p className="mt-6 text-3xl font-bold text-[#29251f]">
              ${product.price}
            </p>

            <p className="mt-6 leading-7 text-[#6b6255]">
              This beautiful piece of furniture is designed to bring
              comfort, quality and style to your home. Perfect for
              creating a warm and modern interior.
            </p>

            <div className="mt-8 flex gap-4">

              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D9A441] px-6 py-3.5 font-medium text-white hover:bg-[#bd8d2e]"
              >
                <ShoppingCart size={19} />
                Add to Cart
              </button>

              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E3D8] text-[#29251f] hover:border-[#D9A441] hover:text-[#D9A441]"
              >
                <Heart size={20} />
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

