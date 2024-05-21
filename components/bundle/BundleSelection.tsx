"use client";

import Link from "next/link";
import Image from "next/image";

import ChatIcon from "@/public/images/icons/chat.svg";
import BundleSelectionTabs from "./BundleSelectionTabs";

import { BundleContext } from "@/context/BundleContext";
import { useReducer } from "react";
import BundleList from "./BundleList";
import BundleIncluded from "./BundleIncluded";
import BundleDecision from "./BundleDecision";

import { BundleReducer, BUNDLE_INITIAL_STATE } from "@/context/BundleContext";

export default function BundleSelection() {
  const [state, dispatch] = useReducer(BundleReducer, BUNDLE_INITIAL_STATE);

  return (
    <BundleContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="relative mx-auto mt-[50px] flex  w-[87.5%] flex-col items-center justify-center text-center xl:w-full">
        <h1 className="pb-5 text-[32px] font-semibold leading-[1.125] tracking-[.004em] md:text-5xl">
          Choose your new MacBook Pro.
        </h1>
        <div className="mt-2.5 flex flex-col gap-2 pb-5 text-[21px]">
          <span className="flex items-center justify-center">
            <Image src={ChatIcon} alt="Chat" height={35} width={35} />
          </span>
          <span>Have questions about buying a Mac?</span>
          <Link href="#" className="text-primary hover:underline">
            Chat with a Mac Specialist
          </Link>
        </div>
        <div className="relative w-full">
          <BundleSelectionTabs />
          <BundleList />
        </div>
        <div className="w-full">
          <BundleIncluded />
        </div>
        <div className="w-full">
          <BundleDecision />
        </div>
      </div>
    </BundleContext.Provider>
  );
}
