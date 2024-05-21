"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

import { formatColorIcon } from "@/utility/format";

import { RadioColor } from "../ui/Radio";
import BundleDetails from "./BundleDetails";

import { Model, Color } from "@/interface/AppleInterface";

export default function BundleItem({ data }: { data: Model }) {
  const [selectedColor, setSelectedColor] = useState<Color>(data.colors[0]);

  useEffect(() => {
    setSelectedColor(data.colors[0]);
  }, [data]);

  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const newSelectedColor = data.colors.find(
      (color: Color) => color.slug === value,
    );

    if (newSelectedColor) {
      setSelectedColor(newSelectedColor);
    }
  };

  return (
    <div className="flex h-full w-full basis-1/3 flex-col rounded-[18px] bg-[#f5f5f7] px-4 pb-5">
      <div>
        <Image
          src={selectedColor?.image}
          height={840}
          width={904}
          alt={`${selectedColor?.name}`}
          className="m-auto"
        />
      </div>
      <div className="w-full px-[3px] text-start">
        <span className="mt-0 w-full text-start text-xs text-black">
          {selectedColor?.name}
        </span>
        {data?.colors?.length > 0 && (
          <div className="relative flex flex-wrap pt-2">
            {data.colors.map((color: Color) => (
              <RadioColor
                optionName="color"
                key={color.slug}
                option={{
                  value: color.slug,
                  label: (
                    <Image
                      src={formatColorIcon(color.slug, "14-inch")}
                      width={30}
                      height={30}
                      alt={color.name}
                      className="relative z-0 aspect-auto rounded-[50%] p-0.5"
                    />
                  ),
                }}
                checked={selectedColor?.slug === color.slug ? true : false}
                onChange={handleToggleChange}
              />
            ))}
          </div>
        )}
      </div>
      <BundleDetails data={data} selectedColor={selectedColor} />
    </div>
  );
}
