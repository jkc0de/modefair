"use client";

import Image from "next/image";
import Link from "next/link";

export default function Billboard() {
  return (
    <>
      {/* Desktop */}
      <div className="relative m-auto hidden h-[376px] w-full max-w-[1070px] overflow-hidden bg-black md:block lg:min-w-[980px]">
        <div className="relative me-auto ms-auto flex w-[980px] items-center justify-between">
          <div className="absolute left-3 top-14 flex w-[396px] max-w-[1/3] basis-1/3 flex-col items-start justify-center pr-5 text-start text-white">
            <h2 className="z-1 -mt-2.5 pt-[30px] ">
              <Image
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-plus-logo-standard-202404?wid=100&amp;hei=40&amp;fmt=png-alpha&amp;.v=1711378620426"
                alt=""
                width="50"
                height="20"
                className="font-semibold"
              />
            </h2>
            <p className="mt-[.7em] text-[32px] font-semibold leading-[1.25] tracking-[.004em]">
              Get 3&nbsp;months of Apple&nbsp;TV+ free when you buy
              a&nbsp;Mac.***
            </p>
            <ul className="mt-[.7em] flex w-full flex-row items-center gap-8">
              <li>
                <Link
                  href="http://tv.apple.com?itscg=10000&amp;itsct=tvwebmac_buytile_tifwebavl200729"
                  className="text-primary hover:underline"
                >
                  <span aria-hidden="true"> Try it free^</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://offers.appleservices.apple/en-my/hardware"
                  className="text-primary hover:underline"
                >
                  <span aria-hidden="true">Learn&nbsp;more</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <Image
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-plus-mac-argylle-202404?wid=2140&amp;hei=752&amp;fmt=jpeg&amp;qlt=90&amp;.v=1711998621719"
            alt="Argylle on Apple TV+, standing in a V formation against an argyle backdrop, from front to back, Henry Cavill, Dua Lipa, Samuel L. Jackson, Bryce Dallas Howard, Sam Rockwell, Ariana DeBose, John Cena, Catherine O’Hara, Bryan Cranston"
            width={1070}
            height={376}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="relative flex h-[376px] w-full max-w-[1070px] flex-col justify-between overflow-hidden bg-black md:hidden">
        <div className="relative me-auto ms-auto flex w-full items-center justify-between">
          <div className="absolute left-0 right-0 top-1 z-[1] mx-auto flex w-[396px]  flex-col items-start justify-center text-center text-white">
            <h2 className="z-1 mx-auto -mt-2.5 pt-[28px]">
              <Image
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-plus-logo-standard-202404?wid=100&amp;hei=40&amp;fmt=png-alpha&amp;.v=1711378620426"
                alt=""
                width="50"
                height="20"
                className="font-semibold"
              />
            </h2>
            <p className="mt-[.7em] text-[24px] font-semibold leading-[1.25] tracking-[.004em]">
              Get 3&nbsp;months of Apple&nbsp;TV+ free when you buy
              a&nbsp;Mac.***
            </p>
            <ul className="mt-[.7em] flex w-full flex-row items-center justify-center gap-8">
              <li>
                <Link
                  href="http://tv.apple.com?itscg=10000&amp;itsct=tvwebmac_buytile_tifwebavl200729"
                  className="text-primary hover:underline"
                >
                  <span aria-hidden="true"> Try it free^</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://offers.appleservices.apple/en-my/hardware"
                  className="text-primary hover:underline"
                >
                  <span aria-hidden="true">Learn&nbsp;more</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-plus-mac-argylle-202404_FMT_WHH?wid=1850&hei=1026&fmt=jpeg&qlt=90&.v=1711378621321"
            alt="Argylle on Apple TV+, standing in a V formation against an argyle backdrop, from front to back, Henry Cavill, Dua Lipa, Samuel L. Jackson, Bryce Dallas Howard, Sam Rockwell, Ariana DeBose, John Cena, Catherine O’Hara, Bryan Cranston"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
