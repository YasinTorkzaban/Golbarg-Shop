"use client";

import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-2xl bg-petal">
        <img src={images[index]} alt={name} className="h-full w-full object-cover" />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`نمایش تصویر ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-petal ${
                i === index ? "border-brand" : "border-transparent"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
