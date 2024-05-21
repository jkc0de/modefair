"use client";

import { useState } from "react";

interface AccordionItem {
  title: React.ReactNode | string;
  description?: React.ReactNode | string;
  defaultOpen?: boolean;
}

const Accordion = ({ item }: { item: AccordionItem }) => {
  const { title, description, defaultOpen } = item;
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen ?? false);

  return (
    <div className="flex w-full flex-col gap-2 ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between"
      >
        <span className="text-[#0000008F]">{title}</span>
        <div className="material-symbols-outlined">
          {isOpen ? "expand_less" : "expand_more"}
        </div>
      </div>

      {isOpen && description && <div className="">{description}</div>}
    </div>
  );
};

export default Accordion;
