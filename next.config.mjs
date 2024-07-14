/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["127.0.0.1", "images.ctfassets.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/jfw5rmam2hc7/**",
      },
      {
        protocol: "https",
        hostname: "amore-homes.vercel",
        port: "",
        pathname: "/images/**",
      },
    ],
  },

  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
    CONTENTFUL_MANAGEMENT_TOKEN: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    CONTENTFUL_BASEURL: process.env.CONTENTFUL_BASEURL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    MY_EMAIL: process.env.MY_EMAIL,
    MY_PASSWORD: process.env.MY_PASSWORD,
  },
}
export default nextConfig
