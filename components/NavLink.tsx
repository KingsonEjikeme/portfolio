import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  return (
    <li className={className}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavLink;
