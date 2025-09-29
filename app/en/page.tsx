import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Global Leader in Bimetal Screw Barrel Manufacturing | Wear & Corrosion Resistant",
  description: "Maximizing service life and production efficiency for the plastics industry with premium bimetal screw barrels and barrels. Trusted by industry leaders worldwide.",
  alternates: { canonical: "/en" },
  openGraph: {
    title: "Global Leader in Bimetal Screw Barrel Manufacturing",
    description: "Maximizing service life and production efficiency for the plastics industry with premium bimetal screw barrels and barrels.",
    url: "/en",
    siteName: "Bimetal Screw Barrels",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Leader in Bimetal Screw Barrel Manufacturing",
    description: "Maximizing service life and production efficiency for the plastics industry with premium bimetal screw barrels and barrels.",
  },
};

export default async function EnglishHomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bimetal.jpg"
            alt="Bimetal screw barrel manufacturing facility with precision machinery"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <span className="inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium">
                Global Manufacturing Excellence
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Global Leader in Bimetal Screw Barrel Manufacturing
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Maximizing Service Life and Production Efficiency for the Plastics Industry.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
                >
                  Get a Free Quote Now
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Diameter 14-150 mm</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Length up to 8000 mm</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Barrel 60-70 HRC</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Screw 58-62 HRC</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8">
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <p className="mt-4 text-center text-sm text-gray-300">
                  Precision Engineering | Advanced Materials | Quality Assurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Our Bimetal Technology?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Advanced engineering solutions for superior performance and durability
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Wear Resistance</h3>
              <p className="mt-3 text-gray-600">
                Our Ni-based alloy and WC/Co overlays provide exceptional resistance to abrasive materials, 
                extending equipment life and reducing maintenance costs significantly.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Corrosion Resistance</h3>
              <p className="mt-3 text-gray-600">
                Specialized materials and coatings protect against HCl from PVC processing, 
                halogenated flame retardants, and other corrosive environments.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Extreme Hardness</h3>
              <p className="mt-3 text-gray-600">
                Advanced heat treatment and surface hardening techniques deliver 
                exceptional hardness levels for maximum durability and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our bimetal screw barrels are used by leading manufacturers across the globe
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
              {/* Placeholder for client logos */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm">
                  <div className="h-12 w-24 rounded bg-gray-200"></div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Client logos and certifications will be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Precision Engineering Excellence
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Our state-of-the-art manufacturing facilities and advanced quality control 
                systems ensure every bimetal screw barrel meets the highest standards of precision and reliability.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Materials</h3>
                    <p className="text-gray-600">Premium Ni-based alloys and WC/Co coatings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Tolerances</h3>
                    <p className="text-gray-600">OD +/- 0.02 mm, concentricity &lt;= 0.02 mm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                    <p className="text-gray-600">20-35 days typical lead time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-100 p-8">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-200 to-purple-200"></div>
              <p className="mt-4 text-center text-sm text-gray-600">
                Advanced manufacturing facility with precision CNC machining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Maximize Your Production Efficiency?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Get a free quote for your bimetal screw barrel requirements. 
            Our engineering team will provide customized solutions for your specific needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-gray-100 hover:shadow-lg"
            >
              Get a Free Quote Now
            </Link>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>Free consultation | Custom engineering | Fast delivery | Global shipping</p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Bimetal Screw Barrels Manufacturing",
            url: "https://bimetal-screw-barrels-project.vercel.app/en",
            description: "Global leader in bimetal screw barrel manufacturing, maximizing service life and production efficiency for the plastics industry.",
            sameAs: [],
            address: {
              "@type": "PostalAddress",
              addressCountry: "Global"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Sales",
              availableLanguage: "English"
            }
          }),
        }}
      />
    </main>
  );
}




