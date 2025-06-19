import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naksh Jewels - Luxury Jewelry Store",
  description: "Discover exquisite jewelry pieces at Naksh Jewels. From elegant rings to stunning necklaces, find the perfect piece for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-black font-bold">Naksh Jewels</div>
              <div className="text-black hidden md:flex space-x-8">
                <a href="/" className="hover:text-black-600">Home</a>
                <a href="/products" className="hover:text-black-600">Products</a>
                <a href="/cart" className="hover:text-black-600">Cart</a>
              </div>
              <div className="md:hidden">
                {/* Mobile menu button */}
                <button className="p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-black font-semibold mb-4">About Us</h3>
                <p className="text-gray-600">
                  Naksh Jewels offers exquisite jewelry pieces crafted with precision and care.
                </p>
              </div>
              <div>
                <h3 className="text-black font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/products" className="text-gray-600 hover:text-gray-900">Products</a></li>
                  <li><a href="/cart" className="text-gray-600 hover:text-gray-900">Cart</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-black font-semibold mb-4">Contact</h3>
                <p className="text-gray-600">
                  Email: info@nakshjewels.com<br />
                  Phone: (123) 456-7890
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              © {new Date().getFullYear()} Naksh Jewels. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 