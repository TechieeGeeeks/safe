"use client";
import { Button } from "@/components/ui/button";
import {
  encryptederc20abi,
  encryptederc20bytecode,
  erc20abi,
  erc20bytecode,
  safeabi,
  safebytecode,
} from "@/contracts/data";
import { getInstance } from "@/utils/fhevm";
import { useWallets } from "@privy-io/react-auth";
import { Contract, ContractFactory } from "ethers";
import { defaultAbiCoder } from "ethers/lib/utils";
import React, { useEffect } from "react";
import { toast } from "sonner";

const Page = () => {
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const accountAddress = w0?.address?.slice(0, 6)?.toLocaleLowerCase();
  let instance;
  useEffect(() => {
    async function fetchInstance() {
      instance = await getInstance();
    }
    fetchInstance();
  }, []);
  const deployErc20Token = async () => {
    try {
      const provider = await w0?.getEthersProvider();
      const signer = await provider?.getSigner();
      const contractOwnerSafe = await deploySafe(signer);
      const contractBobSafe = await deploySafe(signer);
      const contractCarolSafe = await deploySafe(signer);
      const contractDaveSafe = await deploySafe(signer);
      const contractERC20 = await deployERC20(signer);
      console.log(contractERC20.contractAddress);
      const contractEncryptedERC20 = await deployEncryptedERC20(
        signer,
        contractERC20.contractAddress
      );

      const addressOwnerSafe = contractOwnerSafe.contractAddress;
      const addressBobSafe = contractBobSafe.contractAddress;
      const addressCarolSafe = contractCarolSafe.contractAddress;
      const addressDaveSafe = contractDaveSafe.contractAddress;
      const addressERC20 = contractERC20.contractAddress;
      const addressEncryptedERC20 = contractEncryptedERC20.contractAddress;

      console.log("owner safe address: " + addressOwnerSafe);
      console.log("bob safe address: " + addressBobSafe);
      console.log("carol safe address: " + addressCarolSafe);
      console.log("dave safe address: " + addressDaveSafe);
      console.log("erc20 address: " + addressERC20);
      console.log("encrypted erc20 address: " + addressEncryptedERC20);
      // const addressOwnerSafe = "0x21620F0253a26D16408Dc5265a234A2CE27B7bfa";
      // const addressBobSafe = "0x84032C9F3e6ABb10D772f9Dc9783243f972C91F7";
      // const addressCarolSafe = "0xe48bfEA5419e54EE22EF4Dc02a8a98188fb796f1";
      // const addressDaveSafe = "0x9234A3854C5360ebe47e5A764cAc72d4ad93eE82";
      // const addressERC20 = "0xA58348Bd8D1ac9621a0Ef6B2dF1E4425024C1dc8";
      // const addressEncryptedERC20 =
      //   "0x718d4f4ca260ac8Bdaaf36109DF04EFbb2931fBB";

      let fnSelector = "0x0d582f13";
      toast("Initializing Safe contract (setting up an owner of the safe");

      const encryptedAddres = await defaultAbiCoder.encode(
        ["string", "uint256"],
        [accountAddress, 1]
      );
      console.log(encryptedAddres);

      const ownerSafeContract = new Contract(addressOwnerSafe, safeabi, signer);
      try {
        const txn = await ownerSafeContract.execTransaction(
          addressOwnerSafe,
          0,
          fnSelector + encryptedAddres.slice(2),
          0,
          1000000,
          0,
          1000000,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x"
        );

        console.log(txn);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      const bobSafeContract = new Contract(addressBobSafe, safeabi, signer);
      try {
        const txn = await bobSafeContract.execTransaction(
          addressBobSafe,
          0,
          fnSelector + encryptedAddres.slice(2),
          0,
          1000000,
          0,
          1000000,
          addressBobSafe,
          addressBobSafe,
          "0x"
        );

        console.log(txn);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      const carelSafeContract = new Contract(addressCarolSafe, safeabi, signer);
      try {
        const txn = await carelSafeContract.execTransaction(
          addressCarolSafe,
          0,
          fnSelector + encryptedAddres.slice(2),
          0,
          1000000,
          0,
          1000000,
          addressCarolSafe,
          addressCarolSafe,
          "0x"
        );

        console.log(txn);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      const daveSafeContract = new Contract(addressDaveSafe, safeabi, signer);
      try {
        const txn = await daveSafeContract.execTransaction(
          addressDaveSafe,
          0,
          fnSelector + encryptedAddres.slice(2),
          0,
          1000000,
          0,
          1000000,
          addressDaveSafe,
          addressDaveSafe,
          "0x"
        );

        console.log(txn);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      toast.success("Providing tokens to safe contract");

      const erc20contract = new Contract(addressERC20, erc20abi, signer);
      try {
        const txn = await erc20contract.mint(addressOwnerSafe, 1000000);

        console.log(txn);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      try {
        let fnSelector = "0x095ea7b3";
        const txn = await ownerSafeContract.execTransaction(
          addressERC20,
          0,
          fnSelector +
            defaultAbiCoder
              .encode(["string", "uint256"], [addressEncryptedERC20, 1000000])
              .slice(2),
          0,
          1000000,
          0,
          1000000,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x"
        );

        console.log(txn);
        toast("Now you can transfer tokens to the other safes");
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      toast.success("Approval to EncryptedERC20 successful!");

      const allowance = await erc20contract.getallowance(
        addressOwnerSafe,
        addressEncryptedERC20
      );
      console.log(allowance);
      // const erc20contract = new Contract(addressERC20, erc20abi, signer);
      // try {
      //   let fnSelector = "0x095ea7b3";
      //   const txn = await ownerSafeContract.execTransaction(
      //     addressERC20,
      //     0,
      //     fnSelector +
      //       defaultAbiCoder
      //         .encode(["string", "uint256"], [addressEncryptedERC20, 1000000])
      //         .slice(2),
      //     0,
      //     1000000,
      //     0,
      //     1000000,
      //     addressOwnerSafe,
      //     addressOwnerSafe,
      //     "0x"
      //   );

      //   console.log(txn);
      //   toast("Now you can transfer tokens to the other safes");
      // } catch (error) {
      //   console.log(error);
      //   toast.error("Error Occured!");
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const deploySafe = async (signer) => {
    const factory = await new ContractFactory(safeabi, safebytecode, signer);
    const contract = await factory.deploy();
    console.log(contract);
    const tx = await contract.deployTransaction.wait(1);
    return tx;
  };
  const deployERC20 = async (signer) => {
    const factory = await new ContractFactory(erc20abi, erc20bytecode, signer);
    const contract = await factory.deploy();
    console.log(contract);
    const tx = await contract.deployTransaction.wait(1);
    return tx;
  };
  const deployEncryptedERC20 = async (signer, address) => {
    console.log(address);
    const factory = await new ContractFactory(
      encryptederc20abi,
      encryptederc20bytecode,
      signer
    );
    const contract = await factory.deploy(address, {
      gasLimit: 7920027,
    });
    console.log(contract);
    const tx = await contract.deployTransaction.wait(1);
    return tx;
  };

  return (
    <main className="md:p-8 p-2 flex items-center justify-center w-full">
      <div className="max-w-6xl w-full grid gap-6">
        <div className="grid md:grid-cols-6 items-center justify-center border-b pb-6 mt-14">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 1: </p>
            <p className="text-muted-foreground">Deploy erc20 normal token</p>
          </div>
          <div className="">
            <Button onClick={deployErc20Token} className="w-full">
              Deploy ERC token
            </Button>{" "}
          </div>
        </div>

        <div className="grid md:grid-cols-6 items-center justify-center">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 2: </p>
            <p className="text-muted-foreground">
              Deploy beneficiary gnosis safe
            </p>
          </div>
          <div className="">
            <Button onClick={deployErc20Token} className="w-full">
              Deploy Beneficiary Safe
            </Button>{" "}
          </div>
        </div>
      </div>
      {/* <div className="max-w-6xl w-full grid gap-6">
        <div className="flex items-center gap-6">
          <p className="text-xl font-semibold">
            Step 1:{" "}
            <span className="font-medium">Deploy erc20 normal token</span>
          </p>
          <Button onClick={deployErc20Token}>Deploy</Button>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xl font-semibold">
            Step 2:{" "}
            <span className="font-medium">Deploy beneficiary gnosis safe</span>
          </p>
          <Button>Deploy</Button>
        </div>
      </div> */}
    </main>
  );
};

export default Page;
