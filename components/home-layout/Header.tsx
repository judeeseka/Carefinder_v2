import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/constants";
import MobileHomeNav from "./MobileHomeNav";
import DashboardNav from "../dashboard-layout/DashboardNav";
import { Link } from "next-view-transitions";
import { getLoggedInUser } from "@/lib/actions/user.action";

const Header = async ({ type }: { type: string }) => {
  const loggedIn = await getLoggedInUser();

  return (
    <header className="w-full sticky top-0 flex p-4 md:px-6 lg:px-12 border-b z-10 bg-white">
      <section className="md:flex justify-between w-full hidden">
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

        <nav className="flex gap-6 items-center">
          {navLinks.map((item) => {
            return (
              <Link
                href={item.route}
                key={item.label}
                className="hover:underline"
              >
                {item.label}
              </Link>
            );
          })}

          {/* {loggedIn ? (
            <Button asChild variant="outline">
              <Link href="/dashboard">
                Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link href="/sign-in" className="flex items-center">
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )} */}

          {loggedIn && loggedIn.status ? (
            <Button asChild variant="outline">
              <Link href="/dashboard">
                Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link href="/sign-in" className="flex items-center">
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </nav>
      </section>

      {type === "dashboard" ? <DashboardNav /> : <MobileHomeNav />}
    </header>
  );
};

export default Header;
