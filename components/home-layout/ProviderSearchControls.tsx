// "use client";

// import React, { useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { getSelectOptions } from "@/lib/actions/provider.action";
// import SkeletonControls from "./SkeletonControls";

// const ProviderSearchControls = () => {
//   const { data, isFetching } = useQuery({
//     queryKey: ["selectOptions"],
//     queryFn: getSelectOptions,
//     refetchOnMount: false,
//     // refetchOnReconnect: false,
//     refetchOnWindowFocus: false,
//   });

//   const stateOptions = data?.[0];
//   const providerOptions = data?.[1];
//   const [input, setInput] = useState("");
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const handleSearch = (
//     term: string,
//     type: "input" | "location" | "provider"
//   ) => {
//     const params = new URLSearchParams(searchParams);
//     params.set("page", "1");

//     if (term === "All States" || term === "All Providers") term = "";

//     if (term) {
//       params.set(type, term);
//     } else {
//       params.delete(type);
//     }

//     replace(`${pathname}?${params.toString()}`);
//   };

//   const handleBlur = () => {
//     if (!input) {
//       handleSearch("", "input");
//     }
//   };

//   if (isFetching) return <SkeletonControls />;
//   return (
//     <div className="grid gap-3 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-3 mt-5">
//       <Select
//         defaultValue={searchParams.get("location")?.toString() || "All States"}
//         onValueChange={(value) => handleSearch(value, "location")}
//       >
//         <SelectTrigger>
//           <SelectValue placeholder="Select a location" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="All States">All States</SelectItem>
//           {stateOptions?.map((state, index) => (
//             <SelectItem key={index} value={state}>
//               {state}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       <Select
//         defaultValue={
//           searchParams.get("provider")?.toString() || "All Providers"
//         }
//         onValueChange={(value) => handleSearch(value, "provider")}
//       >
//         <SelectTrigger>
//           <SelectValue placeholder="Select a provider" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="All Providers">All Providers</SelectItem>
//           {providerOptions?.map((provider, index) => (
//             <SelectItem key={index} value={provider}>
//               {provider}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       <div className="grid grid-cols-[3fr_1fr] sm:col-span-full lg:col-span-1 gap-1">
//         <Input
//           type="text"
//           placeholder="Search a provider name"
//           onChange={(e) => setInput(e.target.value)}
//           onBlur={() => handleBlur()}
//           value={input}
//         />
//         <Button onClick={() => handleSearch(input, "input")}>Search</Button>
//       </div>
//     </div>
//   );
// };

// export default ProviderSearchControls;
"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getSelectOptions } from "@/lib/actions/provider.action";
import { useQuery } from "@tanstack/react-query";

const ProviderSearchControls = () =>
  //   {
  //   initialOptions,
  // }: {
  //   initialOptions: string[][] | undefined;
  // }
  {
    const [input, setInput] = useState("");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const { data } = useQuery({
      queryKey: ["selectOptions"],
      queryFn: () => getSelectOptions(), // Use initial props as fallback
      // initialData: initialOptions,
      staleTime: 5 * 60 * 1000,
    });
    const stateOptions = data?.[0];
    const providerOptions = data?.[1];

    const handleSearch = (
      term: string,
      type: "input" | "location" | "provider"
    ) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");

      if (term === "All States" || term === "All Providers") term = "";

      if (term) {
        params.set(type, term);
      } else {
        params.delete(type);
      }

      replace(`${pathname}?${params.toString()}`);
    };

    const handleBlur = () => {
      if (!input) {
        handleSearch("", "input");
      }
    };

    return (
      <div className="grid gap-3 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-3 mt-5">
        <Select
          defaultValue={
            searchParams.get("location")?.toString() || "All States"
          }
          onValueChange={(value) => handleSearch(value, "location")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All States">All States</SelectItem>
            {stateOptions?.map((state, index) => (
              <SelectItem key={index} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          defaultValue={
            searchParams.get("provider")?.toString() || "All Providers"
          }
          onValueChange={(value) => handleSearch(value, "provider")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Providers">All Providers</SelectItem>
            {providerOptions?.map((provider, index) => (
              <SelectItem key={index} value={provider}>
                {provider}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="grid grid-cols-[3fr_1fr] sm:col-span-full lg:col-span-1 gap-1">
          <Input
            type="text"
            placeholder="Search a provider name"
            onChange={(e) => setInput(e.target.value)}
            onBlur={() => handleBlur()}
            value={input}
          />
          <Button onClick={() => handleSearch(input, "input")}>Search</Button>
        </div>
      </div>
    );
  };

export default ProviderSearchControls;
