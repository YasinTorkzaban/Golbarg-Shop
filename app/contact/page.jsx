"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <div className="page-container py-8">
      <h1 className="page-title">ارتباط با ما</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl bg-blush p-6">
          <h2 className="font-bold">اطلاعات تماس</h2>
          <p className="text-muted">ایران، تهران</p>
          <p className="text-muted">09300381087</p>
          <p className="text-muted">yasin.torkzaban@gmail.com</p>
          <p className="text-muted">
            ساعت پاسخگویی: شنبه تا چهارشنبه ۹ تا ۱۸، پنجشنبه‌ها ۹ تا ۱۳
          </p>        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">نام</label>
            <input id="name" name="name" required className="field" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">ایمیل</label>
            <input id="email" name="email" type="email" required dir="ltr" className="field text-right" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm">پیام</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-2xl border-[1.5px] border-edge bg-white px-5 py-3 outline-none focus:border-brand"
            />
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto">
            ارسال پیام
          </button>
          {sent && (
            <p role="status" className="text-sm text-brand-dark">
              پیام شما ثبت شد. (نمایشی)
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
