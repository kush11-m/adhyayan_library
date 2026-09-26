import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/adhyayan-library",
        destination: "/adhyayan-library-gwalior",
        permanent: true,
      },
      ...[
        "/gwalior-self-study-centre",
        "/self-study-centre-in-gwalior",
        "/gwalior-library",
        "/library-in-gwalior",
        "/reading-room-in-gwalior",
        "/study-centres-in-gwalior",
        "/reading-libraries-in-gwalior",
        "/study-library-in-gwalior",
        "/upsc-library-in-gwalior",
        "/mppsc-library-in-gwalior",
        "/ac-library-in-gwalior",
        "/library-near-padav-gwalior",
        "/library-near-gwalior-railway-station",
        "/competitive-exam-library-gwalior",
        "/quiet-library-in-gwalior",
        "/student-library-in-gwalior",
      ].map((source) => ({
        source,
        destination: "/best-library-in-gwalior",
        permanent: true,
      })),
      ...[
        "/library-fees-in-gwalior",
        "/library-membership-in-gwalior",
        "/library-with-locker-in-gwalior",
      ].map((source) => ({
        source,
        destination: "/membership",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
