"use client";

import BundleSelection from "@/components/bundle/BundleSelection";
import AppleCare from "@/components/common/AppleCare";
import CompareModels from "@/components/common/CompareModels";
import { FooterContext } from "@/context/FooterContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { state, dispatch } = useContext(FooterContext);

  useEffect(() => {
    dispatch({
      type: "CHANGE_FOOTER",
      payload: (
        <div role="list" aria-label="footnotes" className="flex flex-col gap-1">
          <p>
            * Monthly pricing is after purchase using credit card interest at 0%
            p.a. over a nine-month tenure. Monthly pricing is rounded to the
            nearest ringgit and displayed for each product added in the order.
            Exact pricing will be for the whole order and provided by your bank,
            subject to your bank’s terms and conditions.
          </p>
          <p>
            ◊◊{" "}
            <strong>
              Terms & Conditions of 0% interest for 6-, 12- and 24-month
              instalment payment plans
            </strong>
          </p>
          <p>
            0% interest instalment payment plans are available to qualified
            Malaysia residents and provided by Affin, Ambank, CIMB, Hong Leong,
            Maybank, OCBC and RHB. To qualify for the 0% interest for 6-, 12- or
            24-month instalment offers, your purchase minimum value must be MYR
            2,000 or more in a single transaction. All purchases on 0% interest
            instalment plans are subject to approval by your credit card issuer.
            Refer to your credit card issuer’s website for conditions, fees and
            charges.
          </p>
          <p>
            Instalment offers are only available to individual customers using
            consumer credit cards. Apple Employee EPP orders, Education Store
            orders, business purchases and institutional purchases are not
            eligible for this offer. Only Visa and Mastercard credit cards are
            eligible for this offer. If your instalment order is not approved by
            your credit card issuer, we will not be informed of the reason.
            Please contact your credit card issuer for further information.
            Purchases will be billed to your account upon order placement. Offer
            is available on advertised or ticketed price.
          </p>
          <p>The information is current as of 23 April 2024.</p>
          <p>
            ** Trade-in service is provided by Apple’s trade-in partners.
            Trade-in value quotes are estimated only and actual values may be
            lower than the estimation. Trade-in values vary based on the
            condition, year and model of your trade-in device. Not all devices
            are eligible for credit. You must be at least the age of majority to
            be eligible to trade in for credit. Trade-in value may be applied
            towards qualifying new device purchase. Actual value awarded is
            based on receipt of a qualifying device matching the description
            provided when the estimate was made. Apple’s trade-in partners
            reserve the right to refuse, cancel or limit quantity of any
            trade-in transaction for any reason. More details are available from
            Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply. For recycling
            eligible equipment Terms and restrictions may apply.
          </p>
          <p>
            1. 1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual
            formatted capacity less.
          </p>
          <p>
            2. The displays on the 14-inch and 16-inch MacBook Pro have rounded
            corners at the top. When measured as a standard rectangular shape,
            the screens are 14.2 inches and 16.2 inches diagonally (actual
            viewable area is less).
          </p>

          <p>
            We use your location to show you delivery options faster. We found
            your location using your IP address or because you entered it during
            a previous visit to Apple.
          </p>
        </div>
      ),
    });
  }, []);

  return (
    <div className="">
      <BundleSelection />
      <div className="pt-5">
        <CompareModels />
      </div>
      <AppleCare />
    </div>
  );
}
