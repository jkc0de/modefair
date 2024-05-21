"use client";

import Link from "next/link";

export default function Tagline() {
  return (
    <div className="mx-auto flex h-[52px] max-w-5xl flex-col items-center justify-center gap-1 px-[22px] text-sm md:flex-row md:flex-wrap">
      <div>Pay 0% interest for up to 24 months. Terms apply.
      <sup className="text-[8px]">◊◊</sup></div>
      <Link href="#" className="text-primary hover:underline">
        Learn more
      </Link>
    </div>
  );
}
