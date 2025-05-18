import ProductCard from "@/components/ProductCard";


const fallbackProducts = [
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

// Server component
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });

    if (!res.ok) throw new Error("API error");

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch API, using fallback products.", error);
    return fallbackProducts;
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-gray-50 min-h-screen">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
