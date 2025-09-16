import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: "/r/:path*" };

export function middleware(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  
  // Allow internal Next.js requests (RSC, prefetching, etc.)
  const isInternalRequest = request.headers.get("x-nextjs-data") || 
                           request.headers.get("rsc") ||
                           request.nextUrl.searchParams.has("_rsc");
  
  if (isInternalRequest) {
    return NextResponse.next();
  }

  if (token == null || token !== process.env.NEXT_PUBLIC_REGISTRY_AUTH_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next();
}
