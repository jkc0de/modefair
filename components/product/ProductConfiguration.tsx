"use client";

import { Configurations } from "@/interface/AppleInterface";

import ConfigurationOptionSelect from "./ConfigurationOptionSelect";
import ConfigurationOptionRadio from "./ConfigurationOptionRadio";

const langOptions = [
  {
    label: "Backlit Magic Keyboard with Touch ID - US English",
    slug: "Backlit Magic Keyboard with Touch ID - US English",
  },
  {
    label: "Backlit Magic Keyboard with Touch ID - Chinese (Pinyin)",
    slug: "Backlit Magic Keyboard with Touch ID - Chinese (Pinyin)",
  },
  {
    label: "Backlit Magic Keyboard with Touch ID - Chinese (Zhuyin)",
    slug: "Backlit Magic Keyboard with Touch ID - Chinese (Zhuyin)",
  },
  {
    label: "Backlit Magic Keyboard with Touch ID - Chinese (Arabic)",
    slug: "Backlit Magic Keyboard with Touch ID - Chinese (Arabic)",
  },
  {
    label: "Backlit Magic Keyboard with Touch ID - Japanese",
    slug: "Backlit Magic Keyboard with Touch ID - Japanese",
  },
];

export default function ProductConfiguration({
  data,
}: {
  data: Configurations;
}) {
  return (
    <div>
      {data.chip && (
        <ConfigurationOptionRadio
          optionName="chip"
          title="Chip (Processor)"
          buttonLabel="Which chip is right for you?"
          options={data.chip}
        />
      )}

      {data.memory && (
        <ConfigurationOptionRadio
          optionName="memory"
          title="Memory"
          buttonLabel="How much memory is right for you?"
          options={data.memory}
        />
      )}

      {data.storage && (
        <ConfigurationOptionRadio
          optionName="storage"
          title="Storage"
          buttonLabel="How much storage is right for you?"
          options={data.storage}
        />
      )}

      {data.power && (
        <ConfigurationOptionRadio
          optionName="power"
          title="Power Adapter"
          buttonLabel="Which power adapter is right for you?"
          options={data.power}
        />
      )}

      {langOptions.length > 0 && (
        <ConfigurationOptionSelect
          title="Keyboard Language"
          buttonLabel="Learn more"
          options={langOptions}
        />
      )}
    </div>
  );
}
