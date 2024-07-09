"use client";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import HeroComponent from "../components/hero-component";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { authenticated } = usePrivy();

  return <>{authenticated ? <Mint /> : <HeroComponent />}</>;
}

const Mint = () => {
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const accountAddress = w0?.address?.toLocaleLowerCase();
  const formattedAddress = accountAddress
    ? `${accountAddress.slice(0, 6)}....${accountAddress.slice(-4)}`
    : "";
  return (
    <>
      <main className="md:p-8 p-2 grid items-center justify-center">
        <div className="max-w-6xl">
          <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex flex-col items-center gap-4">
              <div className="grid scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                <p className="">
                  Start <span>Minting</span>
                </p>
              </div>
              <p className="max-w-[700px] w-full text-muted-foreground text-center">
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage
              </p>
            </div>

            <div className="flex justify-center mt-3">
              <div className="flex gap-4">
                <Link href={"/steps"}>
                  <Button>See Steps</Button>
                </Link>
                {/* <Link href={"befiniciary"}> */}
                  <Button variant="outline">Logout</Button>
                {/* </Link> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
