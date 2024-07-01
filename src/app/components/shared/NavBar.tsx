/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { LogIn, Sunset } from "lucide-react";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { useRouter, usePathname } from "next/navigation";
import ActionSubmitButton from "../submitButton/ActionSubmitButton";
import MenuComponent from "./DropdownMenuComponent";

const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // Call usePathname inside the component function

  const isActive = (path: string) => pathname === path;

  const downloadUrl =
    "https://drive.google.com/uc?export=download&id=1vlLcV9UuLWYGplxyGOtHlAWnKvTGG77y";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 gap-3">
        <NavbarBrand></NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex lg:gap-12 md:gap-6">
        <NavbarBrand>
          <Sunset className="text-customPurple mr-2" size={30} />
          <p>arjumanjesmin@gmail.com</p>
        </NavbarBrand>
        <NavbarItem>
          <NextLink
            className={`w-full ${
              isActive && isActive("/")
                ? "text-customPurple underline font-semibold"
                : "hover:secondary"
            }`}
            color="foreground"
            href="/"
          >
            Home
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <NextLink
            className={`w-full ${
              isActive && isActive("/about")
                ? "text-customPurple underline font-semibold"
                : "hover:secondary"
            }`}
            color="foreground"
            href="/about"
          >
            About
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <NextLink
            className={`w-full ${
              isActive && isActive("/blog")
                ? "text-customPurple underline font-semibold"
                : "hover:secondary"
            }`}
            color="foreground"
            href="/blog"
          >
            Blog
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <NextLink
            className={`w-full ${
              isActive && isActive("/contact")
                ? "text-customPurple underline font-semibold"
                : "hover:secondary"
            }`}
            color="foreground"
            href="/contact"
          >
            Contact
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`w-full ${
              isActive && isActive("/skills")
                ? "text-customPurple underline font-semibold"
                : "hover:secondary"
            }`}
            color="foreground"
            href="/skills"
          >
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" color="primary">
            <LogIn />
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          <Link href={downloadUrl} download>
            <ActionSubmitButton>Resume Download</ActionSubmitButton>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <MenuComponent />
    </Navbar>
  );
};

export default NavBar;
