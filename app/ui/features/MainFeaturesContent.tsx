import React from "react";
import { featureContent } from "@/app/lib/data/data";

type MainFeaturesContentProps = {};

type SingleFeatureProps = {
  title: string;
  description: string;
};

const SingleFeature = ({ title, description }: SingleFeatureProps) => {
  return (
    <li className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <p>{description}</p>
    </li>
  );
};

const MainFeaturesContent = (props: MainFeaturesContentProps) => {
  return (
    <section className="container mx-auto mt-20 text-center p-6">
      <h1 className="text-4xl font-bold mb-8">Our Top-Notch Features!</h1>
      <p className="text-xl text-gray-700 mb-8">
        We&apos;d love to share our incredible features with you... but
        there&apos;s a tiny catch.
      </p>

      <ul className="grid md:grid-cols-3 gap-8">
        {featureContent.map((feature) => (
          <SingleFeature
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ul>

      <div className="mt-16">
        <p className="text-xl text-gray-700 mb-8">
          Okay, jokes aside... our product is still in the oven baking to
          perfection. We&apos;ll share the real goodies soon!
        </p>
      </div>
    </section>
  );
};

export default MainFeaturesContent;
