import React from "react";

import { Model } from "@/interface/AppleInterface";

export default function BundleSpecs({ data }: { data: Model }) {
  return (
    <ul className="min-h-[188px] list-none pt-5 text-start text-sm leading-[1.4285914286] -tracking-[.016em]">
      {data?.specs?.display && (
        <li className="mt-[5.6px]">{data.specs.display}</li>
      )}
      {data?.specs?.port && <li className="mt-[5.6px]">{data.specs.port}</li>}

      {data?.specs?.keyboard && (
        <li className="mt-[5.6px]">{data.specs.keyboard}</li>
      )}
      {data?.specs?.trackpad && (
        <li className="mt-[5.6px]">{data.specs.trackpad}</li>
      )}
      {data?.power?.label && <li className="mt-[5.6px]">{data.power.label}</li>}
    </ul>
  );
}
