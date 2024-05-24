"use client";

import { useEffect } from "react";
import FulfilmentQuotes from "../common/FulfilmentQuotes";
import PricingSummary from "./PricingSummary";

export default function ProductSummary() {
  useEffect(() => {
    const handleScroll = () => {
      const stickyBar = document.querySelector("#sticky-bar");
      if (stickyBar) {
        if (
          document.body.scrollTop > 125 ||
          document.documentElement.scrollTop > 125
        ) {
          stickyBar.classList.add("block");
          stickyBar.classList.remove("hidden");
        } else {
          stickyBar.classList.remove("block");
          stickyBar.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="sticky-bar"
      className="sticky top-0 z-10 hidden min-h-[130px] w-full border-t border-[#d2d2d7] bg-[#f5f5f7]"
    >
      <div className="mx-auto flex max-w-[980px] flex-col-reverse md:flex-row lg:w-[980px]">
        <div className="hidden w-full md:block md:max-w-[50%] md:basis-1/2 md:pb-5">
          <div className="flex w-full pt-5">
            <FulfilmentQuotes />
          </div>
        </div>
        <div className="w-full md:max-w-[50%] md:basis-1/2 md:pb-5">
          <div className="flex w-full px-5 pb-5 md:px-0 md:pb-0 md:pt-5">
            <PricingSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
