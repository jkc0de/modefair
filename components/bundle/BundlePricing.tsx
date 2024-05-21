"use client";

import Link from "next/link";

import { Model } from "@/interface/AppleInterface";
import { formatPricing } from "@/utility/format";

export default function BundlePricing({ data }: { data: Model }) {
  return (
    <div className="w-full list-none pt-5 text-start text-2xl leading-[1.1666666667] tracking-[.009em]">
      <div className="flex min-h-[170px] w-full flex-col">
        <div className="w-full">
          {data?.pricing?.currency && data?.pricing?.price && (
            <span className="font-semibold">
              {formatPricing(data.pricing.currency, data.pricing.price)}
            </span>
          )}
        </div>
        <div className="w-full py-2.5 text-sm leading-[1.4285914286] -tracking-[.016em]">
          or
        </div>
        <div className="w-full">
          <span className="font-semibold">{data?.pricing?.instalment}</span>
        </div>
        <div className="w-full">
          <Link href="#" className="text-sm text-primary hover:underline">
            Explore monthly instalment options
          </Link>
        </div>
      </div>
    </div>
  );
}
