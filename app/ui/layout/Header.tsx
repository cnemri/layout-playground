import React from "react";
import NavLinks from "./NavLinks";
import { links } from "@/app/lib/data/data";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-6 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl">YourLogo</div>
        <NavLinks links={links} />
      </div>
    </header>
  );
};

export default Header;
