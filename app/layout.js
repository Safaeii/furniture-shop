import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { CartProvider } from "./context/ CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FurniHome",
  description: "Modern furniture online store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <WishlistProvider>
          <CartProvider>

            <Header />

            {children}

            <Footer />

          </CartProvider>
        </WishlistProvider>

      </body>
    </html>
  );
}