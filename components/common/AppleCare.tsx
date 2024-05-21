"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppleCare() {
  return (
    <div className="mx-auto flex h-full w-[87.5%] flex-col items-center justify-center py-20 lg:w-[832px]">
      <div className="pb-[60px]">
        <Image
          className="aspect-square"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/applecare-hero-bb-201706?wid=304&hei=304&fmt=jpeg&qlt=90&.v=1629955311000"
          width={152}
          height={152}
          alt="Apple Care"
        />
      </div>
      <h2 className="text-left text-[32px] font-semibold leading-[1.125] tracking-[0.04em] md:text-center">
        AppleCare+ for Mac
      </h2>
      <p className="mt-[13.6px]">
        Every Mac comes with a{" "}
        <Link
          href="https://apple.com/legal/warranty"
          target="_blank"
          className="text-primary underline"
        >
          one-year limited warranty
        </Link>{" "}
        and up to 90 days of{" "}
        <Link
          href="https://www.apple.com/my/support/complimentary"
          target="_blank"
          className="text-primary underline"
        >
          complimentary technical support
        </Link>
        . AppleCare+ for Mac extends your coverage to three years from your
        AppleCare+ purchase date and adds unlimited incidents of accidental
        damage protection, each subject to a service fee of RM 469 for screen
        damage or external enclosure damage, or RM 1,429 for other accidental
        damage. In addition, you‘ll get 24/7 priority access to Apple experts by
        chat or phone through{" "}
        <Link
          href="https://getsupport.apple.com"
          target="_blank"
          className="text-primary underline"
        >
          getsupport.apple.com
        </Link>
        . For complete details, see the{" "}
        <Link
          href="https://www.apple.com/my/legal/sales-support/applecare/applecareplus/en/mac"
          target="_blank"
          className="text-primary underline"
        >
          terms
        </Link>
        .
      </p>
      <p className="mt-[13.6px] w-full text-left md:text-center">
        <Link
          href="https://www.apple.com/my/support/products/mac.html"
          target="_blank"
          className="text-left text-primary hover:underline md:text-center"
        >
          Learn more about AppleCare+
        </Link>
      </p>
    </div>
  );
}
