import { Chip, Memory, Processor, Storage } from "@/interface/AppleInterface";

export const formatPricing = (currency: string, price: number): string => {
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  const isNegative = price < 0;

  const formattedPrice = Math.abs(price).toFixed(2);
  const [whole, decimal] = formattedPrice.split(".");

  const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedCurrency = isNegative ? `-${currency}` : currency;

  return `${formattedCurrency} ${formattedWhole}.${decimal}`;
};

export const formatPricingInstalment = (
  currency: string,
  price: number,
  duration: number,
): string => {
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  const isNegative = price < 0;

  const formattedPrice = Math.abs(price / 24).toFixed(2);
  const [whole, decimal] = formattedPrice.split(".");

  const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedCurrency = isNegative ? `-${currency}` : currency;

  return `${formattedCurrency} ${formattedWhole}.${decimal}/mo. for ${duration} mo.*`;
};

export const formatPricingOption = (
  currency: string,
  price: number,
): string => {
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  const isNegative = price < 0;

  const formattedPrice = Math.abs(price).toFixed(2);
  const [whole, decimal] = formattedPrice.split(".");

  const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedCurrency = isNegative ? `- ${currency}` : `+ ${currency}`;

  return `${formattedCurrency} ${formattedWhole}.${decimal}`;
};

export const formatProductDescription = (
  chip: Chip,
  cpu: Processor,
  gpu: Processor,
  neural: string | "" = "16-core Neural Engine",
): string => {
  let formatString = `Apple ${chip.name && chip.name} chip with ${cpu.label && cpu.label}, ${gpu.label && gpu.label} and ${neural && neural}`;

  return formatString;
};

export const formatProductMemory = (memory: Memory): string => {
  let formatString = `${memory.slug && memory.slug.toUpperCase()} unified memory`;

  return formatString;
};

export const formatProductStorage = (storage: Storage): string => {
  let formatString = `${storage.slug && storage.slug.toUpperCase()} SSD storage`;

  return formatString;
};

export const formatProductKeyboard = (keyboard: string): string => {
  let formatString = `Backlit ${keyboard}`;

  return formatString;
};

export const formatColorIcon = (slug: string, productType: string): string => {
  let url = "";

  if (productType === "14-inch") {
    switch (slug) {
      case "space-grey":
        url =
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1697913361217";
        break;
      case "space-black":
        url =
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-m3-max-pro-spaceblack-cto-hero-202310_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1697913361051";
        break;
      case "silver":
        url =
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-silver-cto-hero-202310_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1697913361277";
        break;
      default:
        break;
    }
  }

  return url;
};

export const formatChipIcon = (slug: string, productType: string) => {
  let url = "";

  if (productType === "14-inch") {
    switch (slug) {
      case "m3":
        url =
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-icon-202310?wid=102&hei=102&fmt=png-alpha&.v=1697039562647";
        break;
      case "m3-pro":
        url =
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=102&hei=102&fmt=png-alpha&.v=1697039562659";
        break;
      case "m3-max":
        url =
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-max-icon-202310?wid=102&hei=102&fmt=png-alpha&.v=1697039562691";
        break;
      default:
        break;
    }
  }

  return url;
};
