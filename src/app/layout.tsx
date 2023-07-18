import { TrpcProvider } from "@/utils/trpc-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNav } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twiiter Clone",
  description: "This is a twitter clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>
          <div className="container mx-auto flex items-start sm:pr-4">
            <SideNav />
            <div className="min-h-screen flex-grow border-x">{children}</div>
          </div>{" "}
        </TrpcProvider>
      </body>
    </html>
  );
}
