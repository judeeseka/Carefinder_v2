import ProviderCards from "@/components/home-layout/ProviderCards";
import ProviderPagination from "@/components/home-layout/ProviderPagination";
import ProviderSearchControls from "@/components/home-layout/ProviderSearchControls";
import SkeletonCard from "@/components/home-layout/SkeletonCard";
import SkeletonControls from "@/components/home-layout/SkeletonControls";
import SkeletonPagination from "@/components/home-layout/SkeletonPagination";
import { Suspense } from "react";
// import { getSelectOptions } from "@/lib/actions/provider.action";
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";

// import { getProviders, getSelectOptions } from "@/lib/actions/provider.action";
// import { Models } from "node-appwrite";
// import { Suspense } from "react";

// const SearchProviders = async () => {
//   // const queryClient = new QueryClient();

//   // await queryClient.prefetchQuery({
//   //   queryKey: ["selectOptions"],
//   //   queryFn: () => getSelectOptions(),
//   //   staleTime: 60 * 1000 * 10,
//   // });

//   // await queryClient.prefetchQuery({
//   //   queryKey: ["selectOptions"],
//   //   queryFn: getSelectOptions,
//   //   staleTime: 60 * 1000,
//   // });
//   // await queryClient.prefetchQuery({
//   //   queryKey: ['posts'],
//   //   queryFn: getPosts,
//   // })
//   return (
//     <section className="p-2 md:px-6 lg:px-12 bg-myColors-secondary">
//       <h2 className="font-bold text-2xl md:text-5xl text-center my-2">
//         Explore our providers
//       </h2>

//       {/* <HydrationBoundary state={dehydrate(queryClient)}>
//         <ProviderSearchControls />
//       </HydrationBoundary> */}

//       <ProviderSearchControls />

//       <ProviderCards />

//       <ProviderPagination />
//     </section>
//   );
// };

// export default SearchProviders;

const SearchProviders = async () =>
  //   {
  //   searchParams,
  // }: {
  //   searchParams: Promise<{
  //     input?: string;
  //     location?: string;
  //     provider?: string;
  //     page?: string;
  //   }>;
  // }
  {
    // let uniqueStatesArray: string[] = [];
    // let uniqueTypesArray: string[] = [];
    // let totalPages: number | null = null;
    // let options: string[][] | undefined;
    // let initialProviders: Models.DocumentList<Models.Document> | undefined;

    // const [
    //   selectOptions,
    //   // fetchProviders,
    //   fetchTotal,
    // ] = await Promise.all([
    //   getSelectOptions(),
    //   // getTotalPages(),
    //   // getProviders(input, location, provider, currentPage),
    //   getProviders(),
    // ]);
    // if (selectOptions.status === "fulfilled" && selectOptions.value) {
    //   const providerOptions = selectOptions.value;
    //   // uniqueStatesArray = states;
    //   // uniqueTypesArray = types;
    //   options = providerOptions;
    // }
    // if (fetchTotal.status === "fulfilled" && fetchTotal.value) {
    //   const providers = fetchTotal.value;
    //   initialProviders = providers;
    // }

    return (
      <section className="p-4 md:px-6 lg:px-12 bg-myColors-secondary">
        <h2 className="font-bold text-2xl md:text-5xl text-center my-2">
          Explore our providers
        </h2>
        <Suspense fallback={<SkeletonControls />}>
          <ProviderSearchControls />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <ProviderCards />
        </Suspense>
        <Suspense fallback={<SkeletonPagination />}>
          <ProviderPagination />
        </Suspense>
        {/* <ProviderSearchControls
        // stateOptions={uniqueStatesArray}
        // providerOptions={uniqueTypesArray}
        // initialOptions={selectOptions}
        /> */}

        {/* <Suspense
          fallback={
            // <SkeletonCard />
            <p>Loading...</p>
          }
        >
          <ProviderCards initialProviders={fetchTotal} />
        </Suspense>  */}

        {/* <ProviderCards />
        <ProviderPagination /> */}

        {/* <ProviderPagination totalPages={initialProviders?.total as number} /> */}
      </section>
    );
  };

export default SearchProviders;
