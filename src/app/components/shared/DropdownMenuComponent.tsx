import React from "react";
import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

const MenuComponent: React.FC = () => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/about">
          About
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/blog">
          blog
        </Link>
      </NavbarMenuItem>

      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/contactUs">
          Contact Us
        </Link>
      </NavbarMenuItem>

      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/MySkills">
          Skills
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default MenuComponent;
