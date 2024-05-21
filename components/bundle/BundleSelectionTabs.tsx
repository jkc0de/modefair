"use client";

import { useContext, useEffect } from "react";

import { BundleContext } from "@/context/BundleContext";

import Tabs from "../ui/Tabs";

import ProductData from "@/data/AppleProducts.json";

export default function BundleSelectionTabs() {
  const bundle = useContext(BundleContext);

  const tabOptions =
    ProductData?.products?.length > 0
      ? ProductData.products.map((product) => ({
          name: product.slug,
          slug: product.slug,
        }))
      : [];

  const handleTabChange = (payload: string): void => {
    bundle.dispatch({ type: "CHANGE_TAB", payload: payload });
  };

  useEffect(() => {
    window.onscroll = function () {
      const stickyBar = document.querySelector("#sticky-bar");
      if (stickyBar) {
        if (
          document.body.scrollTop > 420 ||
          document.documentElement.scrollTop > 420
        ) {
          stickyBar.classList.add("bg-[#f9f9f9f2]");
        } else {
          stickyBar.classList.remove("bg-[#f9f9f9f2]");
        }
      }
    };
  }, []);

  return (
    <div id="sticky-bar" className="sticky top-0 z-[10] py-5">
      <Tabs
        options={tabOptions}
        selectedTab={bundle?.state?.tab}
        setSelectedTab={handleTabChange}
      />
    </div>
  );
}
