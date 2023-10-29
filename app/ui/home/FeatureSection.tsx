import React from "react";
import { Feature } from "@/app/lib/data/data";
import { features } from "@/app/lib/data/data";

type Props = {};

const FeatureItem = ({ icon, title, description }: Feature) => {
  return (
    <li className="feature">
      {icon}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </li>
  );
};

const FeatureSection = (props: Props) => {
  return (
    <section className="container mx-auto mt-20 p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeatureSection;
