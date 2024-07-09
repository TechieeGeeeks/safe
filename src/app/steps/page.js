"use client";
import { Button } from "@/components/ui/button";
import { encryptederc20abi, erc20abi, safeabi } from "@/contracts/data";
import { getInstance } from "@/utils/fhevm";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Contract } from "ethers";
import { defaultAbiCoder } from "ethers/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  buildSafeTransaction,
  buildSignatureBytes,
  safeApproveHash,
} from "@/utils/utility";
import { CheckBalance } from "@/components/checkbalance";
import { AddAddress } from "@/components/AddAddresses";
import { Cross, CrossIcon, X } from "lucide-react";

const Page = () => {
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const [showLogs, setShowLogs] = useState(false);
  const w0 = wallets[0];
  const [contractOwnerSafe, setContractOwnerSafe] = useState(null);
  const [contractBobSafe, setContractBobSafe] = useState(null);
  const [contractCarolSafe, setContractCarolSafe] = useState(null);
  const [contractDaveSafe, setContractDaveSafe] = useState(null);
  const [contractERC20, setContractERC20] = useState(null);
  const [contractEncryptedERC20, setContractEncryptedERC20] = useState(null);
  const [isAddressesVisible, setIsAddressesVisible] = useState(false);

  const [addressOwnerSafe, setAddressOwnerSafe] = useState(
    "0xD543bA793b37ebB2e91F259ff842591F8b615c44"
  );
  const [addressBobSafe, setAddressBobSafe] = useState(
    "0x0FFC127F9e4fFBbf9086602905204Ea7cF5B5A97"
  );
  const [addressCarolSafe, setAddressCarolSafe] = useState(
    "0x5B3A40338d7ccA4f551e523543360ADa17b9AaB4"
  );
  const [addressDaveSafe, setAddressDaveSafe] = useState(
    "0x3CfA76a8eE3DADE60dcEaA0D412E7EDA00A6ab8f"
  );
  const [addressERC20, setAddressERC20] = useState(
    "0xa095308F69c5e9076818D0530d1b89b31497CF5E"
  );
  const [addressEncryptedERC20, setAddressEncryptedERC20] = useState(
    "0xA13cB51D908d61cd8e65E8B4f2Ccc4776e725A5f"
  );

  const handleChange = (setter, e) => {
    console.log(e.target.value);
    setter(e.target.value);
  };

  // const addressOwnerSafe = "0xD543bA793b37ebB2e91F259ff842591F8b615c44";
  // const addressBobSafe = "0x0FFC127F9e4fFBbf9086602905204Ea7cF5B5A97";
  // const addressCarolSafe = "0x5B3A40338d7ccA4f551e523543360ADa17b9AaB4";
  // const addressDaveSafe = "0x3CfA76a8eE3DADE60dcEaA0D412E7EDA00A6ab8f";
  // const addressERC20 = "0xa095308F69c5e9076818D0530d1b89b31497CF5E";
  // const addressEncryptedERC20 = "0xA13cB51D908d61cd8e65E8B4f2Ccc4776e725A5f";

  const getContracts = async () => {
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    const ownerSafe = new Contract(addressOwnerSafe, safeabi, signer);
    const bobSafe = new Contract(addressBobSafe, safeabi, signer);
    const carolSafe = new Contract(addressCarolSafe, safeabi, signer);
    const daveSafe = new Contract(addressDaveSafe, safeabi, signer);
    const erc20 = new Contract(addressERC20, erc20abi, signer);
    const encryptedERC20 = new Contract(
      addressEncryptedERC20,
      encryptederc20abi,
      signer
    );

    setContractOwnerSafe(ownerSafe);
    setContractBobSafe(bobSafe);
    setContractCarolSafe(carolSafe);
    setContractDaveSafe(daveSafe);
    setContractERC20(erc20);
    setContractEncryptedERC20(encryptedERC20);
  };

  useEffect(() => {
    if (authenticated && ready && w0) {
      getContracts();
    }
  }, [w0, ready, authenticated]);

  const logs = {
    addressOwnerSafe,
    addressBobSafe,
    addressCarolSafe,
    addressDaveSafe,
    addressERC20,
    addressEncryptedERC20,
  };

  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(setShowLogs(true)), 10000)
    );
  const handleDeploy = () => {
    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        console.log(data);
        return "Deployed Successfully!";
      },
      error: "Error",
    });
  };

  const mintTokens = async () => {
    try {
      const provider = await w0?.getEthersProvider();
      const signer = await provider?.getSigner();
      const mintContract = new Contract(addressERC20, erc20abi, signer);
      const txn = await mintContract.mint(addressOwnerSafe, 1000000000000000, {
        gasLimit: 7920027,
      });
      console.log("Transaction hash:", txn.hash);
      await txn.wait(1);
      toast.success("Minting successfull!");
      console.log("Minting 1000000000000000 tokens to Owner Safe successful!");
    } catch (error) {
      console.error(
        "Minting 1000000000000000 tokens to Owner Safe failed:",
        error
      );
    }
  };

  const approvalToEncryptedERC = async () => {
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    try {
      // const signature = await signer._signTypedData(domain, types, value);
      // console.log(signature);

      // console.log(signature);

      let fnSelector = "0x095ea7b3";

      let txData =
        fnSelector +
        defaultAbiCoder
          .encode(
            ["address", "uint256"],
            [addressEncryptedERC20, 1000000000000000]
          )
          .slice(2);

      let txnhash = await contractOwnerSafe.getTransactionHash(
        addressERC20,
        0,
        txData,
        0,
        1000000,
        0,
        1000000,
        addressOwnerSafe,
        addressOwnerSafe,
        await contractOwnerSafe.nonce(),
        { gasLimit: 7920027 }
      );

      const txn1 = {
        to: addressERC20,
        value: 0,
        data: txData,
        operation: 0,
        safeTxGas: 1000000,
        baseGas: 0,
        gasPrice: 1000000,
        gasToken: addressOwnerSafe,
        refundReceiver: w0.address,
        nonce: await contractOwnerSafe.nonce(),
      };

      const tx = buildSafeTransaction(txn1);
      const signatureBytes = buildSignatureBytes([
        await safeApproveHash(signer, contractOwnerSafe, tx, true),
      ]);
      console.log(await signer.getAddress());
      console.log(signatureBytes);
      console.log(contractOwnerSafe);
      const dummyAbi = [
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "dataHash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "signatures",
              type: "bytes",
            },
          ],
          name: "checkSignatures",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
      ];
      const owners = await contractOwnerSafe.getOwners();
      console.log(owners);
      const newCntract = new Contract(addressOwnerSafe, dummyAbi, signer);

      const checksignature = await newCntract.checkSignatures(
        txnhash,
        signatureBytes
      );
      console.log(checksignature);
      const txn = await contractOwnerSafe.execTransaction(
        addressERC20,
        0,
        fnSelector +
          defaultAbiCoder
            .encode(
              ["address", "uint256"],
              [addressEncryptedERC20, 10000000000]
            )
            .slice(2),
        0,
        1000000,
        0,
        1000000,
        addressOwnerSafe,
        await w0.address,
        signatureBytes,
        { gasLimit: 10000000 }
      );
      console.log("Transaction hash:", txn.hash);
      await txn.wait(1);
      console.log("Approval to EncryptedERC20 successful!");
    } catch (error) {
      console.error("Approval to EncryptedERC20 failed:", error);
    }
  };

  const depositAndDistribute = async () => {
    //take 3 inputs: prices
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    console.log("\n 3) Deposit and distribute\n");
    console.log(
      "Distributing 10_000, 30_000, 960_000 tokens to Bob, Carol, Dave safes respectively\n"
    );
    let fnSelector = "0xf98aa085";

    const amount = 1000000;
    const fhevmInstance = await getInstance();
    const token = fhevmInstance.getPublicKey(addressEncryptedERC20) || {
      signature: "",
      publicKey: "",
    };
    console.log(token);

    const data1 = [addressBobSafe, fhevmInstance.encrypt32(10000)];
    const data2 = [addressCarolSafe, fhevmInstance.encrypt32(30000)];
    const data3 = [addressDaveSafe, fhevmInstance.encrypt32(960000)];

    // Create an array of depositstruct
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

    // console.log(await contractOwnerSafe.checkSignatures(txnhash,signatureBytes));

    let txnhash2 = await contractOwnerSafe.getTransactionHash(
      addressEncryptedERC20,
      0,
      fnSelector + encodedData2.slice(2),
      // "0xc6dad082",
      0,
      1000000,
      0,
      // 1000000,
      0,
      w0.address,
      addressOwnerSafe,
      await contractOwnerSafe.nonce()
    );

    const txn2 = {
      to: addressEncryptedERC20,
      value: 0,
      data: fnSelector + encodedData2.slice(2),
      operation: 0,
      safeTxGas: 1000000,
      baseGas: 0,
      gasPrice: 0,
      gasToken: w0.address,
      refundReceiver: addressOwnerSafe,
      nonce: await contractOwnerSafe.nonce(),
    };

    const tx2 = buildSafeTransaction(txn2);
    const signatureBytes2 = buildSignatureBytes([
      await safeApproveHash(signer, contractOwnerSafe, tx2, true),
    ]);

    try {
      // const txn = await contractOwnerSafe.setup([this.signers.alice.getAddress()], 0, this.signers.alice.getAddress(), "0x", this.signers.alice.getAddress(), this.signers.alice.getAddress(), 0, this.signers.alice.getAddress());
      // const txn = await contractOwnerSafe.addOwnerWithThreshold(this.signers.alice.getAddress(), 1);
      const txn = await contractOwnerSafe.execTransaction(
        addressEncryptedERC20,
        0,
        fnSelector + encodedData2.slice(2),
        // "0xc6dad082",
        0,
        1000000,
        0,
        // 1000000,
        0,
        w0.address,
        addressOwnerSafe,
        signatureBytes2,
        { gasLimit: 10000000 }
      );
      console.log("Transaction hash:", txn.hash);
      await txn.wait(1);
      console.log("Wrap and distribute to receiver safes successful!");
    } catch (error) {
      console.error("Wrap and distribute to receiver safes failed:", error);
    }
  };

  const bobTransaction = async () => {
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    console.log(
      "ERC20 tokens held by Encrypted20 contract: " +
        (await contractERC20.balanceOf(addressEncryptedERC20)) +
        "\n"
    );

    let claimFnSelector = "0x4e71d92d";

    let txnhash3 = await contractOwnerSafe.getTransactionHash(
      addressEncryptedERC20,
      0,
      claimFnSelector,
      // "0xc6dad082",
      0,
      1000000,
      0,
      // 1000000,
      0,
      w0.address,
      addressOwnerSafe,
      await contractOwnerSafe.nonce()
    );

    const txn3 = {
      to: addressEncryptedERC20,
      value: 0,
      data: claimFnSelector,
      operation: 0,
      safeTxGas: 1000000,
      baseGas: 0,
      gasPrice: 0,
      gasToken: w0.address,
      refundReceiver: addressOwnerSafe,
      nonce: await contractOwnerSafe.nonce(),
    };

    const tx3 = buildSafeTransaction(txn3);
    const signatureBytes3 = buildSignatureBytes([
      await safeApproveHash(signer, contractBobSafe, tx3, true),
    ]);

    // console.log(await contractBobSafe.connect(this.signers.bob).checkSignatures(txnhash3,signatureBytes3));

    try {
      const txn = await contractBobSafe.execTransaction(
        addressEncryptedERC20,
        0,
        claimFnSelector,
        // "0xc6dad082",
        0,
        1000000,
        0,
        // 1000000,
        0,
        w0.address,
        addressOwnerSafe,
        signatureBytes3,
        { gasLimit: 10000000 }
      );
      console.log("Transaction hash:", txn.hash);
      await txn.wait(1);
      console.log("Claim by Bob safe successful!");
    } catch (error) {
      console.error("Claim by Bob safe failed:", error);
    }
  };

  const carolTransaction = async () => {
    let fnSelector = "0xf98aa085";
    let claimFnSelector = "0x4e71d92d";
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    let txnhash4 = await contractOwnerSafe.getTransactionHash(
      addressERC20,
      0,
      fnSelector +
        defaultAbiCoder
          .encode(["address", "uint256"], [addressEncryptedERC20, 1000000])
          .slice(2),
      0,
      1000000,
      0,
      1000000,
      addressOwnerSafe,
      w0.address,
      await contractOwnerSafe.nonce()
    );

    const txn1 = {
      to: addressERC20,
      value: 0,
      data:
        fnSelector +
        defaultAbiCoder
          .encode(["address", "uint256"], [addressEncryptedERC20, 1000000])
          .slice(2),
      operation: 0,
      safeTxGas: 1000000,
      baseGas: 0,
      gasPrice: 1000000,
      gasToken: addressOwnerSafe,
      refundReceiver: w0.address,
      nonce: await contractOwnerSafe.nonce(),
    };

    const tx = buildSafeTransaction(txn1);
    const signatureBytes4 = buildSignatureBytes([
      await safeApproveHash(signer, contractCarolSafe, tx, true),
    ]);

    try {
      const txn = await contractCarolSafe.execTransaction(
        addressEncryptedERC20,
        0,
        claimFnSelector,
        // "0xc6dad082",
        0,
        1000000,
        0,
        // 1000000,
        0,
        w0.address,
        addressOwnerSafe,
        signatureBytes4,
        { gasLimit: 10000000 }
      );
      console.log("Transaction hash:", txn.hash);
      await txn.wait(1);
      console.log("Claim by Carol safe successful!");
    } catch (error) {
      console.error("Claim by Carol safe failed:", error);
    }
  };

  const daveTransaction = async () => {
    let fnSelector = "0xf98aa085";
    let claimFnSelector = "0x4e71d92d";
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    let txnhash5 = await contractOwnerSafe.getTransactionHash(
      addressERC20,
      0,
      fnSelector +
        defaultAbiCoder
          .encode(["address", "uint256"], [addressEncryptedERC20, 1000000])
          .slice(2),
      0,
      1000000,
      0,
      1000000,
      addressOwnerSafe,
      w0.address,
      await contractOwnerSafe.nonce()
    );

    const txn5 = {
      to: addressERC20,
      value: 0,
      data:
        fnSelector +
        defaultAbiCoder
          .encode(["address", "uint256"], [addressEncryptedERC20, 1000000])
          .slice(2),
      operation: 0,
      safeTxGas: 1000000,
      baseGas: 0,
      gasPrice: 1000000,
      gasToken: addressOwnerSafe,
      refundReceiver: w0.address,
      nonce: await contractOwnerSafe.nonce(),
    };

    const tx5 = buildSafeTransaction(txn5);
    const signatureBytes5 = buildSignatureBytes([
      await safeApproveHash(signer, contractDaveSafe, tx5, true),
    ]);

    try {
      const txn = await contractDaveSafe.execTransaction(
        addressEncryptedERC20,
        0,
        claimFnSelector,
        // "0xc6dad082",
        0,
        1000000,
        0,
        // 1000000,
        0,
        w0.address,
        addressOwnerSafe,
        signatureBytes5,
        { gasLimit: 10000000 }
      );
      console.log("Transaction hash:", txn.hash);
      await txn.wait(1);
      console.log("Claim by Dave safe successful!");
    } catch (error) {
      console.error("Claim by Dave safe failed:", error);
    }
  };
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
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
    });
  }, []);

  return (
    <main className="md:p-8 p-2 px-6 flex flex-col items-center gap-3 justify-center w-full">
      <div className="max-w-6xl w-full flex flex-col justify-between gap-6">
        {/* <div className="flex justify-between items-center pb-6 mt-14">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Check Balance </p>
            <p className="text-muted-foreground">Check Balance</p>
          </div>
        </div> */}

        <div className="flex items-center justify-between border-b pb-6 mt-14">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Owner&apos;s Procedure </p>
          </div>
          <div className="">
            <CheckBalance
              addressBobSafe={addressBobSafe}
              addressCarolSafe={addressCarolSafe}
              addressDaveSafe={addressDaveSafe}
              addressERC20={addressERC20}
              addressEncryptedERC20={addressEncryptedERC20}
              addressOwnerSafe={addressOwnerSafe}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 1: </p>
            <p className="text-muted-foreground">
              Add ERC20 contract addresses
            </p>
          </div>
          <div className="">
            {isAddressesVisible ? (
              <div
                className="border rounded-full p-3 cursor-pointer"
                onClick={() => setIsAddressesVisible(false)}
              >
                <X />
              </div>
            ) : (
              <Button
                onClick={() => {
                  setIsAddressesVisible(true);
                }}
                className="w-full min-w-[200px]"
              >
                Add Addresses
              </Button>
            )}
          </div>
        </div>

        {isAddressesVisible && (
          <div className="space-y-3">
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
                  onChange={(e) =>
                    handleChange(data.setAddressEncryptedERC20, e)
                  }
                  className="w-full bg-muted border p-2"
                />
              </label>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between border-b pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 2: </p>
            <p className="text-muted-foreground">
              Approval to encrypted ERC(1000000 approval)
            </p>
          </div>
          <div className="">
            <Button
              onClick={approvalToEncryptedERC}
              className="w-full min-w-[200px]"
            >
              Approval
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 3: </p>
            <p className="text-muted-foreground">Deposit & distribute</p>
          </div>
          <div className="">
            <Button
              onClick={depositAndDistribute}
              className="w-full min-w-[200px]"
            >
              Deposit & Distribute
            </Button>{" "}
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Beneficiary Procedure </p>
          </div>
          <div className="">
            <CheckBalance
              addressBobSafe={addressBobSafe}
              addressCarolSafe={addressCarolSafe}
              addressDaveSafe={addressDaveSafe}
              addressERC20={addressERC20}
              addressEncryptedERC20={addressEncryptedERC20}
              addressOwnerSafe={addressOwnerSafe}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 4: </p>
            <p className="text-muted-foreground">Bob&apos;s Claim</p>
          </div>
          <div className="">
            <Button onClick={bobTransaction} className="w-full min-w-[200px]">
              Claim
            </Button>{" "}
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 5: </p>
            <p className="text-muted-foreground">Carol&apos;s Claim</p>
          </div>
          <div className="">
            <Button onClick={carolTransaction} className="w-full min-w-[200px]">
              Claim
            </Button>{" "}
          </div>
        </div>

        <div className="flex items-center justify-between pb-6">
          <div className="col-span-5">
            <p className="font-semibold text-xl"> Step 6: </p>
            <p className="text-muted-foreground">Dave&apos;s Claim</p>
          </div>
          <div className="">
            <Button onClick={daveTransaction} className="min-w-[200px]">
              Claim
            </Button>{" "}
          </div>
        </div>
      </div>
      {/* <div className="mt-9 w-full">
        <p>Logs: </p>
        <div>
          {showLogs && (
            <div>
              {Object.entries(logs).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}</strong>: {value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div> */}
    </main>
  );
};

export default Page;
