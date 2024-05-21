import { MouseEventHandler } from "react";

interface Button {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fontSize?: string;
  width?: string;
  textAlign?: string;
  disabled?: boolean;
}

export const ButtonPrimary = ({
  type,
  label,
  onClick,
  fontSize = "text-sm",
  width = "w-full",
  disabled,
}: Button) => {
  return (
    <button
      type={type}
      className={`
      ${disabled ? "bg-gray-300" : " bg-primary hover:bg-[#0076df]"}
      ${fontSize} ${width} ]  rounded-lg px-[15px] py-2 text-white`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export const ButtonLink = ({
  type,
  label,
  onClick,
  fontSize = "text-sm",
  width = "w-full",
  textAlign = "text-start",
}: Button) => {
  return (
    <button
      type={type}
      className={`${fontSize} ${width} ${textAlign} mt-1 text-primary hover:underline`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
