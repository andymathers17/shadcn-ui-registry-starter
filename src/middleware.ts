import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: "/r/:path*" };

export function middleware(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  
  // Debug logging
  console.log("Middleware request:", {
    url: request.url,
    hasRsc: request.nextUrl.searchParams.has("_rsc"),
    rscValue: request.nextUrl.searchParams.get("_rsc"),
    headers: Object.fromEntries(request.headers.entries())
  });
  
  // Allow internal Next.js requests (RSC, prefetching, etc.)
  // Check for various Next.js internal request patterns
  const isInternalRequest = 
    request.nextUrl.searchParams.has("_rsc") ||
    request.headers.get("x-nextjs-data") ||
    request.headers.get("rsc") ||
    request.headers.get("next-router-prefetch") ||
    request.headers.get("next-router-state-tree") ||
    request.url.includes("_next/static") ||
    request.url.includes("_next/data");
  
  console.log("Is internal request:", isInternalRequest);
  
  if (isInternalRequest) {
    console.log("Allowing internal request");
    return NextResponse.next();
  }

  if (token == null || token !== process.env.NEXT_PUBLIC_REGISTRY_AUTH_TOKEN) {
    console.log("Blocking request - no valid token");
    return new NextResponse("Unauthorized", { status: 401 });
  }

  console.log("Allowing request with valid token");
  return NextResponse.next();
}
