import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Precision Screw Barrels for High-Output Injection and Extrusion",
  description:
    "Bimetallic and hardened screw barrels engineered for plastics processors across Southeast Asia with 20+ years of metallurgical expertise and rapid lead times.",
  openGraph: {
    title: "Precision Screw Barrels for High-Output Injection and Extrusion",
    description:
      "Durable bimetallic and nitrided screw barrels engineered for injection, extrusion, blow molding, and recycling lines in Southeast Asia.",
    url: "https://www.screwbarrelpro.com",
    type: "website",
  },
  alternates: { canonical: "/" },
};

const heroStats = [
  { label: "Barrel Hardness", value: "60 to 70 HRC" },
  { label: "Screw Hardness", value: "58 to 62 HRC" },
  { label: "Diameter Range", value: "14 mm to 250 mm" },
  { label: "Max Length", value: "8000 mm" },
];

const valuePillars = [
  {
    title: "Extended Wear Life",
    description:
      "Centrifugal casting and Ni-WC overlays withstand glass fiber, CaCO3, and halogenated flame retardants in aggressive resins.",
    localization: "Highlight durability benefits and materials in each language; keep chemical names in English for accuracy.",
  },
  {
    title: "Custom Engineering",
    description:
      "Application-specific flight designs, compression ratios, and venting tailored for Haitian, Chen Hsong, JSW, and more.",
    localization: "Retain machine brand names; translate technical nouns consistently via glossary.",
  },
  {
    title: "Fast Delivery to SEA",
    description:
      "Regional stocking plans and bonded logistics reduce downtime for factories in Singapore, Malaysia, Thailand, Vietnam, Indonesia, and the Philippines.",
    localization: "List country names exactly; emphasise shortened lead time in simple phrasing.",
  },
  {
    title: "OEM-Compatible",
    description:
      "Drop-in replacements with precision grinding and QC alignment to OEM tolerances, backed by ISO9001 and SGS reports.",
    localization: "Keep ISO9001 and SGS untranslated as certification identifiers.",
  },
];

const featuredProducts = [
  {
    name: "Bimetallic Screw Barrel",
    description: "Ni-based alloy lining with tungsten carbide reinforcement for abrasive recyclate streams.",
    specs: ["Ni-WC wear layer", "OD tolerance +/-0.02 mm"],
    href: "/products/bimetallic-screw-barrel",
  },
  {
    name: "Haitian Injection Machine Screw Barrel",
    description: "Optimized plastication performance for Haitian MA, SA, and Jupiter series machines.",
    specs: ["Haitian MA/SA/Jupiter", "Rapid change-out kit"],
    href: "/products/haitian-injection-machine-screw-barrel",
  },
  {
    name: "Fully Hardened Screws",
    description: "Through-hardened SKD61 or D2 screws for high shear compounding and color masterbatch.",
    specs: ["58 to 60 HRC core", "Custom mixing sections"],
    href: "/products/fully-hardened-screws",
  },
  {
    name: "Nitride Screw Barrel",
    description: "Gas nitrided barrels providing balanced cost and corrosion protection for commodity resins.",
    specs: ["HV 900 surface", "Standard and long L/D"],
    href: "/products/nitride-screw-barrel",
  },
];

const applicationAreas = [
  "Plastics injection molding (auto parts, thin-wall packaging)",
  "Extrusion (pipes, profiles, sheets, blown film)",
  "Blow molding (cosmetic, household, lubricant packaging)",
  "Recycling and pelletizing (PCR, PCR blends, masterbatch)",
];

const timelineSteps = [
  { label: "Consultation", detail: "Process audit, resin analysis, and failure review with our engineers." },
  { label: "Design", detail: "3D flight modeling, metallurgy selection, and OEM interface verification." },
  { label: "Precision Machining", detail: "CNC turning, deep-hole boring, and dynamic balancing." },
  { label: "Heat Treatment", detail: "Vacuum quenching, nitriding, and HVOF spraying tailored per alloy." },
  { label: "QC", detail: "CMM measurement, ultrasonic testing, and hardness profiling." },
  { label: "Shipping", detail: "SEA-focused logistics with bonded warehouse options and customs support." },
];

const testimonials = [
  {
    quote:
      "Downtime from barrel wear dropped by 35 percent after switching to their Ni-WC bimetal solution for our PVC profile lines.",
    name: "Plant Director, Bangkok PVC Extrusion",
    localization: "Ensure percentage figures remain numeric; translate job title literally.",
  },
  {
    quote:
      "Our Haitian MA fleet in Ho Chi Minh City now runs 20 percent longer between screw changes with their hardened kits.",
    name: "Maintenance Manager, Vietnam Injection Molder",
    localization: "Keep city names and percent figures intact across languages.",
  },
  {
    quote:
      "Responsive engineering support and on-site measurement helped us retrofit twin screws for recycled PP in Surabaya.",
    name: "Operations Head, Indonesian Recycling Plant",
    localization: "Retain city names; clarify recycled PP as polypropylene if needed in translation notes.",
  },
];

