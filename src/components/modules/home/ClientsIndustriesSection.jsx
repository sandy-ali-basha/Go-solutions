import {
  ArchitectureOutlined,
  BalanceOutlined,
  FavoriteBorderOutlined,
  GavelOutlined,
  MemoryOutlined,
  DirectionsCarOutlined,
  HomeOutlined,
  RoomServiceOutlined,
} from "@mui/icons-material";

import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import client1 from "assets/images/clients/client (1).svg";
import client2 from "assets/images/clients/client (2).svg";
import client3 from "assets/images/clients/client (3).svg";
import client4 from "assets/images/clients/client (4).svg";
import client5 from "assets/images/clients/client (5).svg";
import TypingText from "components/common/TypingText";

const clients = [
  { id: 1, logo: client1, name: "Client 1" },
  { id: 2, logo: client2, name: "Client 2" },
  { id: 3, logo: client3, name: "Client 3" },
  { id: 4, logo: client4, name: "Client 4" },
  { id: 5, logo: client5, name: "Client 5" },
];

const industries = [
  { id: 1, icon: HomeOutlined, label: "Real Estate" },
  { id: 2, icon: BalanceOutlined, label: "Finance" },
  { id: 3, icon: GavelOutlined, label: "Legal" },
  { id: 4, icon: FavoriteBorderOutlined, label: "Healthcare" },
  { id: 5, icon: DirectionsCarOutlined, label: "Automobile" },
  { id: 6, icon: RoomServiceOutlined, label: "Hospitality" },
  { id: 7, icon: ArchitectureOutlined, label: "Design" },
  { id: 8, icon: MemoryOutlined, label: "Tech Companies" },
];

const MotionBox = motion(Box);

function ClientLogo({ client, index, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [36 + index * 8, -12]);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <MotionBox
      style={{
        y,
        opacity,
        rotate,
      }}
    >
      <Box
        component="img"
        src={client.logo}
        alt={client.name}
        sx={{
          width: "100%",
          maxWidth: { xs: 120, md: 155 },
          maxHeight: { xs: 42, md: 56 },
          objectFit: "contain",
          filter: "brightness(0) invert(1)",
          opacity: 0.95,
          background: "transparent",
        }}
      />
    </MotionBox>
  );
}

function IndustryItem({ industry, index, scrollYProgress }) {
  const Icon = industry.icon;
  const y = useTransform(scrollYProgress, [0.2, 1], [32 + index * 3, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);

  return (
    <MotionBox
      style={{ y, opacity }}
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1.5,
        minHeight: 96,
      }}
    >
      <Icon
        sx={{
          fontSize: 30,
          color: "white",
        }}
      />

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: 1.25,
          fontWeight: 300,
        }}
      >
        {industry.label}
      </Typography>
    </MotionBox>
  );
}

function ClientsIndustriesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  const textY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const textOpacity = useTransform(scrollYProgress, [0.18, 0.55], [0, 1]);

  return (
    <Box
      ref={ref}
      sx={{
        color: "white",
        pt: { xs: 7, md: 9 },
        pb: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* CLIENTS TITLE */}

        <MotionBox
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: { xs: 5, md: 6 },
              fontWeight: 400,
            }}
          >
            Our Trusted Clients
          </Typography>
        </MotionBox>

        {/* CLIENT LOGOS */}

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: { xs: 8, md: 10 } }}
        >
          {clients.map((client, index) => (
            <Grid item xs={6} sm={4} md key={client.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: { xs: 48, md: 64 },
                }}
              >
                <ClientLogo
                  client={client}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* FLOATING TEXT SECTION */}

        <MotionBox
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          sx={{
            textAlign: "center",
            maxWidth: 920,
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.6rem", md: "4rem" },
              lineHeight: 1.05,
              mb: 2.5,
              fontWeight: 400,
            }}
          >
            Industries We Work With
          </Typography>

          <TypingText
            variant="body1"
            sx={{
              maxWidth: 680,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.9)",
            }}
            text="Hear the success stories of the businesses we've helped. We work with a variety of different industries."
          ></TypingText>
        </MotionBox>

        <Divider
          sx={{
            my: { xs: 5, md: 7 },
            width: ["70vw", "50vw"],
            mx: "auto",
            borderColor: "rgba(255,255,255,0.38)",
          }}
        />

        {/* INDUSTRIES */}

        <Grid container spacing={{ xs: 3, md: 2 }} justifyContent="center">
          {industries.map((industry, index) => {
            return (
              <Grid item xs={6} sm={4} md={1.5} key={industry.id}>
                <IndustryItem
                  industry={industry}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              </Grid>
            );
          })}
        </Grid>

        <Divider
          sx={{
            mt: { xs: 5, md: 7 },
            width: ["70vw", "50vw"],
            mx: "auto",
            borderColor: "rgba(255,255,255,0.38)",
          }}
        />
      </Container>
    </Box>
  );
}

export default ClientsIndustriesSection;
