'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-8 py-5 flex justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-extrabold tracking-wide hover:text-yellow-400 transition-colors">
        SONGDIS
      </Link>
      <div className="flex gap-8 items-center">
        <Link
          href="/"
          className="text-lg font-medium hover:text-yellow-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-lg font-medium hover:text-yellow-300 transition-colors"
        >
          About
        </Link>
        <div className="relative">
          <span className="text-2xl">🛒</span>
          {mounted && totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-gray-900 font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
