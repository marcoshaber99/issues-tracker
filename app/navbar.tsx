import Link from "next/link";
import React from "react";
import { Bug } from "lucide-react";

const Navbar: React.FC = () => {
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
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
