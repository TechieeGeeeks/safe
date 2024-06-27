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
import { useWallets } from "@privy-io/react-auth";
import { ContractFactory } from "ethers";
import React from "react";

const Page = () => {
  const { wallets } = useWallets();
  const w0 = wallets[0];

  const deployErc20Token = async () => {
    try {
      const provider = await w0?.getEthersProvider();
      const signer = await provider?.getSigner();
      // const contractOwnerSafe = await deploySafe(signer);
      // const contractBobSafe = await deploySafe(signer);
      // const contractCarolSafe = await deploySafe(signer);
      // const contractDaveSafe = await deploySafe(signer);
      const contractERC20 = await deployERC20(signer);
      console.log(contractERC20.contractAddress)
      const contractEncryptedERC20 = await deployEncryptedERC20(
        signer,
        contractERC20.contractAddress
      );

      console.log(
        // contractOwnerSafe,
        // contractBobSafe,
        // contractCarolSafe,
        // contractDaveSafe,
        contractERC20,
        contractEncryptedERC20
      );
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
    console.log(address)
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
