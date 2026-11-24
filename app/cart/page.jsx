import { getProducts } from "@/lib/api";
import CartView from "@/components/CartView";

export const metadata = { title: "سبد خرید" };

export default async function CartPage() {
  const products = await getProducts();

  return (
    <div className="page-container py-8">
      <h1 className="page-title">سبد خرید</h1>
      <CartView products={products} />
    </div>
  );
}
