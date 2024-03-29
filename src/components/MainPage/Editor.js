import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";

const ImageBoxWithBorder = styled(Box)({
  position: "relative",
  display: "inline-block",
  borderRadius: "20px",
  overflow: "hidden",
  "& img": {
    display: "block",
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100vh",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "10px",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(178,103,243,0.6), rgba(234,104,173,0.6), rgba(255,162,121,0.6))",
    zIndex: 1,
  },
});

function Editor() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingLeft: "24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <ImageBoxWithBorder>
        {/* Image */}
        <img src="/Editor.png" alt="Descriptive Alt Text" />
      </ImageBoxWithBorder>
      {/* Box to wrap the button for styling */}
      <Box sx={{ paddingTop: "30px", width: "fit-content", margin: "auto" }}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FEFEFE",
            backgroundImage:
              "linear-gradient(45deg, rgba(79, 67, 184, .8), #4f43b8)",
            borderRadius: "10px",
            padding: "16px 28px",
            textTransform: "none",
            "& .MuiButton-label": {
              display: "flex",
              alignItems: "center",
            },
            "& .MuiSvgIcon-root": {
              marginRight: "8px",
            },
          }}
          href="https://github.com/derand-protocol/derand-contracts/blob/main/contracts/examples/DeRandConsumerExample.sol"
          target="_blank"
        >
          <GitHubIcon /> Full Example on GitHub
        </Button>
      </Box>
    </div>
  );
}

export default Editor;
