import { readContract } from "@wagmi/core";
import { config } from "../components/walletConnect/wagmi";
import { contractAddress } from "../constants/contractAddress";
import { getAccount } from "@wagmi/core";
import { pionAbi } from "../abi/pionAbi";
import BigNumber from "bignumber.js";

export function toBN(num) {
  return new BigNumber(num);
}

export const toWei = (amount, decimals = 18) => {
  const bnAmount = toBN(amount);
  if (bnAmount.isZero()) return 0;
  return bnAmount.multipliedBy(toBN(10).pow(decimals)).toNumber();
};

export const fromWei = (amount, decimals = 18) => {
  const bnAmount = toBN(amount);
  if (bnAmount.isZero()) return "0";
  return bnAmount.dividedBy(toBN(10).pow(decimals)).toString();
};

export const checkApprove = async () => {
  const account = getAccount(config);
  try {
    const result = await readContract(config, {
      abi: pionAbi,
      address: contractAddress.pion,
      functionName: "allowance",
      args: [account.address, contractAddress.deRandFeeManagerTestnet],
    });
    return fromWei(result);
  } catch {
    return 0;
  }
};
