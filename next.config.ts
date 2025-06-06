import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'www.google.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'image.api.playstation.com',
        protocol: 'https',
        port: ''
      }
    ]
  } 
};

export default nextConfig;
