import { teamData } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const TeamInfo = () => {
  return (
    <div className="py-20">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get to know the talented individuals behind Carefinder.
          </p>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 grid-cols-[repeat(auto-fit,_minmax(278px,_1fr))]">
          {teamData.map((item, index) => (
            <div
              className="group relative rounded-3xl  space-y-6 overflow-hidden"
              key={index}
            >
              <Image
                src={item.imageURL}
                alt={item.name + " photo"}
                width={item.imageWidth}
                height={item.imageHeight}
                // width={640}
                // height={805}
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute bottom-0 inset-x-0 h-2/3 group-hover:h-fit mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    {item.name}
                  </h4>
                  <span className="block text-sm text-gray-500">
                    {item.position}
                  </span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  {item.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
