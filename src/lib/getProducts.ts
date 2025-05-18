import { Product } from "@/types/Product";

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Mock Product 1",
    price: 29.99,
    description: "This is a mocked product description.",
    category: "mock-category",
    image: "/mock-image-1.jpg",
  },
  {
    id: 2,
    title: "Mock Product 2",
    price: 49.99,
    description: "Another mocked product.",
    category: "mock-category",
    image: "/mock-image-2.jpg",
  },
];

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error("API returned non-ok status:", res.status);
      return mockProducts;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch failed, falling back to mock data:", error);
    return mockProducts;
  }
}
