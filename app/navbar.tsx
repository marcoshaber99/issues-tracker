"use client";

import Link from "next/link";
import React from "react";
import { Bug } from "lucide-react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  //links array
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <Bug size={24} />
      </Link>

      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={classNames({
                "text-orange-400": currentPath === href,
                "text-zinc-400": currentPath !== href,
                //hover
                "hover:text-zinc-300 transition-colors": currentPath !== href,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
