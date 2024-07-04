"use client";

import { useSidebarContext } from "../../layout/layout-context";
import { SidebarItem } from "./sidebar-item";

import { Sidebar } from "./sidebar.styles";

import { Flower, FolderRoot, Home } from "lucide-react";
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
            <SidebarItem
              isActive={pathname === "/dashboard/admin/project-management"}
              title="Project Management"
              icon={<FolderRoot />}
              href="/dashboard/admin/project-management"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
