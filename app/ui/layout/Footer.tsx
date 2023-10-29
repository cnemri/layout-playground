import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-auto bg-white p-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2023 YourCompany. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Facebook
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
