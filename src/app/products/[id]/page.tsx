import { Product } from "@/types";
import { mockProducts } from "@/lib/mockProducts";
import Image from "next/image";
import Link from "next/link";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch product");

    const data: Product = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product, trying fallback:", error);
    const fallback = mockProducts.find((p) => p.id.toString() === id);
    return fallback || null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/" className="text-blue-500 mt-4 block">← Go back to products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-96 bg-white border rounded-md">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-xl font-semibold text-green-600 mb-4">${product.price}</div>
          <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
