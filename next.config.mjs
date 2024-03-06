import * as NextMdx from "@next/mdx";

const withMDX = NextMdx.default({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  output: "export"
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
