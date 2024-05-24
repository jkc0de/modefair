"use client";

import { useContext } from "react";
import Image from "next/image";
import { BundleContext } from "@/context/BundleContext";
import ProductData from "@/data/AppleProducts.json";
import Gallery from "../common/Gallery";

export default function BundleIncluded() {
  const bundle = useContext(BundleContext);

  const includedItems =
    ProductData?.products?.length > 0
      ? ProductData.products.find(
          (product) => product.slug === bundle?.state.tab,
        )?.included || []
      : [];

  return (
    includedItems?.length > 0 && (
      <div className="mx-auto w-full pb-[46px] lg:w-[980px]">
        <h2 className="pb-[41px] pt-16 text-center text-[28px] leading-[1.1] md:text-[40px]">
          What&apos;s in the Box
        </h2>
        {/* <div className="relative overflow-x-auto lg:overflow-hidden"> */}
        {/* <ul className="flex h-full ">
            {includedItems.map((item, index) => (
              <li key={index} className=" w-full flex-shrink-0 md:w-auto">
                <div className="bg-[#fafafa]">
                  <Image
                    src={item.image}
                    height={0}
                    width={0}
                    sizes="100"
                    alt={item.name}
                    className="mx-auto"
                    style={{ width: "auto", height: "392px" }}
                  />
                </div>
                <div className="px-[15px] pb-5 pt-5 text-sm leading-[1.4285914286] md:pb-[50px]">
                  {item.name}
                </div>
              </li>
            ))}
          </ul> */}
        <div>
          <Gallery gallery={includedItems} />
        </div>

        {/* </div> */}
        {/* <div className="flex justify-center md:hidden">
          {includedItems.map((_, index) => (
            <div
              key={index}
              className={`mx-1 mt-2 h-2 w-2 rounded-full ${
                index === 0 ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div> */}
      </div>
    )
  );
}
