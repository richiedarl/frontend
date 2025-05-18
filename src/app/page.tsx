import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product"; // Import the shared Product type

// Fallback products for offline or API failure scenarios
const fallbackProducts: Product[] = [
  {
    id: 1,
    title: "Classic Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "/products/headphones.jpg",
    category: "gadgets"
  },
  {
    id: 2,
    title: "Stylish Running Shoes",
    price: 79.99,
    description: "Lightweight and breathable running shoes for everyday use.",
    image: "/products/shoes.jpg",
    category: "footwear"
  },
  {
    id: 3,
    title: "Smart Watch Series 5",
    price: 199.99,
    description: "Feature-rich smartwatch with health monitoring features.",
    image: "/products/smartwatch.jpg",
    category: "gadgets"
  },
];

// Server component for fetching products from the API
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });

    if (!res.ok) throw new Error("API error");

    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch API, using fallback products.", error);
    return fallbackProducts;
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-gray-50 min-h-screen">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
