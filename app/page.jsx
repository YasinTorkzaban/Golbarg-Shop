import Link from "next/link";
import { getCategories, getFeaturedProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const HERO_IMAGE = "/images/hero.svg";

export default async function HomePage() {
  const [categories, featured] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
  ]);
  const demo = featured.find((p) => p.beforeImage && p.afterImage);

  return (
    <>
      {/* banner */}
      <section className="bg-blush">
        <div className="page-container flex flex-col-reverse items-center gap-8 py-10 md:flex-row md:justify-between md:py-14">
          <div className="text-center md:text-right">
            <h1 className="text-3xl font-bold leading-snug md:text-5xl md:leading-snug">
              زیبایی طبیعی، با انتخاب درست
            </h1>
            <p className="mb-6 mt-3 text-muted">
              بهترین محصولات مراقبت از پوست، مو و آرایش
            </p>
            <Link href="/products" className="btn-primary inline-block">
              مشاهده‌ی محصولات
            </Link>
          </div>
          <img
            src={HERO_IMAGE}
            alt=""
            className="w-full max-w-md rounded-3xl object-cover md:w-[420px]"
          />
        </div>
      </section>

      {/* categories */}
      <section className="page-container flex flex-wrap justify-center gap-2 py-7">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="btn-outline">
            {cat.name}
          </Link>
        ))}
      </section>

      {/* featured products */}
      <section className="page-container py-4">
        <h2 className="mb-4 text-2xl font-bold">محصولات ویژه</h2>
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* before/after example */}
      {demo && (
        <section className="mt-12 bg-blush">
          <div className="page-container grid items-center gap-8 py-10 md:grid-cols-2">
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-bold">نتیجه را خودتان ببینید</h2>
              <p className="mb-5 mt-2 text-muted">
                با کشیدن اسلایدر، تفاوت قبل و بعد از استفاده از {demo.name} را ببینید.
              </p>
              <Link href={`/products/${demo.slug}`} className="btn-primary inline-block">
                مشاهده‌ی محصول
              </Link>
            </div>
            <BeforeAfterSlider before={demo.beforeImage} after={demo.afterImage} alt={demo.name} />
          </div>
        </section>
      )}
    </>
  );
}
