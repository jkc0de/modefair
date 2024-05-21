"use client";

import { ChangeEventHandler } from "react";

export interface IDropDownList {
  name: string;
  label: string;
  options: { label: string; slug: string }[];
  selected?: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export function DDLConfigOption({
  name,
  options,
  label,
  selected,
  onChange,
}: IDropDownList) {
  return (
    <div className="relative mt-[.8235294118rem] bg-[#fffc]">
      <label
        htmlFor={name}
        className="absolute left-[18px] top-2 text-xs text-[#6e6e73]"
      >
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        className="h-[3.2941176471rem] w-full appearance-none text-ellipsis rounded-xl border border-black pl-[18px] pr-10 ps-[] pt-[1.0588235294rem] text-[17px] leading-[1.2353641176] -tracking-[.022em]"
      >
        {options.length > 0 &&
          options.map((option, index) => (
            <option key={index} value={option.slug}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}
