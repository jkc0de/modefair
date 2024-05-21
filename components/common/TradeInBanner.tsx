"use client";

import Link from "next/link";

export function TradeInBannerOne() {
  return (
    <section className="mb-6 mt-[3px] w-full text-start text-sm leading-[1.4285914286] -tracking-[.016em]">
      <div className="min-h-[103px] w-full">
        <h3 className="font-semibold">
          <span>Add a trade-in</span>
        </h3>
        <div className="mt-0 pe-1.5">
          <span>
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
          </span>
        </div>
        <Link
          href="#"
          className="mt-[3px] min-w-[16%] text-start text-primary hover:underline"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}

export function TradeInBannerTwo() {
  return (
    <section className="w-full border-y border-[#e5e7eb] pb-[27px] pt-[11px] text-start text-sm leading-[1.4705882353] -tracking-[.022em]">
      <div className="w-full">
        <h2 className="pb-3 pt-2.5 font-semibold leading-[1.4285914286] -tracking-[.016em]">
          <span>Add a trade-in</span>
        </h2>
        <div className="mt-0 pb-1 pe-1.5">
          <span>
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
          </span>
        </div>
        <Link
          href="#"
          className="mt-[3px] min-w-[16%] text-start text-primary hover:underline"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
