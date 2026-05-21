import { useState } from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { useNavBar } from "./useNavBar";
import MobileNavBar from "./MobileNavBar";
import LogoDesktop from "./components/LogoDesktop";
import LogoMobile from "./components/LogoMobile";
import DesktopNav from "./components/DesktopNav";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pages, t } = useNavBar();

  const handleDrawerToggle = (nextOpen) => {
    setMobileOpen((prevOpen) =>
      typeof nextOpen === "boolean" ? nextOpen : !prevOpen
    );
  };

  return (
    <AppBar
      position="relative"
      color="transparent"
      sx={{
        width: "100%",
        backgroundColor: "#170707",
        backgroundImage: "var(--brand-gradient-primary)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop />
          <LogoMobile />
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <MobileNavBar
              pages={pages}
              t={t}
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>

          <DesktopNav pages={pages} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
