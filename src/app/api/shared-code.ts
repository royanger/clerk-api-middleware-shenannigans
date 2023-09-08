import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Take from example https://clerk.com/docs/references/nextjs/route-handlers#protecting-route-handlers
// but modified to be an actual route handler
// (the example heading says "route handler" but the code is for /app/page.tsx which is a SSR page)

export function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json("unauthorized", { status: 401 });
  }
  return NextResponse.json("ok");
}
