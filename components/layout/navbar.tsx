"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { Egg, ChevronDown } from "lucide-react";
import { NavDropdown } from "./nav-dropdown";
import Image from "next/image";
import mondoGalloLogo from "../../assets/images/logo-green-text-large.svg";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  console.log("pathname :", pathname);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-2"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Egg className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Farm Fresh</span> */}
            <Image
              priority
              src={mondoGalloLogo}
              alt=""
              height={150}
              width={150}
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div key={category.id} className="relative">
                {category.id === "professionals" ? (
                  <div
                    className={`flex items-center space-x-1 ${
                      isScrolled || !isHome ? "text-gray-600" : "text-white"
                    } hover:text-primary cursor-pointer transition-colors`}
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
                    className={`${
                      isScrolled || !isHome ? "text-gray-600" : "text-white"
                    } hover:text-primary transition-colors`}
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
