import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { encryptederc20abi, erc20abi, safeabi } from "@/contracts/data";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Contract } from "ethers";
import { useEffect, useState } from "react";

export function AddAddress({ data }) {
  const {
    addressOwnerSafe,
    addressBobSafe,
    addressCarolSafe,
    addressDaveSafe,
    addressERC20,
    addressEncryptedERC20,
    setAddressOwnerSafe,
    setAddressBobSafe,
    setAddressCarolSafe,
    setAddressDaveSafe,
    setAddressERC20,
    setAddressEncryptedERC20,
    handleChange,
  } = data;
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full min-w-[200px]">Add Addresses</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Addresses</AlertDialogTitle>
          <AlertDialogDescription className="text-black space-y-2 ">
            <div>
              <label>
                Owner Safe Address:
                <input
                  type="text"
                  value={addressOwnerSafe}
                  onChange={(e) => handleChange(data.setAddressOwnerSafe, e)}
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
            <div>
              <label>
                Bob Safe Address:
                <input
                  type="text"
                  value={addressBobSafe}
                  onChange={(e) => handleChange(data.setAddressBobSafe, e)}
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
            <div>
              <label>
                Carol Safe Address:
                <input
                  type="text"
                  value={addressCarolSafe}
                  onChange={(e) => handleChange(data.setAddressCarolSafe, e)}
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
            <div>
              <label>
                Dave Safe Address:
                <input
                  type="text"
                  value={addressDaveSafe}
                  onChange={(e) => handleChange(data.setAddressDaveSafe, e)}
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
            <div>
              <label>
                ERC20 Address:
                <input
                  type="text"
                  value={addressERC20}
                  onChange={(e) => handleChange(data.setAddressERC20, e)}
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
            <div>
              <label>
                Encrypted ERC20 Address:
                <input
                  type="text"
                  value={addressEncryptedERC20}
                  onChange={(e) => handleChange(data.setAddressEncryptedERC20, e)}
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Okay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
