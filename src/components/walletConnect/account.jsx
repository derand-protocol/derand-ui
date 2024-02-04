import { useAccount, useDisconnect, useChainId, useSwitchChain } from "wagmi";

import { Button } from "@mui/material";

import { shortenAddress } from ".";
import { config } from "./wagmi";

export function Account() {
  const { address, chainId } = useAccount();

  const { disconnect } = useDisconnect();
  const validChain = useChainId({ config });
  const isRightChain = chainId === validChain;
  const { switchChain } = useSwitchChain();
  return (
    <div className="account">
      {isRightChain && address && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
          }}
        >
          {shortenAddress(address)}
        </Button>
      )}
      {!isRightChain && address && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
          }}
          onClick={() => switchChain({ chainId: validChain })}
        >
          Switch Network
        </Button>
      )}
      <img
        alt="disconnect"
        className="disconnect-btn"
        src="/logout.png"
        height="20px"
        width="20px"
        onClick={() => disconnect()}
      />
    </div>
  );
}
