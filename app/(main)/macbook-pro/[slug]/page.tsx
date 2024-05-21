"use client";

import { useContext, useEffect, useReducer, useState } from "react";
import Image from "next/image";

import { ExactModel, Model } from "@/interface/AppleInterface";

import { TradeInBannerTwo } from "@/components/common/TradeInBanner";
import ProductConfiguration from "@/components/product/ProductConfiguration";
import SaveBanner from "@/components/common/SaveBanner";
import { ButtonLink } from "@/components/ui/Button";
import FreeDeliveryAndReturnsBanner from "@/components/common/FreeDeliveryAndReturnsBanner";
import OnlineChat from "@/components/common/OnlineChatBanner";
import Billboard from "@/components/common/Billboard";
import ProductDetails from "@/components/product/ProductDetails";
import ProductSummary from "@/components/product/ProductSummary";

import ProductData from "@/data/AppleProducts.json";
import {
  PRODUCT_INITIAL_STATE,
  ProductContext,
  ProductReducer,
} from "@/context/ProductContext";
import { formatProductKeyboard } from "@/utility/format";
import { FooterContext } from "@/context/FooterContext";

export default function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const footer = useContext(FooterContext);

  useEffect(() => {
    footer.dispatch({
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
          <p></p>
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
          <p></p>
          <ol className="flex list-decimal flex-col gap-1">
            <li>
              1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted
              capacity less.
            </li>
            <li>
              The displays on the 14-inch and 16-inch MacBook Pro have rounded
              corners at the top. When measured as a standard rectangular shape,
              the screens are 14.2 inches and 16.2 inches diagonally (actual
              viewable area is less).
            </li>
            <li>
              Testing conducted by Apple in September and October 2023 using
              pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
              12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final Cut Pro
              10.6.9 tested using a 1-minute picture-in-picture project with
              multiple streams of Apple ProRes 422 video at 8192x4320 resolution
              and 30 frames per second, as well as a 1-minute picture-in-picture
              project with multiple streams of Apple ProRes 422 video at
              3840x2160 resolution and 29.97 frames per second. Performance
              tests are conducted using specific computer systems and reflect
              the approximate performance of MacBook Pro.
            </li>
            <li>
              Testing conducted by Apple in September and October 2023 using
              pre-production 14-inch MacBook Pro systems with Apple M3 Max,
              16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final Cut Pro
              10.6.9 tested using a 1-minute picture-in-picture project with
              multiple streams of Apple ProRes 422 video at 8192x4320 resolution
              and 30 frames per second, as well as a 1-minute picture-in-picture
              project with multiple streams of Apple ProRes 422 video at
              3840x2160 resolution and 29.97 frames per second. Performance
              tests are conducted using specific computer systems and reflect
              the approximate performance of MacBook Pro.
            </li>
            <li>
              Testing conducted by Apple in September and October 2023 using
              pre-production 16-inch MacBook Pro systems with Apple M3 Pro,
              12-core CPU, 18-core GPU, 36GB of RAM and 512GB SSD, and
              pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
              12-core CPU, 18-core GPU, 18GB of RAM and 1TB SSD. 16-inch MacBook
              Pro systems tested with Apple 140W USB-C Power Adapter (Model
              A2452), and 14-inch MacBook Pro systems tested with Apple 96W
              USB-C Power Adapter (Model A2166), both with USB-C to MagSafe 3
              Cable (Model A2363). Fast-charge testing conducted with drained
              MacBook Pro units. Charge time varies with settings and
              environmental factors; actual results will vary.
            </li>
            <li>
              Testing conducted by Apple in September and October 2023 using
              pre-production 16-inch MacBook Pro systems with Apple M3 Pro,
              12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final Cut Pro
              10.6.9 tested using a 1-minute picture-in-picture project with
              multiple streams of Apple ProRes 422 video at 8192x4320 resolution
              and 30 frames per second, as well as a 1-minute picture-in-picture
              project with multiple streams of Apple ProRes 422 video at
              3840x2160 resolution and 29.97 frames per second. Performance
              tests are conducted using specific computer systems and reflect
              the approximate performance of MacBook Pro.
            </li>
            <li>
              Testing conducted by Apple in September and October 2023 using
              pre-production 16-inch MacBook Pro systems with Apple M3 Max,
              16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final Cut Pro
              10.6.9 tested using a 1-minute picture-in-picture project with
              multiple streams of Apple ProRes 422 video at 8192x4320 resolution
              and 30 frames per second, as well as a 1-minute picture-in-picture
              project with multiple streams of Apple ProRes 422 video at
              3840x2160 resolution and 29.97 frames per second. Performance
              tests are conducted using specific computer systems and reflect
              the approximate performance of MacBook Pro.
            </li>
          </ol>
          <p>
            *** Apple TV+ offer available to new and qualified returning
            subscribers only. RM 29.90/month after free trial. Only one offer
            per Apple ID and only one offer per family if you’re part of a
            Family Sharing group, regardless of the number of devices that you
            or your family purchase. This offer is not available if you or your
            Family have previously accepted an Apple TV+ three-months-free or
            one-year-free offer. Offer valid for three months after eligible
            device is activated. Plan automatically renews until cancelled.
            Restrictions and other{" "}
            <a href="https://www.apple.com/my/promo">terms</a> apply.
          </p>
          <p>
            ^ New subscribers only. RM 29.90/month after free trial. Plan
            automatically renews after trial until cancelled.
          </p>
        </div>
      ),
    });
  }, []);

  const [state, dispatch] = useReducer(ProductReducer, PRODUCT_INITIAL_STATE);
  const [updatedProductData, setUpdatedProductData] =
    useState<ExactModel | null>(null);

  useEffect(() => {
    const product =
      ProductData?.products?.find(
        (product) => product.slug === params.slug.slice(0, 7),
      ) ?? null;

    if (product) {
      const model: Model | undefined = product.models.find((model) =>
        model.colors.some((color) => color.productSlug === params.slug),
      );

      if (model) {
        const exactColor = model.colors.find(
          (color) => color.productSlug === params.slug,
        );

        setUpdatedProductData({
          id: model.id,
          chip: model.chip,
          color: exactColor ?? undefined,
          cpu: model.cpu,
          gpu: model.gpu,
          chipDetails: model.chipDetails,
          memory: model.memory,
          storage: model.storage,
          power: model.power,
          specs: model.specs,
          pricing: model.pricing,
          configurations: model.configurations,
        });

        if (model.pricing.price) {
          dispatch({
            type: "CHANGE_STATE",
            payload: {
              field: "price",
              value: model.pricing.price,
            },
          });
        }

        if (model.specs["keyboard"]) {
          dispatch({
            type: "CHANGE_STATE",
            payload: {
              field: "keyboard",
              value: `${formatProductKeyboard(model.specs["keyboard"])} - US English`,
            },
          });
        }

        if (model.chipDetails) {
          const found =
            model.configurations &&
            model.configurations.chip?.configs &&
            model.configurations.chip?.configs.find(
              (config) => config.slug === model.chipDetails.slug,
            );

          if (found) {
            dispatch({
              type: "CHANGE_STATE",
              payload: {
                field: "chip",
                value: found,
              },
            });
          }
        }

        if (model.memory) {
          const found =
            model.configurations &&
            model.configurations.memory?.configs &&
            model.configurations.memory?.configs.find(
              (config) => config.slug === model.memory.slug,
            );

          if (found) {
            dispatch({
              type: "CHANGE_STATE",
              payload: {
                field: "memory",
                value: found,
              },
            });
          }
        }

        if (model.storage) {
          const found =
            model.configurations &&
            model.configurations.storage?.configs &&
            model.configurations.storage?.configs.find(
              (config) => config.slug === model.storage.slug,
            );

          if (found) {
            dispatch({
              type: "CHANGE_STATE",
              payload: {
                field: "storage",
                value: found,
              },
            });
          }
        }

        if (model.power) {
          const found =
            model.configurations &&
            model.configurations.power &&
            model.configurations.power.configs &&
            model.configurations.power?.configs.find(
              (config) => config.slug === model.power.slug,
            );

          if (found) {
            dispatch({
              type: "CHANGE_STATE",
              payload: {
                field: "power",
                value: found,
              },
            });
          }
        }
      }
    }
  }, [params.slug]);

  return (
    <>
      {updatedProductData && (
        <ProductContext.Provider value={{ state, dispatch }}>
          <div className="relative">
            <ProductSummary />
          </div>
          <div className="mx-auto flex w-[87.5%] flex-col flex-wrap md:mt-[52px] md:flex-row lg:w-[980px]">
            <div className="flex-end flex basis-1/2 flex-col  pt-[43px] text-[32px] font-semibold leading-[1.25] tracking-[0.004em] md:ms-[50%] md:pt-[19px]">
              Customise your 14-inch MacBook Pro -{" "}
              {updatedProductData.color?.name}
            </div>
            <div className="relative w-full text-center md:-top-[63px] md:max-w-[50%] md:basis-1/2">
              <div className="mx-auto mb-[50px] mt-[22px] text-center md:sticky md:top-0 md:me-[60px] md:mt-0">
                <Image
                  src={updatedProductData.color?.gallery?.heroImage || ""}
                  height={0}
                  width={0}
                  sizes="100"
                  alt={updatedProductData.color?.name || ""}
                  style={{ width: "410px", height: "auto" }}
                  className="mx-auto hidden ps-[10px] md:block"
                />

                <Image
                  src={updatedProductData.color?.gallery?.heroImage || ""}
                  height={0}
                  width={0}
                  sizes="100"
                  alt={updatedProductData.color?.name || ""}
                  style={{ width: "242px", height: "auto" }}
                  className="mx-auto block md:hidden"
                />
                <div className="mb-[35px] w-full max-w-[490px] pt-[22px] text-center">
                  <ButtonLink
                    type="button"
                    label="View gallery"
                    textAlign="text-center"
                  />
                </div>
                <div className="hidden md:block">
                  <FreeDeliveryAndReturnsBanner />
                  <OnlineChat />
                </div>
              </div>
            </div>
            <div className="flex-end flex h-auto w-full flex-col pb-[14px] md:w-[490px] md:max-w-[50%] md:basis-1/2">
              <ProductDetails data={updatedProductData} />
              <div>
                <TradeInBannerTwo />
              </div>

              {updatedProductData?.configurations && (
                <div>
                  <ProductConfiguration
                    data={updatedProductData.configurations}
                  />
                </div>
              )}

              <div className="mt-[14px] bg-[#fafafc] p-[30px]">
                <SaveBanner />
              </div>
              <div className="mt-3 block md:hidden">
                <OnlineChat />
                <FreeDeliveryAndReturnsBanner />
              </div>
            </div>
          </div>
        </ProductContext.Provider>
      )}
      <div>
        <Billboard />
      </div>
    </>
  );
}
