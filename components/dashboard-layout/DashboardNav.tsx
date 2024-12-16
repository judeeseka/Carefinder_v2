"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { navLinks } from "@/lib/constants";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { Button } from "../../ui/button";
import { FileChartLine, Hospital, House, Settings } from "lucide-react";
import DashboardLinks from "./DashboardLinks";
// import DashboardLinks from "./DashboardLinks";
// import SidebarFooter from "../SidebarFooter";
// import { getLoggedInUser } from "@/lib/actions/user.action";

const DashboardNav = () => {
  return (
    <section className="flex w-full justify-between md:hidden">
      <div className="flex gap-2 items-center">
        <Image
          src="/icons/favicon.ico"
          alt="Carefinder icon"
          width={25}
          height={25}
        />
        <span className="text-2xl font-bold">Carefinder</span>
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent aria-describedby={undefined}>
          <SheetTitle></SheetTitle>
          {/* <nav className="flex h-full flex-col gap-6 pt-16">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);
  
                return (
                  <SheetClose key={item.label} asChild>
                    <Link
                      href={item.route}
                      className={cn("text-center w-full border-b", {
                        "bg-slate-400": isActive,
                      })}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}
              <SheetClose>
                
              </SheetClose>
            </nav> */}

          <nav className="flex flex-col gap-4 pt-10 justify-between">
            <SheetClose asChild>
              <DashboardLinks
                icon={<House />}
                link="/dashboard"
                label="Home"
                type="dashboard"
              />
            </SheetClose>

            <SheetClose asChild>
              <DashboardLinks
                icon={<Hospital />}
                link="/manage-hospitals"
                label="Manage Hospitals"
                type="dashboard"
              />
            </SheetClose>

            <SheetClose asChild>
              <DashboardLinks
                icon={<FileChartLine />}
                link="/analytics"
                label="Analytics/Reports"
                type="dashboard"
              />
            </SheetClose>

            <SheetClose asChild>
              <DashboardLinks
                icon={<Settings />}
                link="/settings"
                label="Settings"
                type="dashboard"
              />
            </SheetClose>
          </nav>

          {/* <SidebarFooter user={loggedIn} /> */}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default DashboardNav;
