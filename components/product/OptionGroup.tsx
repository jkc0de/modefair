"use client";

import { useContext } from "react";
import { Configs } from "@/interface/AppleInterface";
import { RadioConfigOption } from "../ui/Radio";
import { ProductContext, StateType } from "@/context/ProductContext";
import { formatPricingOption } from "@/utility/format";

export default function OptionGroup({
  optionName,
  configs,
}: {
  optionName: keyof StateType;
  configs: Configs[];
}) {
  const { state, dispatch } = useContext(ProductContext);

  const handleToggleChange = (data: Configs) => {
    dispatch({
      type: "CHANGE_STATE",
      payload: {
        field: optionName,
        value: data,
      },
    });
  };

  return (
    <>
      {configs?.length > 0 && (
        <div className="flex max-w-full basis-full flex-col">
          {configs.map((option, index) => (
            <>
              <RadioConfigOption
                key={index}
                optionName={optionName}
                option={{
                  label: option.label,
                  value: option.slug,
                  secondaryLabel: formatPricingOption(
                    "RM",
                    option.priceAddOn - state[optionName]?.priceAddOn,
                  ),
                }}
                data={option}
                onClick={handleToggleChange}
                checked={state[optionName]?.slug === option.slug}
                disabled={
                  option.requireChip &&
                  option.requireChip.length > 0 &&
                  !option.requireChip.includes(state.chip.slug)
                    ? true
                    : false
                }
              />
            </>
          ))}
        </div>
      )}
    </>
  );
}
