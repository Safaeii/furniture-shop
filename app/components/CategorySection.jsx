
import {
  Sofa,
  BedDouble,
  Utensils,
  Lamp,
} from "lucide-react";

import Link from "next/link";

export default function CategorySection() {
  return (
    <section id="categories"    className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">

          <p className="text-sm font-medium uppercase tracking-widest text-[#D9A441]">
            Shop By Category
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#29251f] md:text-4xl">
            Find Furniture For Every Room
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#6b6255]">
            Explore our furniture collections and find the perfect pieces
            for every space in your home.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Living Room */}
          <Link
            href="/products?category=Living%20Room"
            className="group rounded-3xl bg-[#F8F3E8] p-8 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D9A441] shadow-sm">
              <Sofa size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#29251f]">
              Living Room
            </h3>

            <p className="mt-2 text-sm text-[#6b6255]">
              Sofas, chairs and tables
            </p>
          </Link>

          {/* Bedroom */}
          <Link
            href="/products?category=Bedroom"
            className="group rounded-3xl bg-[#F8F3E8] p-8 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D9A441] shadow-sm">
              <BedDouble size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#29251f]">
              Bedroom
            </h3>

            <p className="mt-2 text-sm text-[#6b6255]">
              Beds, cabinets and nightstands
            </p>
          </Link>

          {/* Dining Room */}
          <Link
            href="/products?category=Dining%20Room"
            className="group rounded-3xl bg-[#F8F3E8] p-8 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D9A441] shadow-sm">
              <Utensils size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#29251f]">
              Dining Room
            </h3>

            <p className="mt-2 text-sm text-[#6b6255]">
              Dining tables and chairs
            </p>
          </Link>

          {/* Lighting */}
          <Link
            href="/products?category=Lighting"
            className="group rounded-3xl bg-[#F8F3E8] p-8 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D9A441] shadow-sm">
              <Lamp size={28} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#29251f]">
              Lighting
            </h3>

            <p className="mt-2 text-sm text-[#6b6255]">
              Lamps and decorative lights
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}