const certifications = [
  "ISO9001",
  "SGS Material Testing",
  "CE Machinery Safety",
  "Customs AEO Qualified",
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-brand-navy-dark via-brand-navy to-slate-900 opacity-90" />
        </div>
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
          <div className="space-y-6 lg:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-orange-200">
              20+ Years Manufacturing
            </span>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl" data-locale-note="Keep phrase order consistent; translate 'Precision Screw Barrels' directly and retain capitalisation norms.">
              Precision Screw Barrels for High-Output Injection and Extrusion
            </h1>
            <p className="text-lg text-blue-100" data-locale-note="Reference rapid lead times plainly; keep mention of Southeast Asia markets.">
              Trusted by plastics processors across China and Southeast Asia for corrosion-resistant, bimetallic, and hardened screw barrels with rapid delivery to your factory floor.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Talk to Our Engineer
              </Link>
              <Link
                href="/downloads/specifications"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Download Specs
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-blue-100">{item.label}</p>
                  <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/images/hero-production-line.svg"
                alt="Precision machining line producing screw barrels"
                fill
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-black/50 p-6 text-sm text-blue-100" data-locale-note="Translate heat treatment steps carefully; keep abbreviations capitalised.">
                Vacuum heat treatment, HVOF spray welding, and CMM inspection ensure repeatable tolerances.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl" data-locale-note="Translate headline directly; retain question mark.">
              Why processors across Southeast Asia choose our screw barrels
            </h2>
            <p className="mt-4 text-base text-brand-gray">
              Metallurgical control, CNC machining, and responsive service keep your extrusion, molding, and recycling lines in peak condition.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valuePillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-brand-steel">{pillar.title}</h3>
                <p className="mt-2 text-sm text-brand-gray" data-locale-note={pillar.localization}>
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="max-container flex flex-col gap-12 md:flex-row md:items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
              Featured screw barrel families
            </h2>
            <p className="mt-4 text-sm text-brand-gray">
              Each product includes metallurgy recommendations, compatible machine lists, and downloadable specifications.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4"
            >
              View all product categories
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
          <div className="grid flex-1 gap-6 md:grid-cols-2">
            {featuredProducts.map((product) => (
              <article key={product.name} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
                  <Image
                    src="/images/product-placeholder.svg"
                    alt={`${product.name} photo placeholder`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-brand-steel">{product.name}</h3>
                  <p className="text-sm text-brand-gray">{product.description}</p>
                  <ul className="list-disc space-y-1 pl-5 text-xs text-brand-gray">
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500"
                >
                  View Details
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="max-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-xl">
            <h2 className="text-3xl font-semibold" data-locale-note="Translate industries accurately; keep machine brands in English.">
              Proven in demanding plastics applications
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Engineered for Haitian, Chen Hsong, JSW, KraussMaffei, Toshiba, and other leading machine builders with SEA-ready logistics.
            </p>
          </div>
          <div className="grid gap-3 text-sm md:grid-cols-2">
            {applicationAreas.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-blue-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container">
          <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">From consultation to sea freight</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-gray">
            Our engineering-led delivery covers every step, ensuring your replacement or new build screw barrels arrive ready for installation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {timelineSteps.map((step, index) => (
              <div key={step.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-steel">{step.label}</h3>
                <p className="mt-2 text-sm text-brand-gray">{step.detail}</p>
                {step.label === "Shipping" ? (
                  <p className="mt-3 text-xs font-semibold text-orange-500">
                    SEA logistics note: bonded warehousing in Shenzhen, Singapore, and Penang for faster customs clearance.
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="max-container space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">Client confidence across Southeast Asia</h2>
              <p className="mt-3 max-w-xl text-sm text-brand-gray">
                Testimonials, certifications, and partner recognitions that demonstrate our ability to solve abrasion, corrosion, and throughput challenges.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-brand-navy">
              {certifications.map((item) => (
                <span key={item} className="rounded-full border border-brand-navy px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <span className="text-5xl text-orange-300" aria-hidden="true">&quot;</span>
                <p className="text-sm text-brand-steel" data-locale-note={testimonial.localization}>
                  {testimonial.quote}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-dark text-white">
        <div className="max-container flex flex-col gap-6 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
              Contact our engineers now
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Ready to reduce wear, downtime, and scrap rate?
            </h2>
            <p className="mt-3 text-sm text-blue-100" data-locale-note="Mention hotline, email, and chat handles clearly; keep promise of response time.">
              Send your machine model, resin mix, output goals, and drawings. Our response team covers English, Chinese, Bahasa Indonesia, Thai, and Vietnamese within 24 hours.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-blue-100 md:text-right">
            <a href="tel:+8675512345678" className="font-semibold text-white transition hover:text-orange-300">
              CN Hotline: +86 755 1234 5678
            </a>
            <a href="tel:+6531298765" className="font-semibold text-white transition hover:text-orange-300">
              SEA Hotline: +65 3129 8765
            </a>
            <a href="mailto:sales@screwbarrelpro.com" className="transition hover:text-orange-300">
              sales@screwbarrelpro.com
            </a>
            <p>WhatsApp / WeChat: +86 139 0000 0000</p>
            <p>
              Download QR code for WeChat support in the downloads section or request via email.
            </p>
            <div className="flex justify-center gap-3 md:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
              >
                Request Quote
              </Link>
              <Link
                href="/contact?type=engineering"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Ask an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Screw Barrel Group",
          url: "https://www.screwbarrelpro.com",
          logo: "https://www.screwbarrelpro.com/logo.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+86-755-1234-5678",
              contactType: "sales",
              areaServed: ["CN", "SG", "MY", "TH", "VN", "ID", "PH"],
              availableLanguage: ["English", "Chinese", "Indonesian", "Thai", "Vietnamese"],
            },
            {
              "@type": "ContactPoint",
              telephone: "+65-3129-8765",
              contactType: "customer service",
              areaServed: ["SG", "MY", "TH", "VN", "ID", "PH"],
              availableLanguage: ["English"],
            },
          ],
          sameAs: [
            "https://www.linkedin.com/company/screw-barrel-group",
            "https://www.youtube.com/@screwbarrelgroup"
          ],
        })}
      </Script>
    </div>
  );
}

