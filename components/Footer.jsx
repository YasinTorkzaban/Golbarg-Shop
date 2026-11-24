import Link from "next/link";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear().toLocaleString("fa-IR", {
    useGrouping: false,
  });

  return (
    <footer className="mt-16 bg-blush">
      <div className="page-container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-brand">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{SITE_TAGLINE}</p>
        </div>

        <div>
          <h3 className="mb-3 font-bold">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold">تماس با ما</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>ایران، تهران</li>
            <li>09300381087</li>
            <li>yasin.torkzaban@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {year} {SITE_NAME}. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
