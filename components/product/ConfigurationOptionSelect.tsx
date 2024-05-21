"use client";

import { useContext } from "react";
import { ButtonLink } from "../ui/Button";
import { DDLConfigOption } from "../ui/DropDownList";
import { ProductContext } from "@/context/ProductContext";

export default function ConfigurationOptionSelect({
  title,
  buttonLabel,
  options,
}: {
  title: string;
  buttonLabel: string;
  options: { label: string; slug: string }[];
}) {
  const product = useContext(ProductContext);

  const handleDDLChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    product.dispatch({
      type: "CHANGE_STATE",
      payload: { field: name, value },
    });
  };

  return (
    <div className="w-full">
      <div className="mt-[17px] flex flex-col">
        <h3 className="leading-[1.4705882353]-tracking-[.022em] text-[17px] font-semibold">
          <span>{title}</span>
        </h3>
        <ButtonLink type="button" label={buttonLabel} />
        <DDLConfigOption
          name="keyboard"
          label="Keyboard Language"
          options={options}
          onChange={handleDDLChange}
        />
      </div>
    </div>
  );
}
