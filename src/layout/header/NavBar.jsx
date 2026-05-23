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
        backgroundImage:"linear-gradient(90deg, rgba(254, 88, 42, 0.70) 0%, rgba(216, 75, 36, 0.70) 18%, rgba(138, 45, 24, 0.70) 52%, rgba(23, 7, 7, 0.70) 100%)",
        boxShadow: "none",
        backdropFilter:"blur(10px)",
        zIndex: 10,
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
