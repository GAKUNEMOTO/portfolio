import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { AppConfig } from "@/app.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: "fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'h-dvh flex flex-col')} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
           <Header/>
          </Suspense>
          <main className="flex flex-1">
          <div className="flex-1 bg-muted/30">
            <Suspense>
              {children}
            </Suspense>
          </div>
          </main>
        </ThemeProvider>
      </body>

    </html>
  );
}
