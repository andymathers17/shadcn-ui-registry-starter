import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: "/r/:path*" };

export function middleware(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  
  // Allow requests with _rsc parameter (React Server Components)
  if (request.nextUrl.searchParams.has("_rsc")) {
    return NextResponse.next();
  }
  
  // Allow requests with _nextjs-data header (Next.js internal)
  if (request.headers.get("x-nextjs-data")) {
    return NextResponse.next();
  }

  // Require token for all other requests
  if (token == null || token !== process.env.NEXT_PUBLIC_REGISTRY_AUTH_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next();
}
