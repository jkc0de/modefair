"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { BundleContext } from "@/context/BundleContext";

import ProductData from "@/data/AppleProducts.json";

export default function BundleDecision() {
  const bundle = useContext(BundleContext);

  const decisionOptions =
    ProductData?.products?.length > 0
      ? ProductData.products.find(
          (product) => product.slug === bundle?.state?.tab,
        )?.decision || []
      : [];

  return (
    decisionOptions.length > 0 && (
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <div className="rounded-[18px] bg-[#fafafa] pb-[47px]  pt-[71px] lg:min-w-[980px]">
          <div className="pb-[53px] text-center">
            <h2 className="text-[27px] font-semibold leading-[1.1428571429] tracking-[.007em]">
              What to consider when choosing your MacBook&nbsp;Pro.
            </h2>
            <p className="mt-[13.6px]">
              Configure your laptop on the next step.
            </p>
          </div>
          <div className="m-auto flex max-w-[910px] flex-col flex-wrap md:flex-row">
            {decisionOptions.map((option, index) => (
              <div
                key={index}
                className={`${decisionOptions.length > 3 ? "md:max-w-[33.33%] md:basis-1/3 lg:max-w-[25%] lg:basis-1/4" : "md:max-w-[33.33%] md:basis-1/3"} w-full p-5 pt-0 lg:p-0`}
              >
                <div className="px-5 text-start text-sm leading-[1.4285914286] -tracking-[-.016em]">
                  <div className="flex h-9 items-end">
                    <Image
                      src={option.image}
                      height={0}
                      width={0}
                      sizes="100"
                      alt={option.name}
                      style={{ width: "auto", height: "36px" }}
                    />
                  </div>
                  <h3 className="mt-[22px] font-bold ">{option.name}</h3>
                  <p className="mt-[15.4px]">{option.description}</p>
                  {option?.features?.length > 0 && (
                    <ul className="mt-[11.2px] list-disc">
                      {option.features?.map((feature, index) => (
                        <li key={index} className="mt-[11.2px]">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="pt-[54px] text-xs leading-[1.3333733333] -tracking-[.01em]">
            Have questions about buying a Mac?{" "}
            <Link
              href="#"
              target="_blank"
              className="text-primary hover:underline"
            >
              Chat with a Mac Specialist.
            </Link>
          </p>
        </div>
      </div>
    )
  );
}
