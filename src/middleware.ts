import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/past-rides"]);

export default clerkMiddleware((auth, req) => {
	if (req.nextUrl.pathname === "/") {
		return NextResponse.next();
	}

	if (isProtectedRoute(req)) auth().protect();
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
