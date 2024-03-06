import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blkzl",
  description: "blkzl"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-white">{children}</div>;
}
