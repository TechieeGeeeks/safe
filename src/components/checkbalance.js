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

export function CheckBalance({
  addressOwnerSafe,
  addressBobSafe,
  addressCarolSafe,
  addressDaveSafe,
  addressERC20,
  addressEncryptedERC20,
}) {

  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const [ownerSafeBalance, setOwnerSafeBalance] = useState("");
  const [bobSafeBalance, setBobSafeBalance] = useState("");
  const [carolSafeBalance, setCarolSafeBalance] = useState("");
  const [daveSafeBalance, setDaveSafeBalance] = useState("");
  const [approval, setApproval] = useState("");
  const [encryptedERC20Balance, setEncryptedERC20Balance] = useState("");

  // const addressOwnerSafe = "0xD543bA793b37ebB2e91F259ff842591F8b615c44";
  // const addressBobSafe = "0x0FFC127F9e4fFBbf9086602905204Ea7cF5B5A97";
  // const addressCarolSafe = "0x5B3A40338d7ccA4f551e523543360ADa17b9AaB4";
  // const addressDaveSafe = "0x3CfA76a8eE3DADE60dcEaA0D412E7EDA00A6ab8f";
  // const addressERC20 = "0xa095308F69c5e9076818D0530d1b89b31497CF5E";
  // const addressEncryptedERC20 = "0xA13cB51D908d61cd8e65E8B4f2Ccc4776e725A5f";

  const getContracts = async () => {
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    const erc20 = new Contract(addressERC20, erc20abi, signer);

    try {
      const ownerSafeBalance = await erc20.balanceOf(addressOwnerSafe);
      const bobSafeBalance = await erc20.balanceOf(addressBobSafe);
      const carolSafeBalance = await erc20.balanceOf(addressCarolSafe);
      const daveSafeBalance = await erc20.balanceOf(addressDaveSafe);
      const approval = await erc20.getallowance(
        addressOwnerSafe,
        addressEncryptedERC20
      );
      const encryptedERC20Balance = await erc20.balanceOf(
        addressEncryptedERC20
      );

      console.log("Owner Safe Balance: ", ownerSafeBalance.toString());
      console.log("Bob Safe Balance: ", bobSafeBalance.toString());
      console.log("Carol Safe Balance: ", carolSafeBalance.toString());
      console.log("Dave Safe Balance: ", daveSafeBalance.toString());
      console.log("Approval: ", approval.toString());
      console.log("encryptedERC20Balance: ", encryptedERC20Balance.toString());

      setOwnerSafeBalance(ownerSafeBalance.toString());
      setBobSafeBalance(bobSafeBalance.toString());
      setCarolSafeBalance(carolSafeBalance.toString());
      setDaveSafeBalance(daveSafeBalance.toString());
      setApproval(approval.toString());
      setEncryptedERC20Balance(encryptedERC20Balance.toString());
    } catch (error) {
      console.error("Error checking balance: ", error);
    }
  };

  const checkBalance = async () => {
    
    const provider = await w0?.getEthersProvider();
    const signer = await provider?.getSigner();
    try {
      const erc20 = new Contract(addressERC20, erc20abi, signer);
      const ownerSafeBalance = await erc20.balanceOf(addressOwnerSafe);
      const bobSafeBalance = await erc20.balanceOf(addressBobSafe);
      const carolSafeBalance = await erc20.balanceOf(addressCarolSafe);
      const daveSafeBalance = await erc20.balanceOf(addressDaveSafe);
      const approval = await erc20.getallowance(
        addressOwnerSafe,
        addressEncryptedERC20
      );
      const encryptedERC20Balance = await erc20.balanceOf(
        addressEncryptedERC20
      );

      console.log("Owner Safe Balance: ", ownerSafeBalance.toString());
      console.log("Bob Safe Balance: ", bobSafeBalance.toString());
      console.log("Carol Safe Balance: ", carolSafeBalance.toString());
      console.log("Dave Safe Balance: ", daveSafeBalance.toString());
      console.log("Approval: ", approval.toString());
      console.log("encryptedERC20Balance: ", encryptedERC20Balance.toString());

      setOwnerSafeBalance(ownerSafeBalance.toString());
      setBobSafeBalance(bobSafeBalance.toString());
      setCarolSafeBalance(carolSafeBalance.toString());
      setDaveSafeBalance(daveSafeBalance.toString());
      setApproval(approval.toString());
      setEncryptedERC20Balance(encryptedERC20Balance.toString());
    } catch (error) {
      console.error("Error checking balance: ", error);
    }
  };

  useEffect(() => {
    if (authenticated && ready && w0) {
      getContracts();
    }
  }, [w0, ready, authenticated]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full min-w-[200px]" variant='outline' onClick={checkBalance}>
          Check Balance
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Balance Information</AlertDialogTitle>
          <AlertDialogDescription className="text-black">
            <p>
              <strong>Owner Safe Balance:</strong> {ownerSafeBalance}
            </p>
            <p>
              <strong>Bob Safe Balance:</strong> {bobSafeBalance}
            </p>
            <p>
              <strong>Carol Safe Balance:</strong> {carolSafeBalance}
            </p>
            <p>
              <strong>Dave Safe Balance:</strong> {daveSafeBalance}
            </p>
            <p>
              <strong>Approval:</strong> {approval}
            </p>
            <p>
              <strong>Encrypted ERC20 Balance:</strong> {encryptedERC20Balance}
            </p>
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
