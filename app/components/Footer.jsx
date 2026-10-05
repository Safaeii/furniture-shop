import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Globe,
  Share2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#29251F] text-white">

      {/* Newsletter */}
      <div className="border-b border-[#4a443b]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">

          <div>
            <h2 className="text-2xl font-bold">
              Stay In The Loop
            </h2>

            <p className="mt-2 text-sm text-[#c8c1b5]">
              Subscribe to get updates about new products and special offers.
            </p>
          </div>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-l-full border border-[#5a5348] bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-[#9d968b] focus:border-[#D9A441]"
            />

            <button className="rounded-r-full bg-[#D9A441] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#bd8d2e]">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Furni<span className="text-[#D9A441]">Home</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-7 text-[#c8c1b5]">
            Beautiful furniture designed to make your home
            comfortable, warm and stylish.
          </p>

          {/* Social */}
          <div className="mt-5 flex gap-3">

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5a5348] transition hover:border-[#D9A441] hover:text-[#D9A441]">
              <MessageCircle size={17} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5a5348] transition hover:border-[#D9A441] hover:text-[#D9A441]">
              <Globe size={17} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5a5348] transition hover:border-[#D9A441] hover:text-[#D9A441]">
              <Share2 size={17} />
            </button>

          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold">
            Shop
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-[#c8c1b5]">
            <li className="cursor-pointer transition hover:text-[#D9A441]">
              All Products
            </li>

            <li className="cursor-pointer transition hover:text-[#D9A441]">
              Living Room
            </li>

            <li className="cursor-pointer transition hover:text-[#D9A441]">
              Bedroom
            </li>

            <li className="cursor-pointer transition hover:text-[#D9A441]">
              Dining Room
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold">
            Company
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-[#c8c1b5]">
            <li className="cursor-pointer transition hover:text-[#D9A441]">
              About Us
            </li>

            <li className="cursor-pointer transition hover:text-[#D9A441]">
              Contact
            </li>

            <li className="cursor-pointer transition hover:text-[#D9A441]">
              FAQ
            </li>

            <li className="cursor-pointer transition hover:text-[#D9A441]">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4 text-sm text-[#c8c1b5]">

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-[#D9A441]"
              />
              <span>
                123 Furniture Street
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={18}
                className="shrink-0 text-[#D9A441]"
              />
              <span>
                +1 234 567 890
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="shrink-0 text-[#D9A441]"
              />
              <span>
                hello@furnihome.com
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-[#4a443b]">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-[#9d968b]">
          © 2026 FurniHome. All rights reserved.
        </div>
      </div>

    </footer>
  );
}