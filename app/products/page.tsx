import Link from "next/link";
import { products } from "../data/products";
import { ProductCatalogue } from "./ProductCatalogue";

export const metadata = {
  title: "Products | Bimetallic, Hardened, and Twin Screw Barrels",
  description:
    "Explore bimetallic, Haitian-compatible, fully hardened, nitride, and twin screw barrel solutions engineered for plastics processors in Southeast Asia.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col bg-brand-surface">
      <section className="bg-brand-navy text-white">
        <div className="max-container flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Screw barrel solutions for every plastics process
            </h1>
            <p className="text-sm text-blue-100" data-locale-note="Translate machine names as needed but keep brand spellings.">
              Filter by product family to view metallurgy, hardness, compatible machines, and download technical data. Each category is supported by engineers covering English, Mandarin, Bahasa Indonesia, Thai, and Vietnamese.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-blue-100">
            <p className="font-semibold text-white">Logistics at a glance</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Bonded stock in Shenzhen, Singapore, Penang</li>
              <li>Lead time 15 to 45 days depending on product</li>
              <li>On-site measurement in CN, SG, VN, ID, TH</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Filter by product family</h2>
            <p className="text-sm text-brand-gray">
              Choose a category to explore technical parameters, compatible machines, and available material options.
            </p>
          </div>
          <ProductCatalogue products={products} />
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="max-container flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-semibold text-brand-navy">Need a custom geometry?</h2>
            <p className="text-sm text-brand-gray">
              Upload drawings, flight measurements, or OEM references. Our engineering team will provide material recommendations, heat treatment schedules, and quote lead times.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/contact?type=custom"
              className="rounded-full bg-orange-400 px-5 py-3 text-brand-steel transition hover:bg-orange-300"
            >
              Upload your machine drawing for custom quote
            </Link>
            <Link
              href="/downloads/specifications"
              className="rounded-full border border-brand-navy px-5 py-3 text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              Download Specs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
