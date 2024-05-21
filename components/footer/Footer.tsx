"use client";

import Link from "next/link";
import LocalFooter from "./LocalFooter";
import MiniFooter from "./MiniFooter";
import Accordion from "../ui/Accordion";
import {
  FOOTER_INITIAL_STATE,
  FooterContext,
  FooterReducer,
} from "@/context/FooterContext";
import { useEffect, useReducer } from "react";

const footerLinks = {
  "shop-and-learn": {
    title: "Shop and Learn",
    links: [
      { title: "Store", link: "#" },
      { title: "Mac", link: "#" },
      { title: "iPad", link: "#" },
      { title: "iPhone", link: "#" },
      { title: "Watch", link: "#" },
      { title: "AirPods", link: "#" },
      { title: "TV & Home", link: "#" },
      { title: "AirTag", link: "#" },
      { title: "Accessories", link: "#" },
      { title: "Gift Cards", link: "#" },
    ],
  },
  "apple-wallet": {
    title: "Apple Wallet",
    links: [
      { title: "Wallet", link: "#" },
      { title: "Apple Pay", link: "#" },
    ],
  },
  account: {
    title: "Account",
    links: [
      { title: "Manage Your Apple ID", link: "#" },
      { title: "Apple Store Account", link: "#" },
      { title: "iCloud.com", link: "#" },
    ],
  },
  entertainment: {
    title: "Entertainment",
    links: [
      { title: "Apple One", link: "#" },
      { title: "Apple TV+", link: "#" },
      { title: "Apple Music", link: "#" },
      { title: "Apple Arcade", link: "#" },
      { title: "Apple Fitness+", link: "#" },
      { title: "Apple Podcasts", link: "#" },
      { title: "Apple Books", link: "#" },
      { title: "App Store", link: "#" },
    ],
  },
  "apple-store": {
    title: "Apple Store",
    links: [
      { title: "Apple Store App", link: "#" },
      { title: "Financing", link: "#" },
      { title: "Apple Trade In", link: "#" },
      { title: "Order Status", link: "#" },
      { title: "Shopping Help", link: "#" },
    ],
  },
  "for-business": {
    title: "For Business",
    links: [
      { title: "Apple and Business", link: "#" },
      { title: "Shop for Business", link: "#" },
    ],
  },
  "for-education": {
    title: "For Education",
    links: [
      { title: "Apple and Education", link: "#" },
      { title: "Shop for University", link: "#" },
    ],
  },
  "for-healthcare": {
    title: "For Healthcare",
    links: [
      { title: "Apple in Healthcare", link: "#" },
      { title: "Health on Apple Watch", link: "#" },
    ],
  },
  "apple-values": {
    title: "Apple Values",
    links: [
      { title: "Accessibility", link: "#" },
      { title: "Education", link: "#" },
      { title: "Environment", link: "#" },
      { title: "Privacy", link: "#" },
      { title: "Supplier Responsibility", link: "#" },
    ],
  },
  "about-apple": {
    title: "About Apple",
    links: [
      { title: "Newsroom", link: "#" },
      { title: "Apple Leadership", link: "#" },
      { title: "Career Opportunities", link: "#" },
      { title: "Investors", link: "#" },
      { title: "Ethics & Compliance", link: "#" },
      { title: "Events", link: "#" },
      { title: "Contact Apple", link: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative mx-auto w-full bg-[#f5f5f7] px-[22px] text-xs leading-[1.3333733333] -tracking-[.01em] lg:min-w-[1024px]">
      <div className="mx-auto w-full max-w-[980px]">
        <LocalFooter />
      </div>
      {/* <nav className="mx-auto max-w-[980px] border-b py-[17px] md:border-0">
        breadcrumbs
      </nav> */}
      <nav className="mx-auto grid max-w-[980px] grid-cols-1 md:grid-cols-5">
        {/* Mobile */}

        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["shop-and-learn"].title,
              description:
                footerLinks?.["shop-and-learn"]?.links?.length > 0 &&
                footerLinks?.["shop-and-learn"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>

        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["apple-wallet"].title,
              description:
                footerLinks?.["apple-wallet"]?.links?.length > 0 &&
                footerLinks?.["apple-wallet"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>

        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["account"].title,
              description:
                footerLinks?.["account"]?.links?.length > 0 &&
                footerLinks?.["account"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>

        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["entertainment"].title,
              description:
                footerLinks?.["entertainment"]?.links?.length > 0 &&
                footerLinks?.["entertainment"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>
        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["apple-store"].title,
              description:
                footerLinks?.["apple-store"]?.links?.length > 0 &&
                footerLinks?.["apple-store"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>
        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["for-business"].title,
              description:
                footerLinks?.["for-business"]?.links?.length > 0 &&
                footerLinks?.["for-business"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>
        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["for-education"].title,
              description:
                footerLinks?.["for-education"]?.links?.length > 0 &&
                footerLinks?.["for-education"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>
        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["for-healthcare"].title,
              description:
                footerLinks?.["for-healthcare"]?.links?.length > 0 &&
                footerLinks?.["for-healthcare"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>
        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["apple-values"].title,
              description:
                footerLinks?.["apple-values"]?.links?.length > 0 &&
                footerLinks?.["apple-values"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>
        <div className="w-full border-b py-1.5 md:hidden">
          <Accordion
            item={{
              title: footerLinks?.["about-apple"].title,
              description:
                footerLinks?.["about-apple"]?.links?.length > 0 &&
                footerLinks?.["about-apple"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px] list-none pl-3" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                )),
            }}
          />
        </div>

        {/* Desktop */}
        <div className="hidden basis-1/4 flex-col gap-6 md:flex">
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["shop-and-learn"].title}
            </h3>
            {footerLinks?.["shop-and-learn"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["shop-and-learn"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008F] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["apple-wallet"].title}
            </h3>
            {footerLinks?.["apple-wallet"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["apple-wallet"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </div>
        <div className="hidden basis-1/4 flex-col gap-6 md:flex">
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["account"].title}
            </h3>
            {footerLinks?.["account"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["account"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["entertainment"].title}
            </h3>
            {footerLinks?.["entertainment"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["entertainment"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </div>
        <div className="hidden basis-1/4 flex-col gap-6 md:flex">
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["apple-store"].title}
            </h3>
            {footerLinks?.["apple-store"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["apple-store"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </div>
        <div className="hidden basis-1/4 flex-col gap-6 md:flex">
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["for-business"].title}
            </h3>
            {footerLinks?.["for-business"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["for-business"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["for-education"].title}
            </h3>
            {footerLinks?.["for-education"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["for-education"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["for-healthcare"].title}
            </h3>
            {footerLinks?.["for-healthcare"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["for-healthcare"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </div>
        <div className="hidden basis-1/4 flex-col gap-6 md:flex">
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["apple-values"].title}
            </h3>
            {footerLinks?.["apple-values"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["apple-values"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
          <span>
            <h3 className="mb-[9.6px] font-semibold text-[#0000008B]">
              {footerLinks?.["about-apple"].title}
            </h3>
            {footerLinks?.["about-apple"]?.links?.length > 0 && (
              <ul className=" me-5">
                {footerLinks?.["about-apple"]?.links?.map((link, index) => (
                  <li className="mb-[9.6px]" key={index}>
                    <Link
                      href={link.link}
                      className="text-[#0000008B] hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </span>
        </div>
      </nav>
      <div className="mx-auto w-full max-w-[980px]">
        <MiniFooter />
      </div>
    </footer>
  );
}
