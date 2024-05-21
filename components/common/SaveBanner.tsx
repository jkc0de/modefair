"use client";

import Link from "next/link";

export default function SaveBanner() {
  return (
    <div className="text-start text-sm leading-[1.4285914286] -tracking-[.016em]">
      <div className="pb-2">
        <h3 className="font-semibold">
          <span>Need a moment?</span>
        </h3>
        <div className="me-5">
          Keep all your selections by saving this device to Your Saves, then
          come back anytime and pick up right where you left off.
        </div>
      </div>
      <Link
        href="#"
        className="-ms-[5px] flex w-full items-center text-start text-primary"
      >
        <span className="">
          <svg
            width="21"
            height="21"
            role="img"
            aria-hidden="true"
            color="#0066cc"
          >
            <path fill="none" d="M0 0h21v21H0z"></path>
            <path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z"></path>
          </svg>
        </span>
        <span>Save for later</span>
      </Link>
    </div>
  );
}
