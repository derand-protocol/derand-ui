import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  useTheme,
} from "@mui/material";
import { useAccount, useChainId, useSwitchChain, useDisconnect } from "wagmi";
import { getAccount } from "@wagmi/core";
import "../../modal/style.css";
import { handleDeRandFeeManager } from "../../../helper/handleDeRandFeeManagerTx";
import { config } from "../../walletConnect/wagmi";
import { checkApprove } from "../../../helper/checkApprove";
import { approve } from "../../../helper/approve";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const RenderDepositFeesForm = () => {
  const [formValues, setFormValues] = useState({
    dAppContract: "",
    executor: "",
    PIONAmount: "",
    chainId: "",
  });
  const [isApproved, setIsApproved] = useState(false);
  const { isConnected, chainId, address } = useAccount();
  const [approveLoading, setApproveLoading] = useState(false);
  const [depositLoading, setDepositLoading] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const account = getAccount(config);
  const validChain = useChainId({ config });
  const [isRightChain, setIsRightChain] = useState(false);
  const { open } = useWeb3Modal();
  const { switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();

  const theme = useTheme();

  const handleFormChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const handleSendTransaction = async () => {
    setDepositLoading(true);
    await handleDeRandFeeManager(formValues);
    setDepositLoading(false);
    await handleCheckApprove();
  };

  const handleCheckApprove = async () => {
    const res = await checkApprove();
    setAllowance(res);
    if (Number(res) === 0 || Number(res) < Number(formValues.PIONAmount)) {
      setIsApproved(false);
    } else if (res >= Number(formValues.PIONAmount)) {
      setIsApproved(true);
    }
  };

  const handleApprove = async () => {
    if (!Number(formValues.PIONAmount)) return;
    setApproveLoading(true);
    await approve(formValues);
    await handleCheckApprove();
    setApproveLoading(false);
  };

  useEffect(() => {
    if (!account.address) return;
    handleCheckApprove();
  }, [account.address]);

  useEffect(() => {
    if (!account.address) return;
    setIsRightChain(chainId === validChain);
  }, [chainId, validChain, account.address]);

  useEffect(() => {
    if (!Number(formValues.PIONAmount) || !account.address) {
      return;
    }
    setIsApproved(allowance >= Number(formValues.PIONAmount));
  }, [formValues.PIONAmount]);

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      color: "#E4E4E4",
      "& fieldset": { borderColor: "#454D93" },
      "&:hover fieldset": { borderColor: "#454D93" },
      "&.Mui-focused fieldset": { borderColor: "#454D93" },
    },
    "& .MuiInputLabel-root": { color: "#E6E6E6" },
    width: "100%", // Responsive width
    maxWidth: "407px", // Max width for larger screens
    m: 1,
  };

  const formControlStyle = {
    m: 1,
    width: "100%", // Responsive width
    color: "#E4E4E4",
    maxWidth: "407px", // Max width for larger screens
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#454D93" },
      "&:hover fieldset": { borderColor: "#454D93" },
      "&.Mui-focused fieldset": { borderColor: "#454D93" },
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        width: "100%", // Use full width of the container
        padding: theme.spacing(2), // Add some padding
        boxSizing: "border-box", // Include padding in width calculation
      }}
    >
      {/* Form fields */}
      <TextField
        label="dApp Contract"
        variant="outlined"
        value={formValues.dAppContract}
        onChange={handleFormChange("dAppContract")}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
        placeholder="dApp Contract"
      />
      <FormControl sx={formControlStyle}>
        <InputLabel shrink sx={{ color: "#E6E6E6" }}>
          Executor
        </InputLabel>
        <Select
          value={formValues.executor}
          label="Executor"
          onChange={handleFormChange("executor")}
          sx={{ color: "#E4E4E4" }}
          MenuProps={{
            PaperProps: { style: { maxHeight: "50vh", color: "#454D93" } },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"executor1"}>Executor 1</MenuItem>
          <MenuItem value={"executor2"}>Executor 2</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="PION Amount"
        variant="outlined"
        value={formValues.PIONAmount}
        onChange={handleFormChange("PIONAmount")}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Chain ID"
        variant="outlined"
        value={formValues.chainId}
        onChange={handleFormChange("chainId")}
        sx={textFieldStyle}
        InputLabelProps={{ shrink: true }}
        placeholder="Chain Id"
      />
      {!isConnected && (
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
          onClick={() => open()}
        >
          Connect Wallet
        </Button>
      )}

      {isConnected && !isApproved && isRightChain && (
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
          onClick={() => handleApprove()}
        >
          {approveLoading ? "Approving..." : "Approve"}
          <img
            alt="disconnect"
            className="disconnect-btn"
            src="/logout.png"
            height="20px"
            width="20px"
            onClick={() => disconnect()}
          />
        </Button>
      )}

      {!isRightChain && isConnected && (
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
          <img
            alt="disconnect"
            className="disconnect-btn"
            src="/logout.png"
            height="20px"
            width="20px"
            onClick={() => disconnect()}
          />
        </Button>
      )}

      {isConnected && isApproved && isRightChain && (
        <Button
          variant="contained"
          sx={{
            mt: 2,
            position: "relative",
            width: "100%",
            maxWidth: "407px",
            height: "50px",
            bgcolor: "#413989",
            "&:hover": {
              bgcolor: "#413989",
              boxShadow: "none",
            },
          }}
          onClick={() => handleSendTransaction()}
        >
          {depositLoading ? "Deposit..." : "Deposit"}
          <img
            alt="disconnect"
            className="disconnect-btn"
            src="/logout.png"
            height="20px"
            width="20px"
            onClick={() => disconnect()}
          />
        </Button>
      )}
    </Box>
  );
};

export default RenderDepositFeesForm;
