import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Screw Barrel Group | Engineering Trust Since 2003",
  description:
    "Discover Screw Barrel Group\'s 20-year history in precision bimetal screw barrel manufacturing, metallurgy R&D, and quality control for SEA plastics processors.",
  alternates: { canonical: "/about" },
};

const snapshotStats = [
  { label: "Factory Size", value: "18,500 m2" },
  { label: "Annual Capacity", value: "7,800 sets" },
  { label: "Export Markets", value: "27 countries" },
  { label: "Engineering Team", value: "45 specialists" },
];

const rdHighlights = [
  {
    title: "Metallurgy Lab",
    description: "Onsite spectrometer, micro hardness testing, and metallographic analysis for alloy validation.",
    localization: "Keep instrument names in English; explain purpose in translations if needed.",
  },
  {
    title: "Heat Treatment Hubs",
    description: "Vacuum furnaces, nitriding pits, and HVOF spraying ensure repeatable hardness profiles.",
    localization: "Retain HVOF acronym; translate furnace types plainly.",
  },
  {
    title: "CNC and Grinding",
    description: "12-axis CNC turning, deep-hole boring, and internal/external grinding hold tight tolerances.",
    localization: "Translate tolerances carefully; keep numerals as digits.",
  },
];

const milestones = [
  {
    year: "2003",
    detail: "Founded in Ningbo focusing on nitrided screws for domestic injection machines.",
  },
  {
    year: "2008",
    detail: "Introduced bimetal centrifugal casting line and began exporting to Malaysia and Thailand.",
  },
  {
    year: "2013",
    detail: "Opened metallurgy lab and heat treatment center; certified to ISO9001.",
  },
  {
    year: "2018",
    detail: "SEA technical support team established in Singapore and Ho Chi Minh City.",
  },
  {
    year: "2023",
    detail: "Expanded twin screw division and launched bonded warehouse program for Southeast Asia.",
  },
];

const leadership = [
  {
    name: "Liang Chen",
    role: "Founder and Chief Engineer",
    bio: "30 years of screw barrel metallurgy experience guiding alloy selection and process integration.",
    localization: "Surname first format can be kept or adapted based on local norms.",
  },
  {
    name: "Grace Tan",
    role: "SEA Regional Director",
    bio: "Based in Singapore, leading customer support and logistics for ASEAN partners.",
    localization: "Clarify ASEAN acronym where necessary.",
  },
  {
    name: "Rahul Prakash",
    role: "Head of Quality and Testing",
    bio: "Oversees CMM, ultrasonic, and hardness testing to validate every screw and barrel set.",
    localization: "Keep testing acronyms.",
  },
];

const values = [
  {
    title: "Innovation",
    description: "Continuous alloy trials, CAD flight upgrades, and process tuning keep lines productive.",
  },
  {
    title: "Reliability",
    description: "Certification-backed QC, documented inspections, and SEA-ready spare parts planning.",
  },
  {
    title: "Partnership",
    description: "Engineer-to-engineer collaboration, language support, and training for your operators.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="max-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="max-w-xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-orange-200">
              Since 2003
            </span>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl" data-locale-note="Translate headline while keeping year reference clear.">
              Engineering trust since 2003
            </h1>
            <p className="text-base text-blue-100" data-locale-note="Emphasise service region and manufacturing expertise.">
              From our Ningbo headquarters to service hubs across Singapore, Malaysia, Vietnam, Thailand, Indonesia, and the Philippines, we deliver screw barrels that keep high-output plastics operations on schedule.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {snapshotStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/20 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-blue-100">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-72 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            <Image
              src="/images/factory-machine.svg"
              alt="Factory floor overview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-brand-navy">Company snapshot</h2>
            <p className="text-base text-brand-gray">
              Screw Barrel Group operates an 18,500 square meter facility with CNC centers, nitriding pits, and heat treatment lines managed by senior metallurgists.
            </p>
            <p className="text-base text-brand-gray">
              Production spans bimetallic, fully hardened, nitrided, and twin screw solutions with traceability for every casting, forging, and overlay.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <h3 className="text-lg font-semibold text-brand-steel">Production Capacity</h3>
                <p className="mt-2 text-sm text-brand-gray">
                  7,800 screw and barrel sets manufactured annually with lean scheduling and SEA export compliance.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <h3 className="text-lg font-semibold text-brand-steel">Export Coverage</h3>
                <p className="mt-2 text-sm text-brand-gray">
                  Active shipments to China, Singapore, Malaysia, Thailand, Vietnam, Indonesia, the Philippines, and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase tracking-widest text-brand-navy">R&D and Quality Control</h3>
            <div className="space-y-4">
              {rdHighlights.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                  <h4 className="text-base font-semibold text-brand-steel">{item.title}</h4>
                  <p className="mt-2 text-sm text-brand-gray" data-locale-note={item.localization}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="max-container space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-brand-navy">Manufacturing tour</h2>
            <p className="mt-3 text-base text-brand-gray">
              Virtual walk-through screenshots and photography from our machining lines, heat treatment cells, and inspection labs are available upon request.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-60 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image src="/images/factory-machine.svg" alt="CNC turning center" fill className="object-cover" />
            </div>
            <div className="relative h-60 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image src="/images/lab-analysis.svg" alt="Metallurgy lab" fill className="object-cover" />
            </div>
            <div className="relative h-60 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image src="/images/team-collaboration.svg" alt="Engineering review" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-navy">Milestones</h2>
            <p className="text-sm text-brand-gray">
              Growth milestones that reflect our commitment to engineering depth and regional service.
            </p>
          </div>
          <div className="space-y-6">
            {milestones.map((point) => (
              <div key={point.year} className="flex gap-6">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-orange-200 text-sm font-semibold text-brand-navy">
                  {point.year}
                </div>
                <p className="text-sm text-brand-gray">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="max-container space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-brand-navy">Leadership team</h2>
            <p className="mt-3 text-base text-brand-gray">
              Our leadership brings metallurgy, process engineering, and regional customer care expertise to every project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((leader) => (
              <article key={leader.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                <div className="h-16 w-16 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-semibold">
                  {leader.name
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-steel">{leader.name}</h3>
                <p className="text-sm font-medium text-orange-500">{leader.role}</p>
                <p className="mt-3 text-sm text-brand-gray" data-locale-note={leader.localization}>
                  {leader.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-navy">Mission and values</h2>
            <p className="text-sm text-brand-gray">
              Every screw and barrel set is produced with the goal of supporting long-term partnerships built on measurable performance.
            </p>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-brand">
                  <h3 className="text-lg font-semibold text-brand-steel">{value.title}</h3>
                  <p className="mt-2 text-sm text-brand-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-brand">
            <h3 className="text-2xl font-semibold text-brand-steel">Schedule a factory tour</h3>
            <p className="text-sm text-brand-gray">
              Visit our Ningbo facility or arrange a virtual inspection session with our quality team to review machining centers, coatings, and inspection routines.
            </p>
            <div className="flex flex-col gap-3 text-sm text-brand-gray">
              <p>Tour slots available: Monday to Friday, 09:00 to 16:00 CST.</p>
              <p>Virtual tours offered in English, Mandarin, Bahasa Indonesia, Thai, and Vietnamese.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=factory-tour"
                className="rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
              >
                Schedule a factory tour
              </Link>
              <Link
                href="/downloads/company-profile.pdf"
                className="rounded-full border border-brand-navy px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Download company profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
