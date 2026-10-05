"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

import { useCart } from "../context/ CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({
  id,
  image,
  name,
  category,
  price,
  rating,
}) {
  const { cart, setCart } = useCart();

  const { wishlist, setWishlist } = useWishlist();

  const addToCart = () => {
    const existingProduct = cart.find(
      (item) => item.id === id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          image,
          name,
          category,
          price,
          rating,
          quantity: 1,
        },
      ]);
    }
  };

  const toggleWishlist = () => {
    const isFavorite = wishlist.some(
      (item) => item.id === id
    );

    if (isFavorite) {
      setWishlist(
        wishlist.filter((item) => item.id !== id)
      );
    } else {
      setWishlist([
        ...wishlist,
        {
          id,
          image,
          name,
          category,
          price,
          rating,
        },
      ]);
    }
  };

  const isFavorite = wishlist.some(
    (item) => item.id === id
  );

  return (
    <div className="group overflow-hidden rounded-3xl border border-[#E8E3D8] bg-white">

      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden bg-[#F8F3E8]">

        <Link href={`/products/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full cursor-pointer object-cover"
          />
        </Link>

        {/* WISHLIST */}
        <button
          type="button"
          onClick={toggleWishlist}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
        >
          <Heart
            size={19}
            fill={isFavorite ? "currentColor" : "none"}
            className={
              isFavorite
                ? "text-[#D9A441]"
                : "text-[#29251f]"
            }
          />
        </button>

      </div>

      {/* INFO */}
      <div className="p-5">

        <p className="text-sm text-[#D9A441]">
          {category}
        </p>

        <Link href={`/products/${id}`}>
          <h3 className="mt-2 cursor-pointer text-lg font-semibold text-[#29251f]">
            {name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="mt-3 flex items-center gap-1">

          <Star
            size={15}
            fill="currentColor"
            className="text-[#D9A441]"
          />

          <span className="text-sm text-[#6b6255]">
            {rating}
          </span>

        </div>

        {/* PRICE + CART */}
        <div className="mt-4 flex items-center justify-between">

          <span className="text-xl font-bold text-[#29251f]">
            ${price}
          </span>

          <button
            type="button"
            onClick={addToCart}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9A441] text-white transition hover:bg-[#bd8d2e]"
          >
            <ShoppingCart size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}