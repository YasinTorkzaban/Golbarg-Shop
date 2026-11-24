"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toFa } from "@/lib/format";

// compact=true: for product card | compact=false: for details page
export default function AddToCartButton({ productId, compact = false }) {
  const { items, ready, addItem, updateQuantity, removeItem } = useCart();

  // count of this product in shopping cart (0 means there is not any of this product in cart)
  const quantity = items.find((i) => i.productId === productId)?.quantity ?? 0;

  // product is in the cart: the counter which is connected to the cart
  if (ready && quantity > 0) {
    return (
      <div>
        <div className="flex items-center justify-between rounded-full border-[1.5px] border-edge">
          <button
            type="button"
            aria-label={quantity === 1 ? "حذف از سبد خرید" : "کم کردن تعداد"}
            onClick={() =>
              quantity === 1
                ? removeItem(productId)
                : updateQuantity(productId, quantity - 1)
            }
            className={`text-lg ${compact ? "h-9 w-9" : "h-11 w-11"}`}
          >
            {quantity === 1 ? "×" : "−"}
          </button>
          <span className="font-bold" aria-live="polite">
            {toFa(quantity)}
          </span>
          <button
            type="button"
            aria-label="زیاد کردن تعداد"
            onClick={() => updateQuantity(productId, quantity + 1)}
            className={`text-lg ${compact ? "h-9 w-9" : "h-11 w-11"}`}
          >
            +
          </button>
        </div>

        {!compact && (
          <Link href="/cart" className="mt-2 block text-center text-sm text-brand-dark hover:underline">
            مشاهده‌ی سبد خرید
          </Link>
        )}
      </div>
    );
  }

  // product is not in the cart
  return (
    <button
      type="button"
      onClick={() => addItem(productId, 1)}
      className={compact ? "btn-outline w-full" : "btn-primary w-full"}
    >
      {compact ? "افزودن به سبد" : "افزودن به سبد خرید"}
    </button>
  );
}