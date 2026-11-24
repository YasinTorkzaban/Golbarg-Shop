import { Suspense } from "react";
import { getCategories, getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

export const metadata = { title: "محصولات" };

// this page is SSR; just the searchbar is CSR
export default async function ProductsPage({ searchParams }) {
  const { q = "", category = "" } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts({ q, category }),
    getCategories(),
  ]);

  return (
    <div className="page-container py-8">
      <h1 className="page-title">محصولات</h1>

      <div className="mb-6 space-y-4">
        <Suspense>
          <SearchBar />
        </Suspense>
        <CategoryFilter categories={categories} active={category} q={q} />
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl bg-blush px-6 py-14 text-center">
          <p className="font-bold">محصولی پیدا نشد</p>
          <p className="mt-2 text-sm text-muted">عبارت دیگری را جستجو کنید یا دسته‌بندی را عوض کنید.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
