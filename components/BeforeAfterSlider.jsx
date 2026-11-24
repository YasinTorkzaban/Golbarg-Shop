"use client";

import { useState } from "react";

export default function BeforeAfterSlider({ before, after, alt = "نتیجه استفاده از محصول" }) {
  const [pos, setPos] = useState(50);

  return (
    // dir="ltr" needs to direction of the slider does not opposite in rtl pages
    <div
      dir="ltr"
      className="relative mx-auto aspect-[16/10] w-full max-w-2xl select-none overflow-hidden rounded-2xl bg-petal"
    >
      <img
        src={after}
        alt={`${alt} - بعد`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={`${alt} - قبل`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-ink/55 px-2.5 py-1 text-sm text-white">
        قبل
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-ink/55 px-2.5 py-1 text-sm text-white">
        بعد
      </span>

      {/* seperator of before/after images and its button */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg">
          ⇆
        </div>
      </div>

      {/* invisible slider which manages pulling and keyboard */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="مقایسه‌ی قبل و بعد"
        className="absolute inset-0 m-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
