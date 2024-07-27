import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom styled Box with gradient border
const GradientBorderBox = styled(Box)({
  height: "100%",
  borderRadius: "16px",
  backgroundImage: "linear-gradient(223deg, #fefefe, #000 49%, #fefefe)",
  backgroundColor: "#1c1b23",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px",
});

// Box for content
const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  background: "#1F1F2B",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  maxHeight: "200px",
  overflowY: "hidden",
  padding: "32px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "16px",
    overflowY: "scroll",
  },
  "& .title": {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  "& .body": {
    fontSize: "1rem",
    lineHeight: "24px",
    textAlign: "justify",
    height: "100px",
    padding: "32px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.750rem",
      lineHeight: "20px",
    },
  },
}));

// For Firefox and other browsers supporting scrollbar-width
/*
* {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1; // thumb and track color
}
*/

function Features() {
  const boxesContent = [
    {
      title: "Chain-Agnostic",
      body:
        "DeRand is built on top of the Muon network, so it generates random seeds off-chain in a decentralized way using Muon’s TSS network. Therefore, it can be used on any EVM or Non-EVM blockchain",
    },
    {
      title: "Easy Implementation",
      body:
        "Smart contract libraries and the protocol structure are compatible with other VRF platforms. Requires minimal code changes for developers",
    },
    {
      title: "Cost Efficient",
      body:
        "You only need to pay for the gas fee of the blockchain and the Muon network",
    },
    {
      title: "Permissionless, Modular & Flexible",
      body:
        "DeRand protocol is modular and flexible, allowing different parties to run different parts of the protocol. There is no central authority.",
    },
    {
      title: "Decentralized & Censorship Resistant",
      body:
        "100% decentralized and censorship-resistant, using Muon's TSS network to generate random numbers",
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      alignItems="center"
      sx={{
        paddingTop: "80px",
        width: "100%", // Default to full width
        maxWidth: { md: "80%", xl: "60%" }, // 80% width on medium devices and up
        margin: "0 auto", // Center the container
        zIndex: 2,
      }}
    >
      {boxesContent.map((box, index) => (
        <Grid item xs={12} sm={6} md={4} xl={4} key={index}>
          <GradientBorderBox>
            <ContentBox sx={{ overflowX: "hidden" }}>
              <Typography
                variant="h6"
                color="#FEFEFE"
                gutterBottom
                style={{ textAlign: "center", width: "90%" }}
                className="title"
                sx={{
                  fontSize: { xs: "1rem", sm: "1rem" }, // Adjust font size for different screen sizes
                }}
              >
                {box.title}
              </Typography>
              <Typography
                variant="body2"
                color="rgba(255, 255, 255, 0.60)"
                style={{
                  width: "100%",
                  textAlign: "center",
                  overflowX: "hidden",
                }}
                className="body"
              >
                {box.body}
              </Typography>
            </ContentBox>
          </GradientBorderBox>
        </Grid>
      ))}
    </Grid>
  );
}

export default Features;
