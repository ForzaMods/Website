import { auth } from "@/auth";

export default auth(async(req) => {
  const protectedRoutes = [
    "/ideas",
    "/user/*"
  ];

  const isProtectedRoute = protectedRoutes.some(route => {
    if (route.endsWith("/*")) {
      const baseRoute = route.slice(0, -2); 
      return req.nextUrl.pathname.startsWith(baseRoute);
    }
    return req.nextUrl.pathname === route;
  });

  if (!req.auth && isProtectedRoute) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};