"use client";

import Image from "next/image";
import Link from "next/link";

export default function CompareModels() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#fafafa] pb-[95px] pt-[78px] text-center">
      <div>
        <h2 className="text-[40px] font-semibold leading-[1.1]">
          Compare Mac models
        </h2>
        <p className="mt-[17px]">
          <Link
            href="https://www.apple.com/my/mac/compare/"
            className="text-primary underline"
          >
            Choose the best Mac for you
          </Link>
        </p>
      </div>
      <div className="mt-[37px]">
        <Image
          className="aspect-auto"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-compare-202310?wid=1920&amp;hei=710&amp;fmt=png-alpha&amp;.v=1696970981940"
          alt="Mac models, 14-inch MacBook Pro, 16-inch MacBook Pro, iMac, Mac mini, Mac Studio, 15-inch MacBook Air, 13-inch MacBook Air, Mac Pro"
          width={960}
          height={355}
        />
      </div>
    </div>
  );
}
