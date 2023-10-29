import { StarIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  icon: React.ReactNode;
};

export type HeaderLink = {
  href: string;
  text: string;
};

export type FeatureContent = {
  title: string;
  description: string;
};

export type PricingPlan = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const features: Feature[] = [
  {
    icon: <StarIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
    title: "Feature One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    icon: <StarIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
    title: "Feature Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    icon: <StarIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
    title: "Feature Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    name: "John Doe",
    title: "CEO of TechCorp",
    icon: <UserCircleIcon className="h-12 w-12 text-blue-500 mr-4" />,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    name: "Jane Smith",
    title: "Founder of InnovateHub",
    icon: <UserCircleIcon className="h-12 w-12 text-blue-500 mr-4" />,
  },
];

export const links: HeaderLink[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/features",
    text: "Features",
  },
  {
    href: "/pricing",
    text: "Pricing",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export const featureContent: FeatureContent[] = [
  {
    title: "Invisible Interface",
    description:
      "Our UI is so minimalist, you can't even see it. Ultimate distraction-free experience!",
  },
  {
    title: "Quantum Speed",
    description:
      "Why wait for things to load? Our product is so fast, it might break space-time!",
  },
  {
    title: "Telepathic Support",
    description:
      "Got a problem? Our support team already knows and is fixing it. Or maybe just thinking about it.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$9.99/mo",
    features: ["Feature 1", "Feature 2"],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    price: "$29.99/mo",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    buttonText: "Get Started",
  },
  {
    title: "Entreprise",
    price: "Custom",
    features: [
      "All Pro Features",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    buttonText: "Contact Us",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How does the billing work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
];
