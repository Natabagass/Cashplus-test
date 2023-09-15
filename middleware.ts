import withAuth from "@/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMiddleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;
}

export default withAuth(mainMiddleware, ["/home", "/product", "/history", "/cart"])