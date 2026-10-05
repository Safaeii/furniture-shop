"use client";

import { Trash2, Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/ CartContext";

export default function CartPage() {
  const { cart, setCart } = useCart();

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#F8F3E8] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* TITLE */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-[#D9A441]">
            Shopping
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#29251F]">
            Your Cart
          </h1>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
            <ShoppingCart
              size={50}
              className="mx-auto text-[#D9A441]"
            />

            <h2 className="mt-5 text-2xl font-bold text-[#29251F]">
              Your cart is empty
            </h2>

            <p className="mt-2 text-[#6b6255]">
              Start shopping and add some beautiful furniture.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-flex rounded-full bg-[#D9A441] px-7 py-3 font-medium text-white transition hover:bg-[#bd8d2e]"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

            {/* PRODUCTS */}
            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-full rounded-2xl object-cover sm:w-32"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-[#D9A441]">
                      {item.category}
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-[#29251F]">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-semibold text-[#29251F]">
                      ${item.price}
                    </p>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E3D8] text-[#29251F] hover:border-[#D9A441]"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-5 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E3D8] text-[#29251F] hover:border-[#D9A441]"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* REMOVE */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

            </div>

            {/* SUMMARY */}
            <div className="h-fit rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#29251F]">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-[#6b6255]">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-[#6b6255]">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="my-6 border-t border-[#E8E3D8]" />

              <div className="flex justify-between">
                <span className="font-semibold text-[#29251F]">
                  Total
                </span>

                <span className="text-xl font-bold text-[#D9A441]">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
<Link
  href="/checkout"
  className="mt-7 block w-full rounded-full bg-[#D9A441] py-3.5 text-center font-medium text-white transition hover:bg-[#bd8d2e]"
>
  Checkout
</Link>
              <Link
                href="/products"
                className="mt-3 block text-center text-sm text-[#6b6255] hover:text-[#D9A441]"
              >
                Continue Shopping
              </Link>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}