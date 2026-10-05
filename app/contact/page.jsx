
"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Your message has been sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-[#F8F3E8] text-[#29251F]">

      {/* ================= HERO ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D9A441]">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            We would love to
            <span className="block text-[#D9A441]">
              hear from you.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#6b6255]">
            Have a question about a product, your order, or anything else?
            Send us a message and our team will be happy to help.
          </p>

        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= CONTACT INFO ================= */}
          <div className="rounded-[28px] bg-[#29251F] p-8 text-white md:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D9A441]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold">
    Let&apos;s talk about your space.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#E8E3D8]">
              Our team is here to help you find the right furniture and
              answer any questions you may have.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9A441]/15 text-[#D9A441]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-[#E8E3D8]">
                    hello@furnihome.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9A441]/15 text-[#D9A441]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#E8E3D8]">
                    +1 234 567 890
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9A441]/15 text-[#D9A441]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#E8E3D8]">
                    123 Design Street
                    <br />
                    New York, NY
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9A441]/15 text-[#D9A441]">
                  <Clock size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#E8E3D8]">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-[28px] bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D9A441]">
              Send a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How can we help?
            </h2>

            {/* Success Message */}
            {success && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl border border-[#E8E3D8] px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-[#E8E3D8] px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-[#aaa298] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9A441] py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bd8d2e] hover:shadow-lg active:translate-y-0"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D9A441]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-[#E8E3D8] p-6">
              <MessageCircle
                size={22}
                className="text-[#D9A441]"
              />

              <h3 className="mt-4 font-semibold">
                How long does delivery take?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6b6255]">
                Delivery times depend on the product and your location.
                We will provide delivery information when you place your
                order.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E3D8] p-6">
              <MessageCircle
                size={22}
                className="text-[#D9A441]"
              />

              <h3 className="mt-4 font-semibold">
                Can I return my furniture?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6b6255]">
                Yes. Our return policy is designed to make your shopping
                experience simple and comfortable.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E3D8] p-6">
              <MessageCircle
                size={22}
                className="text-[#D9A441]"
              />

              <h3 className="mt-4 font-semibold">
                Can I track my order?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6b6255]">
                Yes. Once your order is shipped, tracking information will
                be available.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E3D8] p-6">
              <MessageCircle
                size={22}
                className="text-[#D9A441]"
              />

              <h3 className="mt-4 font-semibold">
                How can I contact support?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6b6255]">
                You can use the contact form above or send us an email.
                Our team will be happy to help.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

