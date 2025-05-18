// src/app/layout.tsx
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import './styles/globals.css';




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
