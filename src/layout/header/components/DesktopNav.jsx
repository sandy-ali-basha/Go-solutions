import React from "react";
import { Box, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

function DesktopNav({ pages }) {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", lg: "flex" },
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        {pages.map((page) => (
          <Button
            key={page.id}
            onClick={page.onClick}
            sx={{
              my: 2,
              color: "white",
              display: "block",
            }}
          >
            {page.label}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default DesktopNav;
