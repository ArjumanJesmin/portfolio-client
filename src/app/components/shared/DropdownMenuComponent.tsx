import React from "react";
import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

const MenuComponent: React.FC = () => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/features">
          Features
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="#">
          Customers
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default MenuComponent;
