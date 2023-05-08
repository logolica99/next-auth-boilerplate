export { default } from "next-auth/middleware";
console.log("er");

export const config = {
  matcher: ["/admin/:path*"],
};
