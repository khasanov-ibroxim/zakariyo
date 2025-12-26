/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ STATIC EXPORT - Bu eng muhim qism!
  output: 'export',

  // ✅ Images configuration for static export
  images: {
    unoptimized: true, // Static export uchun zarur
  },

  // ✅ Trailing slash
  trailingSlash: true,

  // ✅ Production optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // ✅ CRITICAL: Turbopack config (empty to silence warning)
  turbopack: {},

  // ⚠️ IMPORTANT: Static export bilan headers, redirects ishlamaydi
  // Ularni hostingda sozlash kerak (Vercel, Netlify va h.k.)
};

module.exports = nextConfig;