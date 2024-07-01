// import { ThemeSwitcher } from "@/components/pages/shared/ThemeSwitcher";
"use client";
import { logOut } from "@/app/(withCommonLayout)/action/authAction";
import { useAuth } from "@/app/lib/AuthProviders";

// import { logOut } from "@/app/(withComonLayout)/actions/auth";
// import { ThemeSwitcher } from "@/app/(withComonLayout)/components/pages/shared/ThemeSwitcher";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

//   import { DarkModeSwitch } from "./darkmodeswitch";

export const UserDropdown = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const handleLogout = async () => {
    await logOut();
    setUser(null);
    router.push("/");
  };
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Signed in as</p>
          <p>{user?.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="settings">
          <Button onClick={handleLogout} color="warning" variant="flat">
            Logout
            <LogOut />
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
