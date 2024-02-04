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
import { Account } from "../../walletConnect/account";
import { WalletOptions } from "../../walletConnect/wllaet-options";
import { useAccount } from "wagmi";
import Modal from "../../modal";
import { getAccount } from "@wagmi/core";
import "../../modal/style.css";
import { handleDeRandFeeManager } from "../../../helper/handleDeRandFeeManagerTx";
import { config } from "../../walletConnect/wagmi";
import { checkApprove } from "../../../helper/checkApprove";
import { approve } from "../../../helper/approve";

const RenderDepositFeesForm = () => {
  const [formValues, setFormValues] = useState({
    dAppContract: "",
    executor: "",
    PIONAmount: "",
    chainId: "",
  });
  const [isApproved, setIsApproved] = useState(false);
  const { isConnected } = useAccount();
  const [approveLoading, setApproveLoading] = useState(false);
  const [depositLoading, setDepositLoading] = useState(false);
  const [allowance, setAllowance] = useState(0);

  function ConnectWallet() {
    if (!isConnected) {
      return <WalletOptions />;
    }
  }

  const theme = useTheme();

  const handleFormChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const account = getAccount(config);

  const handleCheckApprove = async () => {
    const res = await checkApprove();
    setAllowance(res);
    if (res === 0 || res < Number(formValues.PIONAmount)) {
      setIsApproved(false);
    } else if (res >= Number(formValues.PIONAmount)) {
      setIsApproved(true);
    }
  };

  useEffect(() => {
    if (!Number(formValues.PIONAmount)) {
      return;
    }
    setIsApproved(allowance >= Number(formValues.PIONAmount));
  }, [formValues.PIONAmount]);

  const handleApprove = async () => {
    setApproveLoading(true);
    await approve(formValues);
    await handleCheckApprove();
    setApproveLoading(false);
  };

  useEffect(() => {
    if (!account.address) return;
    handleCheckApprove();
  }, [account.address]);

  const handleSendTransaction = async () => {
    setDepositLoading(true);
    await handleDeRandFeeManager(formValues);
    setDepositLoading(false);
    await handleCheckApprove();
  };

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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isConnected) setShowModal(false);
  }, [isConnected]);

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
          onClick={() => {
            setShowModal(true);
          }}
        >
          Connect Wallet
        </Button>
      )}

      {isConnected && !isApproved && !!Number(formValues.PIONAmount) && (
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
        </Button>
      )}

      {/* {isConnected && <Account />} */}

      {showModal && (
        <Modal
          title={"connect wallet"}
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <ConnectWallet />
        </Modal>
      )}
      {(isApproved || !formValues.PIONAmount) && (
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
          onClick={() => handleSendTransaction()}
        >
          {depositLoading ? "Deposit..." : "Deposit"}
        </Button>
      )}
    </Box>
  );
};

export default RenderDepositFeesForm;
