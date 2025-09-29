import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name + " | Screw Barrel Group",
    description: product.summary,
    alternates: { canonical: "/products/" + product.slug },
    openGraph: {
      title: product.name,
      description: product.summary,
      url: "https://www.screwbarrelpro.com/products/" + product.slug,
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  const mailSubject = encodeURIComponent("Product enquiry: " + product.name);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: "https://www.screwbarrelpro.com" + product.heroImage,
    brand: {
      "@type": "Brand",
      name: "Screw Barrel Group",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.screwbarrelpro.com/products/" + product.slug,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0",
    },
  };

  return (
    <div className="flex flex-1 flex-col bg-brand-surface">
      <section className="bg-brand-navy text-white">
        <div className="max-container grid gap-8 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:py-24">
          <div className="space-y-5">
            <Link href="/products" className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">
              Back to products
            </Link>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl" data-locale-note="Translate product name carefully and retain technical descriptors.">
              {product.name}
            </h1>
            <p className="text-base text-blue-100">{product.overview}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {product.specs.map((spec) => (
                <div key={spec.label} className="rounded-3xl border border-white/15 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest text-blue-100">{spec.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{spec.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href="/contact?type=quote"
                className="rounded-full bg-orange-400 px-5 py-3 text-brand-steel transition hover:bg-orange-300"
              >
                Request Quote
              </Link>
              <Link
                href={"mailto:sales@screwbarrelpro.com?subject=" + mailSubject}
                className="rounded-full border border-white/30 px-5 py-3 text-white transition hover:border-white"
              >
                Ask an Engineer
              </Link>
              {product.downloads.map((download) => (
                <Link
                  key={download.href}
                  href={download.href}
                  className="rounded-full border border-white/30 px-5 py-3 text-white transition hover:border-white"
                >
                  {download.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            <Image src={product.heroImage} alt={product.name} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-brand-navy">Overview</h2>
            <p className="text-base text-brand-gray">{product.summary}</p>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-brand-steel">Technical parameters</h3>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                {product.parameters.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs uppercase tracking-widest text-brand-gray">{row.label}</dt>
                    <dd className="text-sm font-medium text-brand-steel">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <h3 className="text-lg font-semibold text-brand-steel">Compatible machines</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-gray">
                  {product.compatibleMachines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <h3 className="text-lg font-semibold text-brand-steel">Compatible resins</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-gray">
                  {product.compatibleResins.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-brand-steel">Material and heat treatment</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-brand-steel">Material composition</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-gray">
                    {product.materialComposition.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-steel">Heat treatment</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-gray">
                    {product.heatTreatment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-brand-steel">Benefits</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-gray">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-brand-steel">Lead time</h3>
              <p className="mt-2 text-sm text-brand-gray">{product.leadTime}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-brand-steel">After-sales support</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-brand-gray">
                {product.afterSales.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
              <h3 className="text-lg font-semibold text-brand-steel">Upload drawings</h3>
              <p className="mt-2 text-sm text-brand-gray">
                Attach OEM drawings or wear measurements for a customised quote tailored to your machine.
              </p>
              <Link
                href={"/contact?type=custom&product=" + product.slug}
                className="mt-4 inline-flex rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
              >
                Upload drawing for quote
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-brand-steel">Localization note</h3>
              <p className="mt-2 text-sm text-brand-gray" data-locale-note="Share with localisation partners.">
                {product.localization}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="max-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-semibold text-brand-navy">Planning a multi-site rollout?</h2>
            <p className="text-sm text-brand-gray">
              Align metallurgy, stocking plans, and after-sales schedules across factories in China and Southeast Asia with our project managers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/contact?type=project"
              className="rounded-full bg-orange-400 px-5 py-3 text-brand-steel transition hover:bg-orange-300"
            >
              Contact project manager
            </Link>
            <Link
              href="/downloads/project-checklist.pdf"
              className="rounded-full border border-brand-navy px-5 py-3 text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              Download project checklist
            </Link>
          </div>
        </div>
      </section>

      <Script id={"product-schema-" + product.slug} type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
    </div>
  );
}

