import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "apexinnovate.ae";
const RETIRED_PATHS = new Set(["/studio", "/software", "/academy", "/vr", "/robomarket"]);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (RETIRED_PATHS.has(pathname)) {
    return new NextResponse("This page has been permanently removed.", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=300",
      },
    });
  }
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";

  if (host === `www.${CANONICAL_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  if (host.endsWith(".vercel.app")) {
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive, nosnippet"
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.svg|images/).*)",
  ],
};
