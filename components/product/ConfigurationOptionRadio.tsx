"use client";

import { ConfigurationOption } from "@/interface/AppleInterface";

import { ButtonLink } from "../ui/Button";
import OptionGroup from "./OptionGroup";
import { StateType } from "@/context/ProductContext";

export default function ConfigurationOptionRadio({
  optionName,
  title,
  buttonLabel,
  options,
}: {
  optionName: keyof StateType;
  title: string;
  buttonLabel: string;
  options: ConfigurationOption;
}) {
  return (
    <div className="w-full">
      <div className="mt-[17px] flex flex-col">
        <h3 className="leading-[1.4705882353]-tracking-[.022em] text-[17px] font-semibold">
          <span>{title}</span>
        </h3>
        <ButtonLink type="button" label={buttonLabel} />
        <OptionGroup optionName={optionName} configs={options.configs} />
        {options?.footnote && (
          <p className="pl-4 pt-5 text-[#6e6e73]">{options?.footnote}</p>
        )}
      </div>
    </div>
  );
}
