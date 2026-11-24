"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, toFa } from "@/lib/format";

// products comes from server page ---> (cart/page.js); it just combine here with shopping cart
export default function CartView({ products }) {
  const { items, ready, updateQuantity, removeItem } = useCart();

  const lines = items
    .map((item) => ({
      ...item,
      product: products.find((p) => p.id === item.productId),
    }))
    .filter((line) => line.product);

  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);

  if (!ready) return <p className="text-muted">در حال بارگذاری سبد خرید...</p>;

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl bg-blush px-6 py-14 text-center">
        <p className="mb-5 text-lg font-bold">سبد خرید شما خالی است</p>
        <Link href="/products" className="btn-primary inline-block">
          مشاهده‌ی محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
      <ul className="flex-1 space-y-3">
        {lines.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex flex-wrap items-center gap-3 rounded-2xl border border-line p-3 md:flex-nowrap"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-20 w-20 shrink-0 rounded-xl bg-petal object-cover"
            />
            <div className="min-w-0 flex-1">
              <Link href={`/products/${product.slug}`} className="font-bold hover:text-brand">
                {product.name}
              </Link>
              <p className="text-sm text-muted">{formatPrice(product.price)}</p>
            </div>

            <div className="flex items-center rounded-full border-[1.5px] border-edge">
              <button
                type="button"
                aria-label="کم کردن تعداد"
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="h-9 w-9"
              >
                −
              </button>
              <span className="w-7 text-center">{toFa(quantity)}</span>
              <button
                type="button"
                aria-label="زیاد کردن تعداد"
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="h-9 w-9"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => removeItem(product.id)}
              className="px-2 text-sm text-muted hover:text-brand"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>

      <aside className="rounded-2xl bg-blush p-6 md:sticky md:top-24 md:w-80">
        <h2 className="font-bold">خلاصه‌ی سفارش</h2>
        <div className="my-4 flex items-center justify-between">
          <span className="text-muted">جمع کل</span>
          <b>{formatPrice(total)}</b>
        </div>
        <button type="button" className="btn-primary w-full">
          ادامه‌ی خرید
        </button>
      </aside>
    </div>
  );
}
