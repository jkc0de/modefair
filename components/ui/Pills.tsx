"use client";

import { PillsProps } from "@/interface/AppleInterface";

export default function Pills({
  options,
  selectedPill,
  setSelectedPill,
}: PillsProps) {
  return (
    options?.length > 0 && (
      <div className="ms-0 flex items-center justify-center">
        {options?.map((option) => (
          <button
            key={option?.slug}
            type="button"
            role="radio"
            className={`${selectedPill === option?.slug ? "bg-black text-white" : "bg-secondary"} -ms-[1px] me-2 line-clamp-2 w-auto overflow-hidden text-ellipsis rounded-3xl px-5  text-center first:ms-0 last:me-0 focus:ring-2 focus:ring-primary focus:ring-offset-1`}
            onClick={() => {
              setSelectedPill(option?.slug);
            }}
          >
            {option?.name && (
              <span className="flex h-9 flex-col items-center justify-center text-sm font-semibold">
                {option.name}
              </span>
            )}
          </button>
        ))}
      </div>
    )
  );
}
