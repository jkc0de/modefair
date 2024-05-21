"use client";

import Image from "next/image";
import Link from "next/link";

import LocalNavBar from "./LocalNavBar";

import AppleIcon from "@/public/images/icons/apple.svg";
import SearchIcon from "@/public/images/icons/search.svg";
import BagIcon from "@/public/images/icons/bag.svg";
import HamburgerMenu from "./Hamburger";

const NavbarList = [
  { name: "Store", slug: "#" },
  { name: "Mac", slug: "#" },
  { name: "iPad", slug: "#" },
  { name: "iPhone", slug: "#" },
  { name: "Watch", slug: "#" },
  { name: "AirPods", slug: "#" },
  { name: "TV & Home", slug: "#" },
  { name: "Entertainment", slug: "#" },
  { name: "Accessories", slug: "#" },
  { name: "Support", slug: "#" },
];

export default function MainNavBar() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col ">
      <nav className="flex h-[44px] max-w-5xl list-none items-center justify-between px-[22px] text-xs">
        <Link href="/" className="px-2">
          <Image
            src={AppleIcon}
            alt="Apple Logo"
            height={44}
            width={14}
            className="opacity-80 hover:opacity-100"
          />
        </Link>

        {NavbarList.length > 0 &&
          NavbarList.map((item, index) => (
            <Link
              key={index}
              href={item.slug}
              className="hidden px-2 lg:block "
            >
              {item.name}
            </Link>
          ))}
        <Link href="#" className="hidden px-2 lg:block">
          <Image src={SearchIcon} alt="Search" height={44} width={14} />
        </Link>
        <Link href="#" className="hidden px-2 lg:block">
          <Image src={BagIcon} alt="Bag" height={44} width={14} />
        </Link>

        <div className="flex items-center gap-2.5 lg:hidden">
          <Link href="#" className=" px-2">
            <Image src={SearchIcon} alt="Search" height={44} width={14} />
          </Link>
          <Link href="#" className="px-2">
            <Image src={BagIcon} alt="Bag" height={44} width={14} />
          </Link>
          <HamburgerMenu isNavMenuOpen={false} />
        </div>
      </nav>
      <LocalNavBar />
    </div>
  );
}
