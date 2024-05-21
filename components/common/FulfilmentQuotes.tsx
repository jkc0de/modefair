"use client";

import Link from "next/link";

export default function FulfilmentQuotes() {
  return (
    <div className="flex w-full items-start  pt-4 text-start text-sm leading-[1.4285914286] -tracking-[.016em]">
      <span className="-mt-1 me-2 h-[25px] w-[25px]">
        <svg
          className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced"
          viewBox="0 0 25 25"
          role="img"
          aria-hidden="true"
          width="25px"
          height="25px"
        >
          <path fill="none" d="M0 0h25v25H0z"></path>
          <path
            fill="#1d1d1f"
            d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"
          ></path>
        </svg>
      </span>
      <div>
        <span className="font-semibold">Delivery:</span>
        <ul>
          <li>
            <span>In Stock</span>
          </li>
          <li>
            <span>Free Shipping</span>
          </li>
        </ul>
        <Link href="#" className="text-start text-primary hover:underline">
          <span>Get delivery dates</span>
        </Link>
      </div>
    </div>
  );
}
