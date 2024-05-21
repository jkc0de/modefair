"use client";

import { TabsProps } from "@/interface/AppleInterface";

export default function Tabs({
  options,
  selectedTab,
  setSelectedTab,
}: TabsProps) {
  return (
    options?.length > 0 && (
      <div className="flex items-center justify-center gap-2 md:gap-0">
        {options?.map((option) => (
          <button
            key={option?.slug}
            type="button"
            role="radio"
            className={`${selectedTab === option?.slug ? "z-[2] border border-primary shadow-primary" : ""} z-[0] line-clamp-2 flex min-h-[83px] min-w-[141px] max-w-[274px] border-collapse flex-col items-center justify-center overflow-hidden text-ellipsis border border-[#86868b] px-4 py-5 text-center first:rounded-l-xl last:rounded-r-xl`}
            onClick={() => {
              setSelectedTab(option?.slug);
            }}
          >
            {option?.name && (
              <span className="text-[17px] font-semibold">{option.name}</span>
            )}
          </button>
        ))}
      </div>
    )
  );
}
