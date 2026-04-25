import { i18n } from '@/i18n-config';

export default function RootPage() {
    return (
        <html>
        <head>
            <meta httpEquiv="refresh" content={`0;url=/${i18n.defaultLocale}/`} />
        </head>
        <body />
        </html>
    );
}