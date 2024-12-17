"use client";

import React, { useEffect, useState, useTransition } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPaginationItems } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getProviders } from "@/lib/actions/provider.action";
import SkeletonPagination from "./SkeletonPagination";

const ProviderPagination = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  const currentPage = Number(searchParams.get("page"));

  const paramsObject: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    paramsObject[key] = value;
  });

  const { data, isFetching } = useQuery({
    queryKey: ["providers", paramsObject],
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey as [string, Record<string, string>];
      return getProviders(params);
    },
    refetchOnWindowFocus: false,
  });

  //   const pageCount = data ? Math.ceil(data.total / 25) : 1;
  const pageCount =
    data && Math.ceil(data.total / 25) > 0 ? Math.ceil(data.total / 25) : 1;
  const pages = getPaginationItems(currentPage, pageCount, windowWidth);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    // Set window width after component mounts
    setWindowWidth(window.outerWidth);

    // Add resize listener to update window width on resize
    const handleResize = () => setWindowWidth(window.outerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (
    // !windowWidth
    isFetching
  ) {
    // Render loading or skeleton for the pagination to avoid mismatches
    return (
      // <Pagination className="mt-4">
      //   <PaginationContent>
      //     <PaginationItem>
      //       <PaginationPrevious className="border border-full" />
      //     </PaginationItem>
      //     <PaginationItem>
      //       <PaginationEllipsis />
      //     </PaginationItem>
      //     <PaginationItem>
      //       <PaginationNext className="border border-full" />
      //     </PaginationItem>
      //   </PaginationContent>
      // </Pagination>
      <SkeletonPagination />
    );
  }
  return (
    <div className="mt-4">
      <Pagination className="max-w-sm">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                startTransition(() => {
                  createPageURL(currentPage - 1);
                })
              }
              className={
                isPending || currentPage === 1
                  ? "pointer-events-none cursor-not-allowed opacity-50 border rounded-full"
                  : "cursor-pointer border rounded-full bg-white"
              }
            />
          </PaginationItem>

          {pages.map((item, index) =>
            item === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={item}>
                <PaginationLink
                  onClick={() =>
                    startTransition(() => {
                      createPageURL(item as number);
                    })
                  }
                  isActive={currentPage === item}
                  className="cursor-pointer"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                startTransition(() => {
                  createPageURL(currentPage + 1);
                })
              }
              className={
                isPending || currentPage === pageCount
                  ? "pointer-events-none cursor-not-allowed opacity-50 border rounded-full"
                  : "cursor-pointer border rounded-full bg-white"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProviderPagination;

// "use client";

// import React, { useEffect, useState, useTransition } from "react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "../ui/pagination";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { getPaginationItems } from "@/lib/utils";
// // import { useQuery } from "@tanstack/react-query";
// // import { getProviders } from "@/lib/actions/provider.action";

// const ProviderPagination = ({ totalPages }: { totalPages: number }) => {
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();
//   const [windowWidth, setWindowWidth] = useState(0);
//   const currentPage = Number(searchParams.get("page"));

//   // const paramsObject: Record<string, string> = {};
//   // searchParams.forEach((value, key) => {
//   //   paramsObject[key] = value;
//   // });

//   // const { data, isFetching } = useQuery({
//   //   queryKey: ["providers", paramsObject],
//   //   queryFn: ({ queryKey }) => {
//   //     const [, params] = queryKey as [string, Record<string, string>];
//   //     return getProviders(params);
//   //   },
//   //   refetchOnWindowFocus: false,
//   // });

//   //   const pageCount = data ? Math.ceil(data.total / 25) : 1;
//   const pageCount =
//     Math.ceil(totalPages / 25) > 0 ? Math.ceil(totalPages / 25) : 1;
//   const pages = getPaginationItems(currentPage, pageCount, windowWidth);

//   const createPageURL = (pageNumber: number | string) => {
//     const params = new URLSearchParams(searchParams);
//     params.set("page", pageNumber.toString());
//     replace(`${pathname}?${params.toString()}`);
//   };

//   useEffect(() => {
//     // Set window width after component mounts
//     setWindowWidth(window.outerWidth);

//     // Add resize listener to update window width on resize
//     const handleResize = () => setWindowWidth(window.outerWidth);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // if (
//   //   // !windowWidth
//   //   isFetching
//   // ) {
//   //   // Render loading or skeleton for the pagination to avoid mismatches
//   //   return (
//   //     <Pagination className="mt-4">
//   //       <PaginationContent>
//   //         <PaginationItem>
//   //           <PaginationPrevious className="border border-full" />
//   //         </PaginationItem>
//   //         <PaginationItem>
//   //           <PaginationEllipsis />
//   //         </PaginationItem>
//   //         <PaginationItem>
//   //           <PaginationNext className="border border-full" />
//   //         </PaginationItem>
//   //       </PaginationContent>
//   //     </Pagination>
//   //   );
//   // }
//   return (
//     <div className="mt-4">
//       <Pagination className="max-w-sm">
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() =>
//                 startTransition(() => {
//                   createPageURL(currentPage - 1);
//                 })
//               }
//               className={
//                 isPending || currentPage === 1
//                   ? "pointer-events-none cursor-not-allowed opacity-50 border rounded-full"
//                   : "cursor-pointer border rounded-full bg-white"
//               }
//             />
//           </PaginationItem>

//           {pages.map((item, index) =>
//             item === "ellipsis" ? (
//               <PaginationItem key={`ellipsis-${index}`}>
//                 <PaginationEllipsis />
//               </PaginationItem>
//             ) : (
//               <PaginationItem key={item}>
//                 <PaginationLink
//                   onClick={() =>
//                     startTransition(() => {
//                       createPageURL(item as number);
//                     })
//                   }
//                   isActive={currentPage === item}
//                   className="cursor-pointer"
//                 >
//                   {item}
//                 </PaginationLink>
//               </PaginationItem>
//             )
//           )}

//           <PaginationItem>
//             <PaginationNext
//               onClick={() =>
//                 startTransition(() => {
//                   createPageURL(currentPage + 1);
//                 })
//               }
//               className={
//                 isPending || currentPage === pageCount
//                   ? "pointer-events-none cursor-not-allowed opacity-50 border rounded-full"
//                   : "cursor-pointer border rounded-full bg-white"
//               }
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };

// export default ProviderPagination;
