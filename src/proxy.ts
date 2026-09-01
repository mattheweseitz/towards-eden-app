import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "towardseden.com";

// Canonicalize on the apex domain: permanently redirect any request whose Host
// is www.towardseden.com to the same path/query on the bare domain.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === `www.${CANONICAL_HOST}`) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals and static asset requests.
  matcher: ["/((?!_next/).*)"],
};
