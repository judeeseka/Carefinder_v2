import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
  z.object({
    email: z.string().email().trim(),
    password: z.string().min(8),
    firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    address: type === "sign-in" ? z.string().optional() : z.string().max(50),
  });

export const getPaginationItems = (
  currentPage: number,
  pageCount: number,
  windowWidth: number
) => {
  if (windowWidth < 640) {
    return [
      currentPage > 1 ? currentPage - 1 : null,
      currentPage,
      currentPage < pageCount ? currentPage + 1 : null,
    ].filter(Boolean);
  } else {
    // if (currentPage === pageCount) {
    //   return [currentPage];
    // }
    if (pageCount <= 5) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "ellipsis", pageCount];
    }
    if (currentPage >= pageCount - 2) {
      return [
        1,
        "ellipsis",
        pageCount - 3,
        pageCount - 2,
        pageCount - 1,
        pageCount,
      ];
    }
    return [
      1,
      "ellipsis",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "ellipsis",
      pageCount,
    ];
  }
};

// export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const parseStringify = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value));
