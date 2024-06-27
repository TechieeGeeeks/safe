import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Button } from "./ui/button";

function MainNav({ items }) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const { authenticated, logout } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const accountAddress = w0?.address?.toLocaleLowerCase();
  const formattedAddress = accountAddress
    ? `${accountAddress.slice(0, 6)}....${accountAddress.slice(-4)}`
    : "";

  // Determine active index based on current pathname
  React.useEffect(() => {
    const foundIndex = items.findIndex((item) => item.href === pathname);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  }, [pathname, items]);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-between items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2" passHref>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <>
        {" "}
        {items && items.length ? (
          <nav className="md:flex hidden gap-6">
            {items.map(
              (item, index) =>
                item.href && (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center text-sm font-medium",
                        activeIndex === index
                          ? "text-foreground"
                          : "text-muted-foreground",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                      onClick={() => handleLinkClick(index)}
                      passHref
                    >
                      {item.title}
                    </Link>
                  </div>
                )
            )}
          </nav>
        ) : null}
        {authenticated && (
          <>
            <div className="flex gap-4 items-center">
              <Link href={"/owner"}>
                {" "}
                <div className="p-2 rounded-lg text-sm cursor-pointer hover:text-primary">
                  <p className="">Owner</p>
                </div>
              </Link>

              <div className="p-2 rounded-lg text-sm cursor-pointer hover:text-primary">
                <Link href={"befiniciary"}>
                  <p>Beneficiary</p>
                </Link>
              </div>
              <div
                className="p-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/80"
                onClick={logout}
              >
                <p className="">Logout</p>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default MainNav;
