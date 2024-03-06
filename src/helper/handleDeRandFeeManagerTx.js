import { writeContract } from "@wagmi/core";
import { deRandFeeManagerAbi } from "../abi/deRandFeeManagerAbi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../components/walletConnect/wagmi";
import { contractAddress } from "../constants/contractAddress";
import { getAccount } from "@wagmi/core";
import { estimateGas } from "@wagmi/core";
import { parseEther } from "viem";

export const handleDeRandFeeManager = async (formValues) => {
  const { dAppContract, executor, chainId, PIONAmount } = formValues;
  const account = getAccount(config);
  if (!dAppContract || !executor || !chainId || !PIONAmount || !account)
    return false;

  try {
    const estimate = await estimateGas(config, {
      abi: deRandFeeManagerAbi,
      address: contractAddress.deRandFeeManagerTestnet,
      functionName: "depositForExecutor",
      args: [
        dAppContract,
        chainId,
        "0xa8cf36161298b8D6AE8959938391444D0294b2eA",
        parseEther(PIONAmount),
      ],
      account: account.address,
    });

    const result = await writeContract(config, {
      abi: deRandFeeManagerAbi,
      address: contractAddress.deRandFeeManagerTestnet,
      functionName: "depositForExecutor",
      args: [
        dAppContract,
        chainId,
        "0xa8cf36161298b8D6AE8959938391444D0294b2eA",
        parseEther(PIONAmount),
      ],
      // value: parseEther(PIONAmount),
      account: account,
      estimateGas: estimate,
    });
    const transactionReceipt = await waitForTransactionReceipt(config, {
      hash: result,
    });
  } catch (e) {
    console.log(e);
  }
};
