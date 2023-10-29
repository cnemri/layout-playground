"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { faqItems, FAQItem } from "@/app/lib/data/data";

type Props = {};

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggle,
}: FAQItem & { isOpen: boolean; toggle: () => void }) => {
  return (
    <li className="border-b border-gray-200">
      <button
        className="w-full text-left font-semibold mb-2 focus:outline-none flex justify-between items-center"
        onClick={toggle}
      >
        <span>{question}</span>
        <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
      </button>
      <p
        className={clsx(
          "mt-2",
          "transition-max-height duration-300 ease-in-out",
          { "max-h-0 overflow-hidden": !isOpen },
          { "max-h-full": isOpen }
        )}
      >
        {answer}
      </p>
    </li>
  );
};

const FAQ = (props: Props) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQItem = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="container mx-auto mt-20 p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <ul className="space-y-6 max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem
            key={item.question}
            {...item}
            isOpen={openIndexes.includes(index)}
            toggle={() => toggleFAQItem(index)}
          />
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
