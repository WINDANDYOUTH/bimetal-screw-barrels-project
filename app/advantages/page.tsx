import Link from "next/link";

export const metadata = {
  title: "Advantages | Screw Barrel Group",
  description: "Key advantages of Screw Barrel Group screw and barrel manufacturing.",
};

export default function AdvantagesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-surface px-6 py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-12 shadow-brand">
        <h1 className="text-3xl font-semibold text-brand-navy">Advantages of our screw barrels</h1>
        <p className="text-sm text-brand-gray">
          This page is a legacy placeholder. Please visit the home page to explore the full marketing experience we created for the new site.
        </p>
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
