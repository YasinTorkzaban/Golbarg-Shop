import Link from "next/link";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-square bg-petal">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-3 pt-3 md:px-4 md:pt-4">
          <p className="text-xs text-muted">{product.brand}</p>
          <h3 className="mt-1 line-clamp-2 font-bold">{product.name}</h3>
          <p className="mt-1 text-sm text-muted">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <div className="mt-auto p-3 md:p-4">
        <AddToCartButton productId={product.id} compact />
      </div>
    </article>
  );
}
