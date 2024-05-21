"use client";

import Link from "next/link";
import Accordion from "../ui/Accordion";

const SidebarList = [
  { name: "Overview", slug: "#" },
  { name: "macOS", slug: "#" },
  { name: "Compare", slug: "#" },
];

export default function LocalNavBar() {
  return (
    <>
      <div className="hidden h-[52px] max-w-5xl items-center justify-between px-[22px] text-xs md:flex">
        <Link href="/" className="text-[21px] font-semibold">
          MacBook Pro
        </Link>
        <div className="flex items-center justify-between gap-5 opacity-80 hover:opacity-100">
          {SidebarList.length > 0 &&
            SidebarList.map((item, index) => (
              <Link key={index} href={item.slug}>
                {item.name}
              </Link>
            ))}
        </div>
      </div>
      <div className="flex h-[52px] w-full max-w-5xl items-center justify-between px-[22px] text-xs text-black md:hidden">
        <Accordion
          item={{
            title: (
              <Link href="/" className="text-[21px] font-semibold text-black">
                MacBook Pro
              </Link>
            ),
            // description:
            //   SidebarList.length > 0 &&
            //   SidebarList.map((item, index) => (
            //     <Link key={index} href={item.slug}>
            //       {item.name}
            //     </Link>
            //   )),
          }}
        />
      </div>
    </>
  );
}
