"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
        {/*<ToastProvider>{children}</ToastProvider>*/}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
