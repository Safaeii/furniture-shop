

"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Search,
  ShoppingCart,
  UserRound,
  Heart,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../context/ CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative overflow-hidden border-b border-[#D9A441]/20 bg-gradient-to-r from-white via-[#FFF8E8] to-white shadow-sm">

      {/* CENTER GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A441]/10 blur-3xl" />

      {/* MAIN HEADER */}
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#29251F]"
        >
          Furni<span className="text-[#D9A441]">Home</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-[#29251F] transition duration-200 hover:text-[#D9A441]"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-[#29251F] transition duration-200 hover:text-[#D9A441]"
          >
            Shop
          </Link>

          <Link
            href="/#categories"
            className="text-sm font-medium text-[#29251F] transition duration-200 hover:text-[#D9A441]"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[#29251F] transition duration-200 hover:text-[#D9A441]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#29251F] transition duration-200 hover:text-[#D9A441]"
          >
            Contact
          </Link>

        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/20 bg-white/70 text-[#29251F] shadow-sm backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-white hover:text-[#D9A441]"
          >
            <Search size={19} />
          </button>

          {/* WISHLIST */}
          <Link
            href="/wishlist"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/20 bg-white/70 text-[#29251F] shadow-sm backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-white hover:text-[#D9A441] sm:flex"
          >
            <Heart size={19} />
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/20 bg-white/70 text-[#29251F] shadow-sm backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-white hover:text-[#D9A441]"
          >
            <ShoppingCart size={19} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9A441] text-[10px] font-semibold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>

          {/* LOGIN */}
          <Link
            href="/login"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/20 bg-white/70 text-[#29251F] shadow-sm backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-white hover:text-[#D9A441] sm:flex"
          >
            <UserRound size={19} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/20 bg-white/70 text-[#29251F] shadow-sm backdrop-blur-sm transition duration-200 hover:bg-white hover:text-[#D9A441] md:hidden"
          >
            {isMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="relative z-10 border-t border-[#D9A441]/20 bg-white/80 px-6 py-6 backdrop-blur-xl md:hidden">

          <nav className="mx-auto flex max-w-7xl flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Shop
            </Link>

            <Link
              href="/#categories"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Categories
            </Link>

            <Link
              href="/wishlist"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Wishlist
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Contact
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Cart
            </Link>

            <Link
              href="/login"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#29251F] transition hover:bg-[#F8F3E8] hover:text-[#D9A441]"
            >
              Login
            </Link>

          </nav>
        </div>
      )}

      {/* CENTER GOLD LINE */}
      <div className="absolute bottom-0 left-1/2 h-[1px] w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />

    </header>
  );
}