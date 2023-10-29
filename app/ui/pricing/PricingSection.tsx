import React from "react";
import { pricingPlans } from "@/app/lib/data/data";
import PricingCard from "./PricingCard";

type Props = {};

const PricingSection = (props: Props) => {
  return (
    <section className="container mx-auto mt-20 p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Choose Your Plan</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </ul>
    </section>
  );
};

export default PricingSection;
