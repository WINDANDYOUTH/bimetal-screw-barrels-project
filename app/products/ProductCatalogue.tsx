"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

interface ProductCatalogueProps {
  products: Product[];
}

export function ProductCatalogue({ products }: ProductCatalogueProps) {
  const categories = ["All", ...Array.from(new Set(products.map((item) => item.category)))];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Product categories">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-orange-400 bg-orange-100 text-brand-steel"
                  : "border-slate-200 bg-white text-brand-gray hover:border-brand-navy hover:text-brand-navy"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <article key={product.slug} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
              <Image src={product.heroImage} alt={product.name} fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-brand-steel">{product.name}</h3>
              <p className="text-sm text-brand-gray">{product.summary}</p>
              <ul className="grid gap-2 text-xs text-brand-gray">
                {product.specs.map((spec) => (
                  <li key={spec.label} className="flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2">
                    <span className="font-semibold text-brand-steel">{spec.label}</span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href={`/products/${product.slug}`}
                className="rounded-full bg-orange-400 px-4 py-2 text-brand-steel transition hover:bg-orange-300"
              >
                View Details
              </Link>
              <Link
                href={`/contact?product=${product.slug}`}
                className="rounded-full border border-brand-navy px-4 py-2 text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Request Quote
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
