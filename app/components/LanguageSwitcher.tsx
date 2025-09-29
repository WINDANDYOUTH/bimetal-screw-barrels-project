"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const languageOptions = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "Simplified Chinese", short: "CN" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
  { code: "th", label: "Thai", short: "TH" },
  { code: "vi", label: "Vietnamese", short: "VI" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("lang") ?? "en";
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "en") {
        params.delete("lang");
      } else {
        params.set("lang", value);
      }
      const query = params.toString();
      const nextUrl = query.length > 0 ? pathname + "?" + query : pathname;
      router.replace(nextUrl);
    });
  };

  return (
    <label className="flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-medium text-brand-navy shadow-sm transition hover:border-white/40 lg:text-sm">
      <span className="sr-only">Switch language</span>
      <span className="hidden text-xs font-semibold text-brand-steel sm:inline">
        EN | CN
      </span>
      <select
        className="appearance-none bg-transparent text-xs font-semibold text-brand-navy focus:outline-none sm:text-sm"
        value={active}
        onChange={handleChange}
        aria-label="Select language"
        disabled={isPending}
      >
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code} className="text-brand-steel">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
