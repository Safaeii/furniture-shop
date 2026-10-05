import { ArrowRight, Tag } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#29251F] px-8 py-12 md:px-14 md:py-16">

          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D9A441] opacity-20" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#D9A441] opacity-10" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            {/* Text */}
            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-2 text-[#D9A441]">
                <Tag size={20} />

                <span className="text-sm font-medium uppercase tracking-widest">
                  Special Offer
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                Make Your Space
                <span className="block text-[#D9A441]">
                  More Beautiful
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#d6d0c5]">
                Get up to 30% off on selected furniture pieces.
                Upgrade your home with our premium collection.
              </p>

            </div>

            {/* Button */}
            <button className="group flex shrink-0 items-center gap-3 rounded-full bg-[#D9A441] px-7 py-3.5 font-medium text-white transition hover:bg-[#bd8d2e]">

              Shop Sale

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </div>
        </div>
      </div>
    </section>
  );
}