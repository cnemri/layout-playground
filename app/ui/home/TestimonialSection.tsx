import React from "react";
import { Testimonial } from "@/app/lib/data/data";
import { testimonials } from "@/app/lib/data/data";

type Props = {};

const TestimonialItem = ({ quote, name, title, icon }: Testimonial) => {
  return (
    <div className="testimonial p-6 bg-white rounded-xl">
      <p>&quot;{quote}&quot;</p>
      <div className="mt-4 flex items-center justify-end">
        {icon}
        <div className="mr-20">
          <h4 className="font-bold">{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = (props: Props) => {
  return (
    <section className="container mx-auto mt-20 p-6 bg-blue-50 rounded-xl">
      <h2 className="text-3xl font-bold mb-10 text-center">
        What People Are Saying
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.name} {...testimonial} />
        ))}
      </ul>
    </section>
  );
};

export default TestimonialSection;
