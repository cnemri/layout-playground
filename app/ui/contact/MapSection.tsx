import React from "react";

type Props = {};

const MapSection = (props: Props) => {
  return (
    <section className="container mx-auto my-20 p-6">
      {/* This is a placeholder. You would replace it with an actual embed code from a map service like Google Maps. */}
      <div className="bg-gray-300 rounded-md h-64">
        <p className="text-center py-28">Embedded Map Here</p>
      </div>
    </section>
  );
};

export default MapSection;
