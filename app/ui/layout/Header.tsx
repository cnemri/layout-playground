import React from "react";
import NavLinks from "./NavLinks";
import { links } from "@/app/lib/data/data";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-6 bg-white shadow-md">
      <div className="relative container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">YourLogo</Link>
        </div>
        <NavLinks links={links} />
      </div>
    </header>
  );
};

export default Header;
