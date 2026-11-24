import { SITE_NAME } from "@/lib/site";
import Image from "next/image";

export const metadata = { title: "درباره ما" };

const features = [
  {
    title: "محصولات اصل",
    text: "تمام محصولات مستقیم از تأمین‌کنندگان معتبر خریداری می‌شوند. ترکیبات و تاریخ مصرف هر محصول در صفحه‌ی آن درج شده است.",
  },
  {
    title: "ارسال سریع",
    text: "سفارش‌های ثبت‌شده تا ۲۴ ساعت کاری پردازش می‌شوند و با بسته‌بندی محافظ و ایمن برای شما ارسال می‌شوند.",
  },
  {
    title: "پشتیبانی",
    text: "برای انتخاب محصول مناسب یا پیگیری سفارش، تیم پشتیبانی در ساعات کاری پاسخگوی شماست.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-container py-8">
      <h1 className="page-title">درباره‌ی {SITE_NAME}</h1>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4 leading-8 text-muted">
          <p>
            {SITE_NAME} یک فروشگاه آنلاین محصولات آرایشی و بهداشتی است. هدف ما این است که
            انتخاب محصول مناسب برای پوست و مو ساده و مطمئن باشد.
          </p>
          <p>
            ایده‌ی {SITE_NAME} از یک مشکل ساده شروع شد: انتخاب محصول آرایشی و بهداشتی مناسب
            بین این‌همه برند و وعده‌ی تبلیغاتی سخت است. ما محصولات را بر اساس ترکیبات،
            کاربرد و نیاز واقعی پوست و مو دسته‌بندی کردیم تا خرید آگاهانه‌تر و راحت‌تر شود.
          </p>
          <p>
            ارزش‌های ما روشن است: صداقت در معرفی محصول، احترام به سلیقه و نیاز هر
            مشتری، و تعهد به کیفیت. هر محصولی که در فروشگاه می‌بینید، قبل از عرضه
            بررسی شده و اطلاعات کاملش را در صفحه‌ی خودش می‌توانید ببینید.
          </p>
        </div>
        <div className="relative aspect-3/2 w-full overflow-hidden rounded-3xl bg-petal">
          <Image
            src="/images/about.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {features.map(({ title, text }) => (
          <div key={title} className="rounded-2xl bg-blush p-6">
            <h2 className="font-bold">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
