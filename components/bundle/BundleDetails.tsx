"use client";

import Image from "next/image";

import { formatChipIcon } from "@/utility/format";

import { Model, Color } from "@/interface/AppleInterface";

import BundleSpecs from "./BundleSpecs";
import BundlePricing from "./BundlePricing";
import { TradeInBannerOne } from "../common/TradeInBanner";
import BundleSelect from "./BundleSelect";
import FulfilmentQuotes from "../common/FulfilmentQuotes";

export default function BundleDetails({
  data,
  selectedColor,
}: {
  data: Model;
  selectedColor: Color;
}) {
  return (
    <div className="mb-5 mt-2 flex w-full flex-col px-[3px]">
      <h2 className="spacing min-h-[183px] text-start text-2xl font-medium leading-[1.1666666667] tracking-[.009em]">
        <div className="pb-2.5 pt-1 ">
          <Image
            src={formatChipIcon(data?.chip?.slug, "14-inch")}
            height={51}
            width={51}
            alt={data?.chip?.name}
          />
        </div>
        {data?.cpu?.label}
        <br />
        {data?.gpu?.label}
        <br />
        {data?.memory?.label}
        <br />
        {data?.storage?.label}
      </h2>
      <BundleSpecs data={data} />
      <BundlePricing data={data} />
      <TradeInBannerOne />
      <BundleSelect data={data} selectedColor={selectedColor} />
      <div className="pt-5">
        <FulfilmentQuotes />
      </div>
    </div>
  );
}
