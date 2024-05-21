import { Dispatch, SetStateAction } from "react";

export interface BundleContextType {
  tab: [string, Dispatch<SetStateAction<string>>];
  chip: [string, Dispatch<SetStateAction<string>>];
}

export interface OptionProps {
  name: string;
  slug: string;
}

export interface TabsProps {
  options: OptionProps[];
  selectedTab: string;
  setSelectedTab: (payload: string) => void;
}

export interface PillsProps {
  options: OptionProps[];
  selectedPill: string;
  setSelectedPill: (payload: string) => void;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  chips: Chip[];
  included: IncludedItem[];
  decision: DecisionItem[];
  models: Model[];
}

export interface Chip {
  name: string;
  slug: string;
}

export interface IncludedItem {
  name: string;
  image: string;
}

export interface DecisionItem {
  name: string;
  image: string;
  description: string;
  features: string[];
}

export interface Power {
  label: string;
  slug: string;
}

export interface Model {
  id: number;
  colors: Color[];
  chip: Chip;
  cpu: Processor;
  gpu: Processor;
  chipDetails: Processor;
  memory: Memory;
  storage: Storage;
  power: Power;
  specs: Specs;
  pricing: Pricing;
  configurations?: Configurations;
}

export interface ExactModel {
  id: number;
  color?: Color;
  chip: Chip;
  cpu: Processor;
  gpu: Processor;
  chipDetails: Processor;
  memory: Memory;
  storage: Storage;
  power: Power;
  specs: Specs;
  pricing: Pricing;
  configurations?: Configurations;
}

export interface ConfigurationOption {
  footnote: string;
  configs: Configs[];
}

export interface Configs {
  label: string;
  slug: string;
  priceAddOn: number;
  requireChip?: string[] | null;
  includeChip?: string[] | null;
}

export interface Configurations {
  chip?: ConfigurationOption;
  memory: ConfigurationOption;
  storage: ConfigurationOption;
  power?: ConfigurationOption;
}

export interface Color {
  name: string;
  slug: string;
  image: string;
  gallery?: {
    heroImage: string;
  };
  productSlug: string;
}

export interface Processor {
  label: string;
  slug: string;
}

export interface Memory {
  label: string;
  slug: string;
}

export interface Storage {
  label: string;
  slug: string;
}

export interface Specs {
  display: string;
  port: string;
  keyboard: string;
  trackpad: string;
}

export interface Pricing {
  price: number;
  currency: string;
  instalment: string;
}
