"use client";
import { siteConfig } from "@/config/site";
import MainNav from "./main-nav";
export function SiteHeader() {
  return (
    <header className="backdrop-blur-sm bg-backgroundOpac top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between sm:justify-between sm:space-x-0">
        <div className="w-full">
          <MainNav items={siteConfig.mainNav} isVisible={true} />
        </div>
      </div>
    </header>
  );
}
