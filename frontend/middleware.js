import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Verificar si es una ruta pública
  const publicRoutes = [
    "/login",
    "/register",
    "/api",
    "/_next",
    "/favicon.ico",
    "/static",
  ];
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Verificar autenticación (simulado con una cookie "authToken")
  const authToken = request.cookies.get("authToken");

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Aplica el middleware solo a rutas específicas
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings"],
};
