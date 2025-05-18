"use client";

import { Product } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
