import { notFound } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const fallbackProducts: Product[] = [
  {
    id: 1,
    title: "Classic Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "/products/headphones.jpg",
  },
  {
    id: 2,
    title: "Stylish Running Shoes",
    price: 79.99,
    description: "Lightweight and breathable running shoes for everyday use.",
    image: "/products/shoes.jpg",
  },
  {
    id: 3,
    title: "Smart Watch Series 5",
    price: 199.99,
    description: "Feature-rich smartwatch with health monitoring features.",
    image: "/products/smartwatch.jpg",
  },
];

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API error");

    const product: Product = await res.json();
    return product;
  } catch (error) {
    console.warn(`${error}: API failed, trying fallback.`);
    const fallback = fallbackProducts.find((p) => p.id === Number(id));
    return fallback || null;
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-sm mx-auto mb-6 object-contain"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600">${product.price}</p>
    </div>
  );
}
