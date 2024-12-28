"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";
import { Egg, ChevronDown } from "lucide-react";
import { NavDropdown } from "./nav-dropdown";
import Image from "next/image";
import mondoGalloLogo from "../../assets/images/logo-green-text-large.svg";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Egg className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Farm Fresh</span> */}
            <Image
              priority
              src={mondoGalloLogo}
              alt=""
              height={100}
              width={100}
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div key={category.id} className="relative">
                {category.id === "professionals" ? (
                  <div
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary cursor-pointer transition-colors"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span>{category.title}</span>
                    <ChevronDown className="h-4 w-4" />
                    {isDropdownOpen && <NavDropdown />}
                  </div>
                ) : (
                  <Link
                    href={`/categories/${category.id}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {category.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
