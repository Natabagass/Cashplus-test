import { getCookie, hasCookie } from "cookies-next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get('auth')

    if (cookie) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export const config = {
    matcher: ['/history', '/payment']
}