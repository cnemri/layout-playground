import React from "react";

type Props = {};

const ContactDetails = (props: Props) => {
  return (
    <div className="mx-auto md:mx-0">
      <h3 className="text-xl font-bold mb-4">Contact Details</h3>
      <ul className="space-y-3">
        <li>
          <strong>Address:</strong>
          <br />
          123 Main St, Springfield
        </li>
        <li>
          <strong>Phone:</strong>
          <br />
          (123) 456-7890
        </li>
        <li>
          <strong>Email:</strong>
          <br />
          contact@yourdomain.com
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
