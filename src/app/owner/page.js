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
  // let fhevmInstance;
  // useEffect(() => {
  //   async function fetchInstance() {
  //     fhevmInstance = await getInstance();
  //     console.log(fhevmInstance);
  //   }
  //   fetchInstance();
  // }, []);

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

      const fhevmInstance = await getInstance();
      const token = fhevmInstance.getPublicKey(addressEncryptedERC20) || {
        signature: "",
        publicKey: "",
      };
      console.log(token);

      toast.success(
        " Initializing Safe contract (setting up an owner of the safe)"
      );

      let fnSelector = "0x0d582f13";
      toast("Initializing Safe contract (setting up an owner of the safe");

      console.log(encryptedAddres);

      const ownerSafeContract = new Contract(addressOwnerSafe, safeabi, signer);
      try {
        const txn = await ownerSafeContract.execTransaction(
          addressOwnerSafe,
          0,
          fnSelector +
            defaultAbiCoder
              .encode(["string", "uint256"], [accountAddress, 1])
              .slice(2),
          0,
          1000000,
          0,
          1000000,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x"
        );
        await txn.wait(1);
        console.log(txn);
        toast.success("Owner safe initialization successful!");
        toast.success("Bob Needs to sign the transaction now!");
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      const bobSafeContract = new Contract(addressBobSafe, safeabi, signer);
      try {
        const txn = await bobSafeContract.execTransaction(
          addressBobSafe,
          0,
          fnSelector +
            defaultAbiCoder
              .encode(["string", "uint256"], [accountAddress, 1])
              .slice(2),
          0,
          1000000,
          0,
          1000000,
          addressBobSafe,
          addressBobSafe,
          "0x"
        );
        await txn.wait(1);
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
        await txn.wait(1);
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
        await txn.wait(1);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      toast.success("Providing tokens to safe contract");

      const erc20contract = new Contract(addressERC20, erc20abi, signer);
      try {
        const txn = await erc20contract.mint(addressOwnerSafe, 1000000);

        console.log(txn);
        await txn.wait(1);
      } catch (error) {
        console.log(error);
        toast.error("Error Occured!");
      }

      const encryptederc20Contract = new Contract(
        addressEncryptedERC20,
        encryptederc20abi,
        signer
      );

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

      toast.success(
        "Distributing 10_000, 30_000, 960_000 tokens to Bob, Carol, Dave safes respectively\n"
      );
      const amount = 1000000;
      const data1 = [addressBobSafe, fhevmInstance.encrypt32(10000)];
      const data2 = [addressCarolSafe, fhevmInstance.encrypt32(30000)];
      const data3 = [addressDaveSafe, fhevmInstance.encrypt32(960000)];
      const depositData = [data1, data2, data3];

      // // Encode the data
      const encodedData1 = defaultAbiCoder.encode(
        ["tuple(address,bytes)[]"],
        [depositData]
      );

      const encodedData2 = defaultAbiCoder.encode(
        ["uint256", "bytes"],
        [amount, encodedData1]
      );

      console.log(encodedData1, encodedData2);
      try {
        const txn = await ownerSafeContract.execTransaction(
          addressEncryptedERC20,
          0,
          fnSelector + encodedData2.slice(2), //doubt
          // "0xc6dad082",
          0,
          1000000,
          0,
          // 1000000,
          0,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x",
          { gasLimit: 7920027 }
        );
        console.log(txn);
        // await txn.wait(1);
      } catch (error) {
        console.log(error);
      }

      let claimFnSelector = "0x4e71d92d";
      try {
        const txn = await bobSafeContract.execTransaction(
          addressEncryptedERC20,
          0,
          claimFnSelector,
          // "0xc6dad082",
          0,
          1000000,
          0,
          // 1000000,
          0,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x"
        );
        console.log(txn);
        // await txn.wait(1);
      } catch (error) {
        console.log(error);
      }
      // console.log("here");

      try {
        const txn = await carelSafeContract.execTransaction(
          addressEncryptedERC20,
          0,
          claimFnSelector,
          // "0xc6dad082",
          0,
          1000000,
          0,
          // 1000000,
          0,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x"
        );
        console.log(txn);
        // await txn.wait(1);
      } catch (error) {
        console.log(error);
      }

      try {
        const txn = await daveSafeContract.execTransaction(
          addressEncryptedERC20,
          0,
          claimFnSelector,
          // "0xc6dad082",
          0,
          1000000,
          0,
          // 1000000,
          0,
          addressOwnerSafe,
          addressOwnerSafe,
          "0x"
        );
        console.log(txn);
        // await txn.wait(1);
      } catch (error) {
        console.log(error);
      }

      console.log(
        "Final ERC20 balance of Bob Safe: " +
          (await contractERC20.balanceOf(addressBobSafe))
      );
      console.log(
        "Final ERC20 balance of Carol Safe: " +
          (await contractERC20.balanceOf(addressCarolSafe))
      );
      console.log(
        "Final ERC20 balance of Dave Safe: " +
          (await contractERC20.balanceOf(addressDaveSafe))
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
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-6 items-center justify-center">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 2: </p>
            <p className="text-muted-foreground">Sign as Bob</p>
          </div>
          <div className="">
            <Button onClick={deployErc20Token} className="w-full">
              Sign
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
