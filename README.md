# Golbarg | Cosmetics & Personal Care Online Store

A front-end-only online store for cosmetics and personal care products, built with **Next.js** and **Tailwind CSS**. The standout feature is the **before/after comparison slider** on the product detail page.

🔗 **Live demo:** [add your Vercel link here]

## Features

- Home page with a hero banner, category shortcuts, featured products, and a before/after demo
- Product listing with **search** and **category filtering** (driven by URL query parameters)
- Product detail page by **slug** (e.g. `/products/vitamin-c-serum`)
- **Before/after slider**, shown only for products that have comparison images
- **Shopping cart** with add, update quantity, and remove, persisted in `localStorage` so it survives page refreshes
- About and Contact pages
- **Responsive** layout for mobile and desktop, with a slide-in menu on mobile
- Right-to-left (RTL) interface in Persian, using the **Vazirmatn** font

![viewfinal](https://github.com/user-attachments/assets/8a94cde8-6cb8-4914-bcae-dbfe772ddd11)
![viewfinal](https://github.com/user-attachments/assets/6ab2f082-dc46-4fa2-a830-b74eec57a2b8)
![viewfinal](https://github.com/user-attachments/assets/1f5bb4f9-7a08-4763-96d4-cb7c9a262603)
![viewfinal](https://github.com/user-attachments/assets/7cebb384-40e6-4394-8518-4c9fe780a7c4)

## Tech Stack

| Area | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 4 |
| Font | Vazirmatn (`@fontsource-variable/vazirmatn`) |
| Cart state | React Context + localStorage |
| Data | `db.json` file (no backend or database) |
| Deployment | Vercel |

## Getting Started

Prerequisite: [Node.js](https://nodejs.org) (version 20 or later).

```bash
# Clone the project
git clone https://github.com/YasinTorkzaban/Golbarg-Shop.git
cd Golbarg-Shop

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:3000` in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/products` | Product list with search and category filter |
| `/products/[slug]` | Product details |
| `/cart` | Shopping cart |
| `/about` | About us |
| `/contact` | Contact (demo form) |

## Project Structure

```
golbarg-shop/
├── app/                    Pages and the root layout
│   ├── layout.js
│   ├── page.js
│   ├── products/
│   │   ├── page.js
│   │   └── [slug]/page.js
│   ├── cart/page.js
│   ├── about/page.js
│   └── contact/page.js
├── components/             Header, Footer, ProductCard, BeforeAfterSlider, ...
├── context/CartContext.js  Cart state management
├── lib/
│   ├── api.js              All data access lives in this file
│   ├── format.js           Price and Persian number formatting
│   └── site.js             Store name and navigation links
├── public/images/          Product images and banner
└── db.json                 Categories and products data
```

## Notes

- **Data:** the project has no backend, so products are read from `db.json`. All data access is centralized in `lib/api.js`, so it can be connected to a real API later without changing any page.
- **Images:** product images and the before/after results are sample illustrations (SVG). They do not represent real results from using the products.
- **Store details:** the store name, address, phone number, and brands are placeholders and fictional.
- **Contact form and checkout:** both are demo-only and do not send or store any data.

## Author

Yasin Torkzaban