import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F8F3E8]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">

        {/* Content */}
        <div>
          <div className="mb-5 flex items-center gap-2 text-[#D9A441]">
            <Star size={18} fill="currentColor" />
            <span className="text-sm font-medium text-[#6b6255]">
              Premium Furniture Collection
            </span>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-[#29251f] md:text-6xl">
            Make Your Home
            <span className="block text-[#D9A441]">
              Feel Like Home
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#6b6255]">
            Discover beautiful furniture designed to bring comfort,
            warmth and style to every corner of your home.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 font-medium text-white transition hover:bg-[#bd8d2e]">
              Shop Now
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border border-[#D9A441] px-7 py-3.5 font-medium text-[#29251f] transition hover:bg-white">
              Explore
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/hero.jpg"
              alt="Modern furniture"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-4 shadow-lg">
            <p className="text-2xl font-bold text-[#29251f]">500+</p>
            <p className="text-sm text-[#6b6255]">
              Premium Products
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}