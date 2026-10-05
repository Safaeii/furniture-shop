
import {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F3E8] text-[#29251F]">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D9A441]">
              About FurniHome
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Furniture that makes
              <span className="block text-[#D9A441]">
                your house feel like home.
              </span>
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-[#6b6255]">
              At FurniHome, we believe great furniture should be beautiful,
              comfortable, and made to last. We carefully select pieces that
              bring warmth, personality, and timeless style to your home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-2xl font-bold text-[#D9A441]">10+</p>
                <p className="mt-1 text-xs text-[#6b6255]">
                  Years of Experience
                </p>
              </div>

              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-2xl font-bold text-[#D9A441]">5K+</p>
                <p className="mt-1 text-xs text-[#6b6255]">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="text-2xl font-bold text-[#D9A441]">100+</p>
                <p className="mt-1 text-xs text-[#6b6255]">
                  Furniture Pieces
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#D9A441]/30" />

            <img
              src="/images/hero.jpg"
              alt="FurniHome furniture"
              className="relative h-[450px] w-full rounded-[32px] object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D9A441]">
            Our Story
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Designed for the way you live
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#6b6255]">
            FurniHome started with a simple idea: finding beautiful furniture
            should feel inspiring, not overwhelming. From comfortable sofas
            to elegant lighting, we bring together carefully selected pieces
            that help you create a space that feels uniquely yours.
          </p>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D9A441]">
              Why FurniHome
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Why choose us?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#6b6255]">
              Everything we do is focused on making your furniture shopping
              experience simple and enjoyable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
                <Award size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Quality First
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6b6255]">
                We focus on quality materials and carefully selected furniture
                that is built to last.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
                <Heart size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Made with Care
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6b6255]">
                Every piece is selected with attention to comfort, style,
                and the details that make a difference.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
                <Leaf size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Timeless Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6b6255]">
                We choose designs that stay beautiful over time and work
                naturally with different interior styles.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
                <ShieldCheck size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Trusted Service
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6b6255]">
                From choosing your furniture to delivery, we want every step
                to feel easy and reliable.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#29251F] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">

          <div>
            <Truck className="mx-auto text-[#D9A441]" size={28} />
            <h3 className="mt-4 font-semibold">
              Fast Delivery
            </h3>
            <p className="mt-2 text-sm text-[#E8E3D8]">
              Reliable delivery right to your door.
            </p>
          </div>

          <div>
            <Sparkles className="mx-auto text-[#D9A441]" size={28} />
            <h3 className="mt-4 font-semibold">
              Curated Collection
            </h3>
            <p className="mt-2 text-sm text-[#E8E3D8]">
              Carefully selected furniture for modern homes.
            </p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-[#D9A441]" size={28} />
            <h3 className="mt-4 font-semibold">
              Secure Shopping
            </h3>
            <p className="mt-2 text-sm text-[#E8E3D8]">
              A simple and secure shopping experience.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

