import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./header/NavBar";
import messageIcon from "assets/images/icons/chat.svg";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Shared site navigation */}
      <NavBar />
      <main>{children}</main>
      {/* Shared site footer */}
      <Footer />
      {/* FLOATING MESSAGE ICON */}
      <Box
        component="img"
        src={messageIcon}
        alt="message"
        sx={{
          position: "fixed",
          right: { xs: 20, md: 50 },
          top: "80%",
          width: { xs: 45, md: 60 },
          zIndex:8888
        }}
      />
    </div>
  );
};

export default Layout;
