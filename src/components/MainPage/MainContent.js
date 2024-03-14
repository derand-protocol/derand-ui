import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MainContent() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleExploreClick = () => {
    navigate("/dapps");
  };

  const isTabletResolution = useMediaQuery(
    theme.breakpoints.between("sm", "lg")
  );

  const minHeightStyle = isTabletResolution ? "auto" : "100vh";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "90px",
        //paddingBottom: "90px",
        minHeight: minHeightStyle,
        position: "relative",
        zIndex: 2,
        width: "100%", // Full width
        //px: 4, // Padding left and right
      }}
    >
      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
          textAlign: "center",
          mb: 2, // Margin bottom for spacing
        }}
      >
        <Box
          component="span"
          sx={{
            color: "transparent",
            backgroundImage: "linear-gradient(#b267f3, #ea68ad 99%, #ffa279)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Decentralized, Chain-
          <Box
            component="span"
            sx={{
              backgroundImage:
                "linear-gradient(rgba(178, 103, 243, .97), #ea68ad 56%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            agnostic{" "}
          </Box>
        </Box>

        <Box component="span" sx={{ color: "white" }}>
          and <br />
          Verifiable Random Number Generator
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "12px", sm: "15px", md: "15px", lg: "17px" },
          color: "white",
          textAlign: "center",
          width: { xs: "100%", sm: "50%" },
          mb: 4, // 32px bottom margin
          px: { xs: 0, sm: 2 },
        }}
      >
        DeRand leverages{" "}
        <Link
          href="https://www.muon.net/"
          target="_blank"
          color="#6979F8"
          sx={{ textDecoration: "underline" }}
        >
          Muon
        </Link>{" "}
        decentralized TSS network to provide verifiable random numbers on any
        EVM and non-EVM blockchain.
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: 4 }, // Spacing between buttons
        }}
      >
        {/* Read The Docs Button */}
        <Button
          component={Link}
          href="https://medium.com/@DeRand_dev/derand-decentralized-chain-agnostic-verifiable-random-number-generator-120828265df7"
          target="_blank"
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
          }}
        >
          What is DeRand?
          <KeyboardArrowRightIcon
            fontSize="small"
            style={{ fillOpacity: "0.4", marginRight: "-12px" }}
          />
          <KeyboardArrowRightIcon
            fontSize="medium"
            style={{ fillOpacity: "0.7", marginRight: "-12px" }}
          />
          <KeyboardArrowRightIcon
            fontSize="medium"
            style={{ color: "#FEFEFE" }}
          />
        </Button>

        <Button
          onClick={handleExploreClick}
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
          }}
        >
          Explore dApps
        </Button>
      </Box>
    </Box>
  );
}

export default MainContent;
