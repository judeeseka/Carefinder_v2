"use client";

import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

const MobileHomeNav = () => {
  const pathname = usePathname();
  return (
    <section className="flex w-full justify-between md:hidden">
      <div className="flex gap-2 items-center">
        <Image
          src="/icons/favicon.ico"
          alt="Carefinder icon"
          width={25}
          height={25}
        />
        <span className="text-2xl font-bold">
          <Link href="/">Carefinder</Link>
        </span>
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent aria-describedby={undefined}>
          <SheetTitle></SheetTitle>
          <nav className="flex h-full flex-col gap-6 pt-16">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);

              return (
                <SheetClose key={item.label} asChild>
                  <Link
                    href={item.route}
                    className={cn("text-center w-full py-2 border-b", {
                      "bg-slate-400": isActive,
                    })}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              );
            })}
            <SheetClose>
              <Button asChild variant="outline">
                <Link href="/sign-in" className="flex items-center">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileHomeNav;
