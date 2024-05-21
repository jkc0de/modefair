"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { BundleContext } from "@/context/BundleContext";

import Pills from "../ui/Pills";
import BundleItem from "./BundleItem";

import ProductData from "@/data/AppleProducts.json";

export default function BundleList() {
  const bundle = useContext(BundleContext);

  const [animateTab, setAnimateTab] = useState<string>("");
  const [animatePill, setAnimatePill] = useState<string>("");

  const containerRef = useRef<HTMLDivElement | null>(null);

  const chipOptions =
    ProductData?.products?.length > 0
      ? (
          ProductData.products.find(
            (product) => product.slug === bundle.state?.tab,
          )?.chips || []
        ).length > 0
        ? [
            { name: "All", slug: "" },
            ...(ProductData.products.find(
              (product) => product.slug === bundle.state?.tab,
            )?.chips || []),
          ]
        : []
      : [];

  const filteredModels =
    ProductData?.products?.length > 0
      ? ProductData.products
          .find((product) => product.slug === bundle.state?.tab)
          ?.models.filter((model) =>
            bundle.state?.chip ? model.chip?.slug === bundle.state?.chip : true,
          ) || []
      : [];

  const handleChipChange = (payload: string): void => {
    bundle.dispatch({ type: "CHANGE_CHIP", payload: payload });
  };

  useEffect(() => {
    setAnimateTab("animate-fade");
    const timer = setTimeout(() => {
      setAnimateTab("");
    }, 350);

    // if (containerRef.current) {
    //   containerRef.current.scrollIntoView({
    //     behavior: "instant",
    //     block: "start",
    //   });
    // }

    return () => clearTimeout(timer);
  }, [bundle.state?.tab]);

  useEffect(() => {
    setAnimatePill("animate-fade");
    const timer = setTimeout(() => {
      setAnimatePill("");
    }, 350);

    return () => clearTimeout(timer);
  }, [bundle.state?.chip]);

  return (
    <div
      ref={containerRef}
      className={`mx-auto w-full max-w-[980px] pt-2.5 duration-100 ease-in-out ${animateTab}`}
    >
      {chipOptions.length > 0 && (
        <>
          <div className="mb-[17px] mt-[9px] text-sm">Filter by chip:</div>
          <div>
            <Pills
              options={chipOptions}
              selectedPill={bundle.state?.chip}
              setSelectedPill={handleChipChange}
            />
          </div>
        </>
      )}
      <div
        className={`mb-5 mt-8 grid grid-cols-1 gap-5 pb-1 ease-in sm:grid-cols-2 lg:grid-cols-3 ${animatePill}`}
      >
        {filteredModels.length > 0 &&
          filteredModels.map((model) => (
            <BundleItem key={model.id} data={model} />
          ))}
      </div>
    </div>
  );
}
