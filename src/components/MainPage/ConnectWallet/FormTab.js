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
    executor: "executor1",
    PIONAmount: "",
    chainId: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
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
    const isValidDAppContract = /^0x[a-fA-F0-9]{40}$/.test(formValues.dAppContract);
    const isValidPIONAmount = !isNaN(formValues.PIONAmount) && Number(formValues.PIONAmount) > 0;
    const isValidChainId = /^[1-9]\d*$/.test(formValues.chainId);
    const isValid = isValidDAppContract && isValidPIONAmount && isValidChainId && isFormValid;
  
    if (!isValid) {
      alert("Please ensure all form fields are correctly filled.");
      return; 
    }
    setApproveLoading(true);
    try {
      await approve(formValues);
      await handleCheckApprove(); 
    } catch (error) {
      console.error("Approval failed:", error);
    } finally {
      setApproveLoading(false);
    }
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
    const validateForm = () => {
      const { dAppContract, PIONAmount, chainId } = formValues;
      const isValidDAppContract = /^0x[a-fA-F0-9]{40}$/.test(dAppContract);
      const isValidPIONAmount = !isNaN(PIONAmount) && Number(PIONAmount) > 0;
      const isValidChainId = /^[1-9]\d*$/.test(chainId);
      const isValidExecutor = formValues.executor.length > 0; 
  
      const isValid = isValidDAppContract && isValidPIONAmount && isValidChainId && isValidExecutor;
      setIsFormValid(isValid);

    };
    validateForm();
  }, [formValues]);
  
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      color: "#E4E4E4",
      "& fieldset": { borderColor: "#454D93" },
      "&:hover fieldset": { borderColor: "#454D93" },
      "&.Mui-focused fieldset": { borderColor: "#454D93" },
    },
    "& .MuiInputLabel-root": { color: "#E6E6E6" },
    width: "100%", 
    maxWidth: "407px", 
    m: 1,
  };

  const formControlStyle = {
    m: 1,
    width: "100%", 
    color: "#E4E4E4",
    maxWidth: "407px", 
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
        width: "100%", 
        padding: theme.spacing(2), 
        boxSizing: "border-box",
      }}
    >
      {/* Form fields */}
      <TextField
        label="dApp Contract"
        variant="outlined"
        value={formValues.dAppContract}
        onChange={handleFormChange("dAppContract")}
        error={formValues.dAppContract && !/^0x[a-fA-F0-9]{40}$/.test(formValues.dAppContract)}
        helperText={formValues.dAppContract && !/^0x[a-fA-F0-9]{40}$/.test(formValues.dAppContract) ? "Invalid dApp Contract format." : ""}
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
          sx={{
            color: "#E6E6E6",
            '& .MuiSvgIcon-root': {
              color: '#E4E4E4' 
            }
          }}
          MenuProps={{
            PaperProps: { style: { maxHeight: "50vh", color: "#454D93" } },
          }}
        >
          <MenuItem value="executor1">DeRand Executor</MenuItem>
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
          color: isFormValid ? '#FEFEFE' : 'grey',
          "&.Mui-disabled": {
            color: 'grey', 
            bgcolor: "#413989", 
          },
        }}
        onClick={() => open()}
        disabled={!isFormValid}
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

