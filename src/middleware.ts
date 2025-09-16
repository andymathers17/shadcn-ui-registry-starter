import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: "/r/:path*" };

export function middleware(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  
  // Allow all requests with _rsc parameter (React Server Components)
  if (request.nextUrl.searchParams.has("_rsc")) {
    return NextResponse.next();
  }
  
  // Allow all requests with Next.js internal headers
  if (request.headers.get("x-nextjs-data") || 
      request.headers.get("next-router-prefetch") ||
      request.headers.get("next-router-state-tree")) {
    return NextResponse.next();
  }

  // For all other requests, require token
  if (token == null || token !== process.env.NEXT_PUBLIC_REGISTRY_AUTH_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next();
}
