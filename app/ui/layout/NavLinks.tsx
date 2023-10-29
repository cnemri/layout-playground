"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavLinkProps = {
  href: string;
  text: string;
};

type NavLinksProps = {
  links: NavLinkProps[];
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx("mx-4 hover:bg-gray-50 w-full text-center py-4", {
        "text-blue-500 hover:text-blue-600": isActive,
        "text-gray-500 hover:text-gray-700": !isActive,
      })}
    >
      {text}
    </Link>
  );
};

const NavLinks = ({ links }: NavLinksProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);
  return (
    <>
      <nav className="hidden sm:block">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href} text={link.text} />
        ))}
      </nav>
      <button className="sm:hidden text-gray-500" onClick={toggleMobileMenu}>
        {showMobileMenu ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>

      {showMobileMenu && (
        <nav className="absolute top-10 right-2 shadow-xl rounded-lg w-72 sm:hidden bg-white flex flex-col space-y-1 py-2 items-center justify-center">
          {links.map((link, index) => (
            <NavLink key={index} href={link.href} text={link.text} />
          ))}
        </nav>
      )}
    </>
  );
};

export default NavLinks;
