"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const professionals = [
  { id: "vets", title: "Vets", href: "/categories/professionals?type=vets" },
  {
    id: "professionals",
    title: "Professionals",
    href: "/categories/professionals?type=professionals",
  },
];

export function NavDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
    >
      {professionals.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
        >
          {item.title}
        </Link>
      ))}
    </motion.div>
  );
}
