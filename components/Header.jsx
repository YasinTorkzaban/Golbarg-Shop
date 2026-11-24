"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";
import { toFa } from "@/lib/format";
import { CartIcon, CloseIcon, MenuIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // وقتی منوی موبایل بازه: بستن با Escape و جلوگیری از اسکرول صفحه
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="page-container flex h-16 items-center justify-between">
          {/* دکمه‌ی منو (فقط موبایل) */}
          <button
            type="button"
            aria-label="باز کردن منو"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <MenuIcon />
          </button>

          {/* لوگو و منوی دسکتاپ */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-brand">
              <img src="/logo.svg" alt="" width="28" height="28" />
              {SITE_NAME}
            </Link>
            <nav aria-label="منوی اصلی" className="hidden items-center gap-7 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? "font-bold text-brand"
                      : "text-ink transition-colors hover:text-brand"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* سبد خرید */}
          <Link
            href="/cart"
            aria-label="سبد خرید"
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <CartIcon />
            {count > 0 && (
              <span className="absolute -left-1 -top-1 rounded-full bg-brand px-1.5 text-[11px] leading-5 text-white">
                {toFa(count)}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* منوی کشویی موبایل: بیرون از header است تا backdrop-blur جلوی fixed را نگیرد */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="بستن منو"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/45"
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85%] overflow-y-auto bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-bold text-brand">{SITE_NAME}</span>
              <button
                type="button"
                aria-label="بستن منو"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center"
              >
                <CloseIcon />
              </button>
            </div>

            <form action="/products" className="mb-3">
              <input
                type="search"
                name="q"
                placeholder="جستجوی محصول..."
                aria-label="جستجوی محصول"
                className="field"
              />
            </form>

            <nav aria-label="منوی موبایل">
              {[...NAV_LINKS, { href: "/cart", label: "سبد خرید" }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-line py-3.5 ${
                    isActive(link.href) ? "font-bold text-brand" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}