"use client";

import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [success, setSuccess] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    console.log("Order:", {
      customer: form,
      products: cart,
      total: totalPrice,
    });
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8F3E8] px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm">

          <h1 className="text-3xl font-bold text-[#29251F]">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-[#6b6255]">
            Add some products before going to checkout.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-6 py-3 font-medium text-white hover:bg-[#bd8d2e]"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F3E8] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* TITLE */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-[#D9A441]">
            FurniHome
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#29251F]">
            Checkout
          </h1>
        </div>

        {success ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F3E8]">
              <CreditCard
                size={28}
                className="text-[#D9A441]"
              />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#29251F]">
              Order Placed Successfully!
            </h2>

            <p className="mt-3 text-[#6b6255]">
              Thank you for shopping with FurniHome.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-[#D9A441] px-7 py-3 font-medium text-white hover:bg-[#bd8d2e]"
            >
              Back to Home
            </Link>

          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

            {/* FORM */}
            <div className="rounded-3xl bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-[#29251F]">
                Shipping Information
              </h2>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#29251F]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#29251F]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#29251F]">
                    Address
                  </label>

                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="Your address"
                    className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#29251F]">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                      className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 outline-none focus:border-[#D9A441]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#29251F]">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      required
                      placeholder="Postal code"
                      className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 outline-none focus:border-[#D9A441]"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9A441] py-3.5 font-medium text-white transition hover:bg-[#bd8d2e]"
                >
                  <CreditCard size={18} />
                  Place Order
                </button>

              </form>
            </div>

            {/* ORDER SUMMARY */}
            <div className="h-fit rounded-3xl bg-white p-7 shadow-sm">

              <h2 className="text-xl font-bold text-[#29251F]">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <div>
                        <p className="text-sm font-medium text-[#29251F]">
                          {item.name}
                        </p>

                        <p className="text-xs text-[#6b6255]">
                          Qty: {item.quantity}
                        </p>
                      </div>

                    </div>

                    <span className="text-sm font-semibold text-[#29251F]">
                      $
                      {(
                        Number(item.price) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}

              </div>

              <div className="my-6 border-t border-[#E8E3D8]" />

              <div className="flex justify-between text-sm text-[#6b6255]">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="font-semibold text-[#29251F]">
                  Total
                </span>

                <span className="text-xl font-bold text-[#D9A441]">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

            </div>

          </div>
        )}
      </div>
    </main>
  );
}