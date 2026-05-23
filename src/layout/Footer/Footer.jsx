import React from "react";
import {
  Box,
  Container,
  Grid,
  InputBase,
  Typography,
  Link,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { useContactUs } from "hooks/contactUs/useContactUs";

// assets
import footerLogo from "assets/images/icons/arrow.svg";
// custom icons from assets
import phoneIcon from "assets/images/icons/phone.svg";
import emailIcon from "assets/images/icons/email.svg";
import locationIcon from "assets/images/icons/location.svg";
import instagramIcon from "assets/images/icons/socialmedia.svg";
import messageIcon from "assets/images/icons/chat.svg";
import AnimatedButton from "components/common/AnimatedButton";
import TypingText from "components/common/TypingText";

const inputStyles = {
  border: "1px solid #D9D9D9",
  borderRadius: "12px",
  px: 2,
  py: 1.5,
  transition: "all 0.3s",
  color: "#fff",
  "&:hover": {
    borderColor: "#FF5B2E",
    background: "#fff",
    color: "#000",
  },
};
function Footer() {
  const { t } = useTranslation("index");
  const { data } = useContactUs();

  const contactInfo = data?.data?.[0] || {};

  const contactItems = [
    {
      icon: phoneIcon,
      text: contactInfo?.phone || "+966 559 10820",
      href: `tel:${contactInfo?.phone}`,
    },
    {
      icon: emailIcon,
      text: contactInfo?.email || "Maa@Goeventsa.Com",
      href: `mailto:${contactInfo?.email}`,
    },
    {
      icon: instagramIcon,
      text: "@Goeventsa",
      href: contactInfo?.instagram || "#",
    },
    {
      icon: locationIcon,
      text: "Go Event Mangement, Riyadh KSA",
      href: "#",
    },
  ];

  return (
    <Container sx={{backdropFilter:"blur(20px)",borderRadius:"30px"}}>
      <Box
        component="footer"
        sx={{
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          pb: 4,
        }}
      >
        {/* FLOATING MESSAGE ICON */}
        <Box
          component="img"
          src={messageIcon}
          alt="message"
          sx={{
            position: "absolute",
            right: { xs: 20, md: 60 },
            top: "45%",
            width: { xs: 45, md: 60 },
          }}
        />

        <Container maxWidth="xl">
          {/* BOTTOM SECTION */}
          <Box
            sx={{
              mt: { xs: 10, md: 16 },
              position: "relative",
              zIndex: 2,
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="flex-end"
              justifyContent="space-between"
            >
              {/* NEWSLETTER */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={footerLogo}
                  alt="logo"
                  sx={{
                    width: 50,
                    mb: 2,
                  }}
                />

                <TypingText
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 600,
                  }}
                  text={"Connect With Us"}
                ></TypingText>
                <Typography
                  sx={{
                    color: "#C7C7C7",
                    mb: 3,
                  }}
                >
                  Subscribe to our newsletter for updates.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <InputBase placeholder="Email" fullWidth sx={inputStyles} />

                  <AnimatedButton>Subscribe</AnimatedButton>
                </Box>
              </Grid>

              {/* CONTACT INFO */}
              <Grid item xs={12} md={5} >
                <Grid container spacing={1}>
                  {contactItems.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          component="img"
                          src={item.icon}
                          alt=""
                          sx={{
                            width: 20,
                            height: 20,
                            objectFit: "contain",
                          }}
                        />

                        <Link
                          href={item.href}
                          underline="none"
                          sx={{
                            color: "#fff",
                            fontSize: "0.85rem",

                            "&:hover": {
                              color: "#FF5B2E",
                            },
                          }}
                        >
                          {item.text}
                        </Link>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            {/* LINE */}
            <Box
              sx={{
                borderTop: "1px solid #3B3B3B",
                mt: 5,
                pt: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#C7C7C7",
                  fontSize: "0.9rem",
                }}
              >
                All Rights Reserved © 2026
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default Footer;
