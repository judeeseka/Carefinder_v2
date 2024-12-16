// "use client";

// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { getProviders } from "@/lib/actions/provider.action";
// import { providerIcons } from "@/lib/constants";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import SkeletonCard from "./SkeletonCard";

// const ProviderCards = () => {
//   const searchParams = useSearchParams();
//   const paramsObject: Record<string, string> = {};
//   searchParams.forEach((value, key) => {
//     paramsObject[key] = value;
//   });

//   const { data: fetchProviders, isFetching } = useQuery({
//     queryKey: ["providers", paramsObject],
//     queryFn: ({ queryKey }) => {
//       const [, params] = queryKey as [string, Record<string, string>];
//       return getProviders(params);
//     },
//     refetchOnWindowFocus: false,
//   });

//   if (isFetching) return <SkeletonCard />;

//   return (
//     <div className="mt-8 grid gap-3 auto-rows-fr grid-flow-row-dense grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
//       {fetchProviders?.documents.length ? (
//         fetchProviders.documents.map((provider) => {
//           const IconComponent = providerIcons[provider.type];
//           return (
//             <Card key={provider.$id}>
//               <CardHeader className="flex flex-col">
//                 {<IconComponent className="text-2xl text-blue-900" />}
//                 <CardTitle>{provider.name}</CardTitle>
//               </CardHeader>
//               <CardContent className="flex flex-col gap-2">
//                 <div className="flex gap-2 items-center">
//                   <Image
//                     src="/icons/building-icon.svg"
//                     alt="building icon"
//                     width={25}
//                     height={25}
//                   />
//                   <p className="text-[16px] sm:font-medium font-normal">
//                     {provider.type}
//                   </p>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <Image
//                     src="/icons/location-icon.svg"
//                     alt="location icon"
//                     width={25}
//                     height={25}
//                   />
//                   <p className="text-[16px] sm:font-medium font-normal">
//                     {provider.address}
//                   </p>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <Image
//                     src="/icons/telephone-icon.svg"
//                     alt="telephone icon"
//                     width={25}
//                     height={25}
//                   />
//                   <p className="text-[16px] sm:font-medium font-normal">
//                     {provider.phoneNumber}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })
//       ) : (
//         <p>{`${searchParams.get("input") ? searchParams.get("input") : ""} ${
//           searchParams.get("provider") ? searchParams.get("provider") : ""
//         } ${
//           searchParams.get("location")
//             ? "in " + searchParams.get("location")
//             : ""
//         } not available`}</p>
//       )}
//     </div>
//   );
// };

// export default ProviderCards;

"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { getProviders } from "@/lib/actions/provider.action";
import { providerIcons } from "@/lib/constants";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "./SkeletonCard";
// import { Models } from "node-appwrite";

const ProviderCards = () =>
  //   {
  //   initialProviders,
  // }: {
  //   initialProviders: Models.DocumentList<Models.Document> | undefined;
  // }
  {
    const searchParams = useSearchParams();
    const paramsObject: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      paramsObject[key] = value;
    });

    const { data: fetchProviders, isFetching } = useQuery({
      queryKey: ["providers", paramsObject],
      queryFn: ({ queryKey }) => {
        const [, params] = queryKey as [string, Record<string, string>];
        return getProviders(params);
      },
      // initialData: initialProviders,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    });

    if (isFetching) return <SkeletonCard />;

    return (
      <div className="mt-8 grid gap-3 auto-rows-fr grid-flow-row-dense grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        {fetchProviders?.documents.length ? (
          fetchProviders.documents.map((provider) => {
            const IconComponent = providerIcons[provider.type];
            return (
              <Card key={provider.$id}>
                <CardHeader className="flex flex-col">
                  {<IconComponent className="text-2xl text-blue-900" />}
                  <CardTitle>{provider.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/building-icon.svg"
                      alt="building icon"
                      width={25}
                      height={25}
                    />
                    <p className="text-[16px] sm:font-medium font-normal">
                      {provider.type}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/location-icon.svg"
                      alt="location icon"
                      width={25}
                      height={25}
                    />
                    <p className="text-[16px] sm:font-medium font-normal">
                      {provider.address}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/telephone-icon.svg"
                      alt="telephone icon"
                      width={25}
                      height={25}
                    />
                    <p className="text-[16px] sm:font-medium font-normal">
                      {provider.phoneNumber}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <p>{`${searchParams.get("input") ? searchParams.get("input") : ""} ${
            searchParams.get("provider") ? searchParams.get("provider") : ""
          } ${
            searchParams.get("location")
              ? "in " + searchParams.get("location")
              : ""
          } not available`}</p>
        )}
      </div>
    );
  };

export default ProviderCards;
