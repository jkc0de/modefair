"use client";

import "../globals.css";
import MainNavBar from "@/components/navbar/MainNavBar";
import Tagline from "@/components/ui/Tagline";
import Footer from "@/components/footer/Footer";
import { useEffect, useReducer } from "react";
import {
  FOOTER_INITIAL_STATE,
  FooterContext,
  FooterReducer,
} from "@/context/FooterContext";

export default function AppleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(FooterReducer, FOOTER_INITIAL_STATE);

  return (
    <FooterContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <main className={`relative mx-auto flex h-full flex-col justify-center`}>
        <div className="relative h-full border-b">
          <MainNavBar />
        </div>

        <div className="relative h-full bg-[#f5f5f7]">
          <Tagline />
        </div>

        <main className="relative mx-auto h-full w-full flex-grow ">
          {children}
        </main>
        <Footer />
      </main>
    </FooterContext.Provider>
  );
}
