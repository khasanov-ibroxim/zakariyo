// proxy.ts - Next.js 16 version (replaces middleware.ts)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip API routes, Next.js internals, and static files
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/static/') ||
        pathname.includes('.') // files with extensions
    ) {
        return NextResponse.next();
    }

    // Check if pathname already has a locale
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // Always redirect to Russian (default)
    const defaultLocale = 'ru';

    // Redirect root to Russian
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
    }

    // For other paths without locale, redirect to Russian
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*|).*)',
    ],
};