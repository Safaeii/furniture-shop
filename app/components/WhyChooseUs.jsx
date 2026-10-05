import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#D9A441]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold text-[#29251f] md:text-4xl">
            We Make Furniture Shopping Easy
          </h2>
        </div>

        {/* Features */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Feature 1 */}
          <div className="rounded-3xl border border-[#E8E3D8] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
              <Truck size={27} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#29251f]">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b6255]">
              Fast and reliable delivery right to your doorstep.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-3xl border border-[#E8E3D8] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
              <ShieldCheck size={27} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#29251f]">
              Secure Payment
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b6255]">
              Your payment information is always safe and protected.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-3xl border border-[#E8E3D8] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
              <Headphones size={27} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#29251f]">
              24/7 Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b6255]">
              Our support team is always ready to help you.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-3xl border border-[#E8E3D8] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3E8] text-[#D9A441]">
              <RotateCcw size={27} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#29251f]">
              Easy Returns
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b6255]">
              Simple and hassle-free returns when you need them.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}