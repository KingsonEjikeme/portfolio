import Link from "next/link";
import React from "react";
import { navLinks } from "@/public/constants";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
      <Link href={"/"}>
        <h5 className="text-purple text-xl font-semibold">John Doe.</h5>
      </Link>
      <nav>
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.url}
              label={link.label}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
