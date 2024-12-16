import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // create a new copy of nextUrl due to its immutable nature
  const url = request.nextUrl.clone();
  const page = url.searchParams.get("page");

  if (!page) {
    url.searchParams.set("page", "1");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/search-providers",
};
