"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

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
      className={clsx("mx-4", {
        "text-blue-500 hover:text-blue-600": isActive,
        "text-gray-500 hover:text-gray-700": !isActive,
      })}
    >
      {text}
    </Link>
  );
};

const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <nav>
      {links.map((link, index) => (
        <NavLink key={index} href={link.href} text={link.text} />
      ))}
    </nav>
  );
};

export default NavLinks;
