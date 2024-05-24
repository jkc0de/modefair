"use client";

import { Configs, ConfigurationOption } from "@/interface/AppleInterface";
import { ChangeEvent, ChangeEventHandler } from "react";

export interface IRadioColor {
  optionName: string;
  option: {
    value: string;
    label: React.ReactNode | string;
    secondaryLabel?: React.ReactNode | string | number;
    showSecondaryLabel?: boolean;
    disabled?: boolean;
  };
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface IOption {
  value: string;
  label: string;
  secondaryLabel?: string;
  showSecondaryLabel?: boolean;
  disabled?: boolean;
}

export interface IRadioCustom {
  data: Configs;
  optionName: any;
  option: IOption;
  checked?: boolean;
  disabled?: boolean;
  onClick?: (data: Configs) => void;
}

export function RadioConfigOption({
  data,
  optionName,
  option,
  checked,
  disabled,
  onClick,
}: IRadioCustom) {
  const handleRadioClick = (data: Configs) => {
    if (onClick != undefined && !disabled) {
      onClick(data);
    }
  };

  return (
    <div className="mt-[.8235294118rem]">
      <label
        htmlFor={option.value}
        className={`${disabled ? "pointer-events-none border opacity-[.42]" : ""} ${checked ? "border-2 border-[#0071e3]" : "border border-black"} flex h-auto min-h-[4.8823529412rem] w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-[#fffc] p-3.5 text-center text-[17px] leading-[1.2353641176] -tracking-[0.022em] text-black`}
        onClick={() => {
          handleRadioClick(data);
        }}
      >
        <input
          id={option.label}
          type="radio"
          name={optionName}
          value={option.value}
          checked={checked}
          disabled={disabled}
          className="absolute opacity-0"
        />
        <div className="flex w-full items-center justify-between">
          <span className="max-w-[50%] basis-1/2 text-start font-semibold">
            {option.label}
          </span>
          {!checked && option.secondaryLabel && (
            <span className="max-w-[50%] basis-1/2 text-end">
              {option.secondaryLabel}
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

export function RadioColor({
  optionName,
  option,
  checked,
  onChange,
}: IRadioColor) {
  return (
    <div className="ms-0 flex h-10 w-10 items-center justify-center">
      <label className="relative me-1.5 cursor-pointer items-center">
        <input
          type="radio"
          name={optionName}
          value={option?.value}
          onChange={onChange}
          checked={checked}
          className="peer sr-only"
        />
        <div
          className={`rounded-[50%] border-primary ${checked ? "ring-2 ring-primary " : ""} inline-block outline-offset-4 focus:outline-offset-2 peer-focus:outline peer-focus:outline-2 peer-focus:outline-[#0071e3]`}
        >
          {option?.label}
        </div>
      </label>
    </div>
  );
}
