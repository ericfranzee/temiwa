/** @type {import("next").NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.temiwa.com",
        port: "",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "temiwa.s3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "cloudflare.com",
      },
      {
        protocol: "https",
        hostname: "api.temiwa.com",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
