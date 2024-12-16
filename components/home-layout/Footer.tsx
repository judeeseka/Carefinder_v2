import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";

const Footer = () => {
  return (
    <footer className="bg-myColors-main dark:bg-gray-900">
      <div className="container px-6 py-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h2 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl dark:text-white text-white">
              Subscribe our newsletter to get update.
            </h2>

            <div className="flex flex-col gap-4 mt-6 space-y-3 md:space-y-0 md:flex-row max-w-sm">
              <Input type="email" placeholder="Enter your email address" />
              <Button>Subscribe</Button>
            </div>
          </div>

          <div className="text-white">
            <p className="font-bold dark:text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href="/" className="hover:text-sky-500">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-sky-500">
                About
              </Link>
              <Link href="/contact-us" className="hover:text-sky-500">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-white">
            <p className="font-bold dark:text-white">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link href="/search-providers" className="hover:text-sky-500">
                Search Providers
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-400 md:my-6 dark:border-gray-700" />

        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/favicon.ico"
              alt="Carefinder icon"
              width={25}
              height={25}
            />
            <span className="text-2xl font-bold text-white">Carefinder</span>
          </div>

          <p className="text-white text-center sm:text-left">
            © 2024 Carefinder. All rights reserved
          </p>

          <div className="flex gap-4 -mx-2 bg-white p-2 rounded-md">
            <Link href="#">
              <Image
                src="/icons/facebook.svg"
                alt="facebook icon"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/instagram.svg"
                alt="instagram icon"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image src="icons/x.svg" alt="x icon" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
