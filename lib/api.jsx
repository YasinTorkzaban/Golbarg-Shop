import db from "../db.json";

export async function getProducts({ q = "", category = "" } = {}) {
  let list = db.products;

  if (category) list = list.filter((p) => p.category === category);

  if (q) {
    const term = q.trim().toLowerCase();
    list = list.filter((p) =>
      [p.name, p.brand, p.description, p.suitableFor, ...p.ingredients]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }
  return list;
}

export async function getFeaturedProducts() {
  return db.products.filter((p) => p.featured);
}

export async function getProductBySlug(slug) {
  return db.products.find((p) => p.slug === slug) ?? null;
}

export async function getCategories() {
  return db.categories;
}