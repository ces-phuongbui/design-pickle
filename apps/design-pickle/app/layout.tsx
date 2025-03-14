import { Navbar } from "@repo/ui/components/Navbar";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getGlobalPageData } from "~/data/loaders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page",
  description: "Created with NextJS, Shadcn, Turborepo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getGlobalPageData();

  const { navBar } = data.data;

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar navBar={navBar} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
