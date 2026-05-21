import React from "react";
import { Typography } from "@mui/material";
import logo from "assets/images/Logo.svg";

function LogoMobile() {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        mx: "auto",
        display: { xs: "flex", lg: "none" },
        flexGrow: 0,
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <img
        loading="lazy"
        alt="Go Creative Solutions logo"
        style={{
          width: "15vw",
          minWidth: "92px",
          display: "block",
          objectFit: "contain",
          background: "transparent",
        }}
        src={logo}
      />
    </Typography>
  );
}

export default LogoMobile;
