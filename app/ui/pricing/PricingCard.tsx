import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PricingPlan } from "@/app/lib/data/data";

const PricingCard = ({ title, price, features, buttonText }: PricingPlan) => {
  return (
    <div className="pricing-card p-6 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="price text-4xl mb-6">{price}</div>
      <ul className="space-y-4">
        {features.map((feature) => (
          <li className="flex items-center" key={feature}>
            <CheckIcon className="h-5 w-5 mr-2 text-green-500" /> {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
