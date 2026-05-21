import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { _AuthApi } from "api/auth";

const MobileNavBar = ({
  pages,
  t,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const closeDrawer = () => handleDrawerToggle(false);

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  }));

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor={"left"}
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 350,
            maxWidth: "100dvw",
            backgroundColor: "background.paper",
            padding: 2,
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {pages.slice(0, 2).map((page) => (
            <ListItem key={page.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  page.onClick();
                  closeDrawer();
                }}
              >
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ))}

          {pages[2] && (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  pages[2].onClick();
                  closeDrawer();
                }}
              >
                <ListItemText primary={pages[2].label} />
              </ListItemButton>
            </ListItem>
          )}
        </List>

        <Box
          sx={{ display: { xs: "block", lg: "none" }, mt: "auto", mx: "10px" }}
        >
          {!_AuthApi.getToken() && (
            <Button variant="contained" sx={{ padding: 0, width: "100%" }}>
              <Link
                to="/login"
                onClick={closeDrawer}
                style={{
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                  fontSize: { xs: "10px", sm: "14px" },
                  padding: "8px 12px",
                  width: "100%",
                }}
              >
                {t("sign in")}
              </Link>
            </Button>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNavBar;
