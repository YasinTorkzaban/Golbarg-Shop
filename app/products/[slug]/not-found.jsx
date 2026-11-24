import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-container py-20 text-center">
      <h1 className="text-2xl font-bold">این محصول پیدا نشد</h1>
      <p className="mb-6 mt-2 text-muted">ممکن است آدرس اشتباه باشد یا محصول حذف شده باشد.</p>
      <Link href="/products" className="btn-primary inline-block">
        بازگشت به محصولات
      </Link>
    </div>
  );
}
