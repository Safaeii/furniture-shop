"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";

import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, setWishlist } = useWishlist();

  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );
  };

  return (
    <main className="min-h-screen bg-[#F8F3E8] px-6 py-12">

      <div className="mx-auto max-w-7xl">

        {/* TITLE */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[#D9A441]">
            Your Favorites
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#29251F]">
            Wishlist
          </h1>
        </div>

        {/* EMPTY */}
        {wishlist.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-[#E8E3D8] bg-white text-center">

            <Heart
              size={55}
              className="mb-5 text-[#D9A441]"
            />

            <h2 className="text-2xl font-semibold text-[#29251F]">
              Your wishlist is empty
            </h2>

            <p className="mt-2 text-[#6b6255]">
              Save your favorite furniture here.
            </p>

            <Link
              href="/products"
              className="mt-6 rounded-full bg-[#D9A441] px-7 py-3 font-medium text-white transition hover:bg-[#bd8d2e]"
            >
              Browse Products
            </Link>

          </div>
        ) : (

          /* PRODUCTS */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-3xl border border-[#E8E3D8] bg-white"
              >

                {/* IMAGE */}
                <Link href={`/products/${product.id}`}>
                  <div className="h-64 overflow-hidden bg-[#F8F3E8]">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />

                  </div>
                </Link>

                {/* INFO */}
                <div className="p-5">

                  <p className="text-sm text-[#D9A441]">
                    {product.category}
                  </p>

                  <Link href={`/products/${product.id}`}>
                    <h2 className="mt-2 text-lg font-semibold text-[#29251F] hover:text-[#D9A441]">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-xl font-bold text-[#29251F]">
                      ${product.price}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E3D8] text-[#29251F] transition hover:border-red-300 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </main>
  );
}