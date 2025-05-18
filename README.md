```
# Songdis Frontend

This is the frontend for the **Songdis** product showcase website, built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Preview:** _Coming Soon_  
📂 **GitHub Repo:** [github.com/richiedarl/frontend](https://github.com/richiedarl/frontend)

---

## 🚀 Features

- ✅ Product listing with real-time API fetching from [FakeStoreAPI](https://fakestoreapi.com/)
- ✅ Fallback to mock data when API is unavailable
- ✅ Product detail pages with dynamic routing
- ✅ Responsive layout using Tailwind CSS
- ✅ Error handling and graceful fallback UI
- ✅ Minimal cart logic (WIP)
- ✅ Clean component-based structure

---

## 📁 Project Structure

```

src/
│
├── app/
│   ├── layout.tsx         # Root layout (shared across pages)
│   ├── page.tsx           # Home page
│   └── products/
│       └── \[id]/page.tsx  # Product detail page
│
├── components/
│   └── ProductCard.tsx    # Reusable card component for product items
│
├── styles/
│   └── globals.css        # Tailwind base styles

````

---

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
git clone https://github.com/richiedarl/frontend.git
cd frontend
pnpm install
# or npm install
````

### Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🔌 API Integration

This project fetches product data from:

```
https://fakestoreapi.com/products
```

If the API is unavailable, fallback mock products are shown to prevent breaking the UI.

---

## ⚖️ Trade-offs and Decisions

* **API Reliability vs Development Speed**:
  The decision to use FakeStoreAPI for quick prototyping provided realistic data without needing a custom backend. However, it introduced reliability risks — mitigated with a local fallback.

* **Server-side Data Fetching**:
  Used async functions in Next.js App Router to fetch data server-side. This improves SEO and page load consistency, but at the cost of dynamic interactivity or client-state updates for now.

* **No Global State (yet)**:
  Cart logic is minimal and does not yet persist across pages or reloads. A state management library like Zustand or Redux could be integrated in the future.

* **Minimal Styling vs Performance**:
  Chose Tailwind CSS for fast, utility-first styling without extra CSS files. This speeds up development but may lead to verbose JSX in complex UIs.

* **No Unit Tests**:
  For the sake of speed and focusing on core UI/UX, tests were not implemented in this version. This would be revisited in a production setting.

---

## 🧪 Testing

*Not yet implemented.* You may test pages manually or integrate Jest/Cypress in future iterations.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

**Darlington Okorie**
GitHub: [@richiedarl](https://github.com/richiedarl)
Email: *[devdarlcreates@gmail.com](mailto:devdarlcreates@gmail.com)*

```
