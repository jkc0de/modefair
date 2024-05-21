"use client";

import { useRouter } from "next/navigation";

import { ButtonPrimary } from "../ui/Button";
import { Color, Model } from "@/interface/AppleInterface";
import SaveBanner from "../common/SaveBanner";
import { useContext } from "react";
import { BundleContext } from "@/context/BundleContext";

export default function BundleSelect({
  data,
  selectedColor,
}: {
  data: Model;
  selectedColor: Color;
}) {
  const router = useRouter();

  const { state, dispatch } = useContext(BundleContext);

  const productSlug =
    data.colors?.find((color: Color) => color.slug === selectedColor.slug)
      ?.productSlug || "";

  return (
    <div className="flex flex-col text-start text-sm leading-[1.4285914286] -tracking-[.016em]">
      <ButtonPrimary
        type="button"
        label="Select"
        disabled={state.tab === "16-inch"}
        onClick={() => {
          if (productSlug) {
            router.push(`/macbook-pro/${productSlug}`);
          }
        }}
      />
      <div className="pt-6">
        <SaveBanner />
      </div>
    </div>
  );
}
