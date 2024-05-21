"use client";

import { useContext } from "react";

import { ProductContext } from "@/context/ProductContext";
import { ExactModel } from "@/interface/AppleInterface";
import { formatProductMemory, formatProductStorage } from "@/utility/format";

export default function ProductDetails({ data }: { data: ExactModel }) {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="mb-[35px]">
      <ul className="pt-3 text-sm leading-[1.4285914286] -tracking-[.016em]">
        {state.chip && <li className="mb-[11px]">{state.chip.label}</li>}

        {state?.memory && (
          <li className="mb-[11px]">{formatProductMemory(state.memory)}</li>
        )}

        {state?.storage && (
          <li className="mb-[11px]">{formatProductStorage(state.storage)}</li>
        )}

        <li className="mb-[11px]">{data.specs["display"]}</li>

        {state?.power && <li className="mb-[11px]">{state.power.label}</li>}

        {state?.keyboard && <li className="mb-[11px]">{state?.keyboard}</li>}
      </ul>
    </div>
  );
}
