import Link from "next/link";

const downloads = [
  {
    title: "Bimetallic screw barrel data sheet",
    description: "Material compositions, hardness ranges, and recommended applications for Ni-based liners.",
    href: "/downloads/bimetallic-datasheet.pdf",
  },
  {
    title: "Haitian compatibility matrix",
    description: "Cross-reference Haitian MA, SA, and Jupiter models with available screw and barrel upgrades.",
    href: "/downloads/haitian-compatibility.pdf",
  },
  {
    title: "Fully hardened screw brochure",
    description: "Tool steel options, mixing section diagrams, and heat treatment cycles for high shear applications.",
    href: "/downloads/fully-hardened.pdf",
  },
  {
    title: "Nitride screw barrel quick guide",
    description: "Surface hardness values, nitriding layer thickness, and maintenance tips for general purpose lines.",
    href: "/downloads/nitride-guide.pdf",
  },
  {
    title: "Extruder screw barrel configuration guide",
    description: "Single and twin extruder layouts, venting options, and cooling channel recommendations.",
    href: "/downloads/extruder-guide.pdf",
  },
  {
    title: "Project checklist",
    description: "Template covering measurements, resins, and delivery requirements for multi-line rollouts.",
    href: "/downloads/project-checklist.pdf",
  },
];

export const metadata = {
  title: "Download Specifications | Screw Barrel Group",
  description: "Access screw barrel specifications, compatibility matrices, and project planning checklists for Southeast Asia plastics processors.",
  alternates: { canonical: "/downloads/specifications" },
};

export default function SpecificationsPage() {
  return (
    <div className="flex flex-1 flex-col bg-brand-surface">
      <section className="bg-brand-navy text-white">
        <div className="max-container space-y-4 py-16 md:py-24">
          <h1 className="text-3xl font-semibold md:text-5xl">Download specifications and planning tools</h1>
          <p className="max-w-2xl text-sm text-blue-100">
            Technical data is provided in English with localization notes for Simplified Chinese, Bahasa Indonesia, Thai, and Vietnamese. Contact us for co-branded versions or additional file formats.
          </p>
          <Link
            href="/contact?type=custom"
            className="inline-flex rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
          >
            Request custom documentation
          </Link>
        </div>
      </section>
      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container grid gap-6 md:grid-cols-2">
          {downloads.map((item) => (
            <article key={item.href} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
              <div>
                <h2 className="text-lg font-semibold text-brand-steel">{item.title}</h2>
                <p className="mt-2 text-sm text-brand-gray">{item.description}</p>
              </div>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4"
              >
                Download PDF
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
