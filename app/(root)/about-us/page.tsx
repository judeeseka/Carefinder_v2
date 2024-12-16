import TeamInfo from "@/components/home-layout/TeamInfo";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      {/* Introduction */}
      <div className="px-5 pt-5 sm:py-5 md:p-16 bg-myColors-secondary">
        <div className="grid grid-cols-1 gap-8 md:justify-center sm:grid-cols-2 max-w-screen-xl">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl self-center text-center md:text-left lg:p-8">
            We believe that everyone has the right to access quality healthcare.
          </h2>

          <Image
            src="/assets/about-bg.jpg"
            alt="About_us Intro Image"
            width={1824}
            height={1248}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* About Carefinder */}
      <div className="grid grid-cols-1 px-5 pt-5 sm:py-5 gap-8 sm:grid-cols-2 mx-auto max-w-screen-xl">
        <Image
          src="/assets/cf-logo.png"
          alt="About_us image"
          width={1024}
          height={1024}
          className="order-2 sm:order-first self-center"
        />

        <div className="flex flex-col justify-center px-6 lg:px-8 xl:pl-20">
          <h2 className="font-bold text-2xl md:text-3xl">About Carefinder</h2>

          <p className="my-3">
            Carefinder was founded in 2024 with the aim of solving the challenge
            of finding healthcare services in Nigeria. Since then, we have grown
            into a trusted resource for thousands of users across the country.
          </p>
          <p className="mb-3">
            Our mission is to make healthcare accessible and easy to find for
            everyone in Nigeria, bridging the gap between patients and
            healthcare providers. We provide a simple tool to help users locate,
            export, and share hospital information within their region.
          </p>
        </div>
      </div>
      {/* Our team */}
      <TeamInfo />
    </section>
  );
};

export default About;
