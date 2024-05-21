"use client";

import Link from "next/link";

export default function OnlineChat() {
  return (
    <div className="flex w-full flex-col text-center text-sm leading-[1.4285914286] -tracking-[.016em]">
      <span>Have questions about buying a Mac?</span>
      <Link href="#" className="text-primary hover:underline">
        Chat with a Mac Specialist
      </Link>
    </div>
  );
}
