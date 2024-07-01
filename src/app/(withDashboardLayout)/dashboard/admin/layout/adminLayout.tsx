import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { AdminSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/AdminSidebar";

interface Props {
  children: React.ReactNode;
}
export const AdminLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
