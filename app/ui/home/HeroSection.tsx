import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="container mx-auto mt-20 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Unleash Your Productivity</h1>
      <p className="text-xl text-gray-700 mb-8">
        With our tools, you&apos;ll achieve more in less time. Get started
        today!
      </p>
      <Link href="signup">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center">
          Start Now{" "}
          <span>
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
