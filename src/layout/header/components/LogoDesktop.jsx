import React from "react";
import { Typography } from "@mui/material";
import logo from "assets/images/Logo.svg";

function LogoDesktop() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: "none", lg: "flex" },
      }}
    >
      <img
        loading="lazy"
        alt="Go Creative Solutions logo"
        src={logo}
        style={{
          width: "7vw",
          minWidth: "116px",
          display: "block",
          objectFit: "contain",
          background: "transparent",
        }}
      />
    </Typography>
  );
}

export default LogoDesktop;
