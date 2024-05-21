"use client";

import { ProductContext } from "@/context/ProductContext";
import { formatPricing, formatPricingInstalment } from "@/utility/format";
import Link from "next/link";
import { useContext } from "react";
import { ButtonPrimary } from "../ui/Button";

export default function PricingSummary() {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="flex w-full list-none flex-col pt-5 text-start text-2xl leading-[1.1666666667] tracking-[.009em] md:flex-row">
      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-end gap-2 text-right">
          {state.price && (
            <span className="font-semibold">
              {formatPricing("RM", state.price)}
            </span>
          )}
          <span className="font-semibold">or</span>
        </div>

        <div className="flex w-full items-center justify-end gap-2 text-right">
          <span className="font-semibold">
            {formatPricingInstalment("RM", state.price, 24)}
          </span>
        </div>
        <div className="flex w-full items-center justify-end pt-1.5 text-right">
          <Link href="#" className="text-sm text-primary hover:underline">
            Explore monthly instalment options
          </Link>
        </div>
      </div>
      <div className="flex items-center pt-5 md:pt-0">
        <div className="mx-auto w-[80%] pl-[15px] md:w-fit">
          <ButtonPrimary label="Add to Bag" type="button" />
        </div>
        <div>
          <span className="material-symbols-outlined text-3xl text-primary">
            bookmark
          </span>
        </div>
      </div>
    </div>
  );
}
