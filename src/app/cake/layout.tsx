"use client";

import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "../provider/query-provider";
import { ToastMessageProvider } from "../context/context-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <ToastMessageProvider>{children}</ToastMessageProvider>
      <Toaster />
    </QueryProvider>
  );
}
