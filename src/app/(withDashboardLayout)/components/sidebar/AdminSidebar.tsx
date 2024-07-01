"use client";

import { useSidebarContext } from "../../layout/layout-context";
import { SidebarItem } from "./sidebar-item";

import SidebarMenu from "./sidebar-menu";

import { Sidebar } from "./sidebar.styles";

import { DollarSign, Flower, FolderRoot, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminSidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? <div className={Sidebar.Overlay()} /> : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          {" "}
          <Link className="flex" href="/">
            <Flower />
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<Home />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/admin/project-management"}
                title="Project Management"
                icon={<FolderRoot />}
                href="/dashboard/admin/project-management"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/payments"}
                title="Payments"
                icon={<DollarSign />}
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<Home />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
