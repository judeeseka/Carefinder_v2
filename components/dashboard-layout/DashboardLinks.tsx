"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const DashboardLinks = ({
  icon,
  link,
  label,
  type,
}: {
  icon: ReactNode;
  link: string;
  label: string;
  type?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link || pathname.startsWith(link);
  return (
    <Link
      href={link}
      key={label}
      className={cn(
        "flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start",
        { "bg-myColors-main": isActive, "justify-start": type === "dashboard" }
      )}
    >
      <div className="relative size-6">
        <span
          className={cn({
            "brightness-[3] invert-0 text-white": isActive,
          })}
        >
          {icon}
        </span>
      </div>
      <p
        className={cn("text-[16px] font-semibold max-xl:hidden", {
          "text-white": isActive,
          "max-xl:block": type === "dashboard",
        })}
      >
        {label}
      </p>
    </Link>
  );
};

export default DashboardLinks;
