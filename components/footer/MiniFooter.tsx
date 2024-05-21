"use client";

import Link from "next/link";

export default function MiniFooter() {
  return (
    <div className="w-full py-[17px] text-[#0000008F] md:pb-[11px] md:pt-[37px]">
      <div className="mb-4 border-opacity-[.16] md:border-b md:pb-[19px]">
        <p className="">
          More ways to shop:{" "}
          <Link
            className="text-primary underline"
            href="https://locate.apple.com/my/en"
          >
            Find a retailer
          </Link>{" "}
          near you. Or call{" "}
          <Link
            className="text-primary underline"
            href="https://locate.apple.com/my/en"
          >
            1800-80-6419
          </Link>
          .
        </p>
      </div>
      <div className="flex items-start pb-4 text-left md:hidden">Malaysia</div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="mr-[30px]">
            Copyright © 2024 Apple Inc. All rights reserved.
          </div>
          <ul className="flex flex-wrap divide-x md:flex-nowrap">
            <li className="pl-0 pr-[9px] md:px-[9px]">
              <Link
                href="http://apple.com/legal/privacy/my"
                className="hover:underline"
              >
                Privacy Policy
              </Link>{" "}
            </li>
            <li className="px-[9px]">
              <Link
                href="http://www.apple.com/legal/internet-services/terms/site.html"
                className="hover:underline"
              >
                Terms of Use
              </Link>{" "}
            </li>
            <li className="px-[9px]">
              <Link href="#" className="hover:underline">
                Sales and Refunds
              </Link>{" "}
            </li>
            <li className="px-[9px]">
              <Link
                href="https://www.apple.com/my/legal"
                className="hover:underline"
              >
                Legal
              </Link>{" "}
            </li>
            <li className="px-[9px]">
              <Link href="#" className="hover:underline">
                Site Map
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="hidden items-end text-right md:flex">Malaysia</div>
      </div>
    </div>
  );
}
