import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import { formatPrice, toFa } from "@/lib/format";
import ProductGallery from "@/components/ProductGallery";
import AddToCartButton from "@/components/AddToCartButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return { title: product ? product.name : "محصول پیدا نشد" };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const hasBeforeAfter = product.beforeImage && product.afterImage;

  return (
    <>
      <div className="page-container py-6">
        <nav aria-label="مسیر صفحه" className="mb-5 text-sm text-muted">
          <Link href="/" className="hover:text-brand">خانه</Link> /{" "}
          <Link href="/products" className="hover:text-brand">محصولات</Link> / {product.name}
        </nav>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <p className="text-muted">{product.brand}</p>
            <h1 className="mb-3 mt-1 text-2xl font-bold md:text-3xl">{product.name}</h1>
            <p className="text-sm text-muted">
              امتیاز {toFa(product.rating)} · {toFa(product.reviewsCount)} نظر
            </p>
            <p className="my-4 text-2xl font-bold md:text-3xl">{formatPrice(product.price)}</p>
            <p className="leading-8 text-muted">{product.description}</p>

            <div className="my-5 flex flex-wrap gap-2">
              <span className="btn-outline">{product.volume}</span>
              <span className="btn-outline">{product.suitableFor}</span>
            </div>

            {product.stock < 10 && (
              <p className="mb-3 text-sm text-brand-dark">
                تنها {toFa(product.stock)} عدد در انبار باقی مانده
              </p>
            )}
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>

      {/* just for products which have before/after images */}
      {hasBeforeAfter && (
        <section className="my-10 bg-blush py-10">
          <div className="page-container text-center">
            <h2 className="mb-5 text-xl font-bold md:text-2xl">نتیجه‌ی استفاده از محصول</h2>
            <BeforeAfterSlider
              before={product.beforeImage}
              after={product.afterImage}
              alt={product.name}
            />
          </div>
        </section>
      )}

      <section className="page-container grid gap-4 py-6 md:grid-cols-3">
        <div className="rounded-2xl border border-line p-5">
          <h2 className="mb-3 font-bold">ترکیبات</h2>
          <ul className="list-inside list-disc space-y-1 text-sm leading-7 text-muted">
            {product.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line p-5">
          <h2 className="mb-3 font-bold">نحوه‌ی استفاده</h2>
          <p className="text-sm leading-7 text-muted">{product.usage}</p>
        </div>
        <div className="rounded-2xl border border-line p-5">
          <h2 className="mb-3 font-bold">مشخصات</h2>
          <dl className="space-y-1 text-sm leading-7 text-muted">
            <div className="flex justify-between"><dt>برند</dt><dd>{product.brand}</dd></div>
            <div className="flex justify-between"><dt>حجم</dt><dd>{product.volume}</dd></div>
            <div className="flex justify-between gap-3"><dt>مناسب برای</dt><dd>{product.suitableFor}</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
