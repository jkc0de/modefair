"use client";

import { FooterContext } from "@/context/FooterContext";
import { useContext } from "react";

export default function LocalFooter() {
  const { state, dispatch } = useContext(FooterContext);

  return (
    state.footer && (
      <div className="border-b border-opacity-[.16] pb-[11px] pt-[17px] text-[#0000008F]">
        {state.footer}
      </div>
    )
  );
}
