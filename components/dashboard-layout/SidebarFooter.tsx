"use client";

import { LogOut } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutAccount } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";
// import { SideFooterProps } from "@/types";

const SidebarFooter = ({ user, type = "desktop" }: SideFooterProps) => {
  const router = useRouter();
  const [firstName, lastName] = user?.name?.split(" ");
  const initials = `${firstName[0]}${lastName[0]}` || "AD";

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) {
      router.push("/sign-in");
    }
  };
  return (
    <footer className="flex items-center justify-between gap-2 py-3 border-t-2">
      <Avatar
        className={
          type === "mobile"
            ? "flex size-10 items-center justify-center rounded-full bg-gray-200"
            : "flex size-10 items-center justify-center rounded-full bg-gray-200 max-xl:hidden"
        }
      >
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div
        className={
          type === "mobile"
            ? "flex flex-1 flex-col justify-center"
            : "flex flex-1 flex-col justify-center max-xl:hidden"
        }
      >
        <h1 className="text-[14px] truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-[14px] truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div
        className="relative size-5 max-xl:w-full max-xl:flex max-xl:justify-center max-xl:items-center cursor-pointer"
        onClick={handleLogOut}
      >
        <LogOut />
      </div>
    </footer>
  );
};

export default SidebarFooter;
