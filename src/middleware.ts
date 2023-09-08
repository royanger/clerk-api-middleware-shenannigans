import { authMiddleware } from "@clerk/nextjs";

// straight from https://nextjs.org/docs/pages/building-your-application/routing/middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export default authMiddleware({
  debug: false,
  publicRoutes: ["/api/public-route"],
  ignoredRoutes: ["/api/ignored-route"],
});
