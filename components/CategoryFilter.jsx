import Link from "next/link";

export default function CategoryFilter({ categories, active, q }) {
  const href = (slug) => {
    const params = new URLSearchParams();
    if (slug) params.set("category", slug);
    if (q) params.set("q", q);
    const query = params.toString();
    return `/products${query ? `?${query}` : ""}`;
  };

  const items = [{ slug: "", name: "همه" }, ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {items.map((cat) => {
        const isActive = (active || "") === cat.slug;
        return (
          <Link
            key={cat.slug || "all"}
            href={href(cat.slug)}
            aria-current={isActive ? "true" : undefined}
            className={
              isActive
                ? "shrink-0 rounded-full bg-brand px-4 py-2 text-sm text-white"
                : "btn-outline shrink-0"
            }
          >
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
