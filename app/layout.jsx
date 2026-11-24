import "./globals.css";
import "@fontsource-variable/vazirmatn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";


export const metadata = {
  title: {
    default: `${SITE_NAME} | فروشگاه آرایشی و بهداشتی`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex min-h-screen flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
