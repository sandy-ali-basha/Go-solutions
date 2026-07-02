import React, { useMemo, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "assets/images/icons/gradientArrow.svg";
import arrowUp from "assets/images/icons/arrowUpRight.svg";
import Ostar from "assets/images/icons/oStar.svg";
import CursorFollower from "components/common/CursorFollower";
import { useDashboardTechSolutionServices } from "hooks/dashboard/useDashboardHomeContent";

const MotionBox = motion(Box);

const services = [
  {
    category: "Management",
    title: "Expo & Events",
    items: [
      "Conferences",
      "Corporate Events",
      "Booth Production",
      "Brand Activation",
      "AV System",
    ],
    rightTitle: (
      <>
        GO CREA
        <Box
          component="img"
          src={arrowUp}
          sx={{
            width: 30,
            display: "inline-block",
            mx: 1,
            verticalAlign: "middle",
          }}
        />
        IVE SOLUTI
        <Box
          component="img"
          src={Ostar}
          sx={{
            width: 30,
            display: "inline-block",
            mx: 1,
            verticalAlign: "middle",
          }}
        />
        NS.
      </>
    ),
    description:
      "GO Events delivers corporate events, immersive activations, exhibition environments, and executive experiences across Saudi Arabia and the GCC. Through integrated production, technology, and operations, we transform ideas into memorable experiences.",
  },
  {
    category: "Immersive",
    title: "Tech Branding",
    items: [
      "Interactive Displays",
      "Digital Experiences",
      "Projection Mapping",
      "Creative Installations",
      "Smart Activations",
    ],
    rightTitle: "INNOVATIVE DIGITAL EXPERIENCES.",
    description:
      "GO Events delivers corporate events, immersive activations, exhibition environments, and executive experiences across Saudi Arabia and the GCC. Through integrated production, technology, and operations, we transform ideas into memorable experiences.",
  },
  {
    category: "Creative",
    title: "Entertainment",
    items: [
      "Stage Production",
      "Performers",
      "Live Experiences",
      "Music Events",
      "Creative Concepts",
    ],
    rightTitle: "MEMORABLE LIVE MOMENTS.",
    description:
      "From live shows to large-scale entertainment productions, we bring creativity and flawless execution together to create memorable audience experiences.",
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);
  const { data } = useDashboardTechSolutionServices();
  const dashboardServices = Array.isArray(data?.data)
    ? data.data.map((service) => ({
        category: "Service",
        title: service.title,
        items: [],
        rightTitle: service.title,
        description: service.description,
        image: service.image_url,
      }))
    : [];
  const displayServices = dashboardServices.length ? dashboardServices : services;

  const activeService = useMemo(() => {
    return displayServices[activeIndex] || displayServices[0];
  }, [activeIndex, displayServices]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden",
        py: 10,
      }}
    >
      <CursorFollower active={cursorActive} />

      <Container maxWidth="lg">
        {/* TOP MENU */}

        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 6 },
            flexWrap: "wrap",
            mb: 12,
            color: "rgba(255,255,255,0.75)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {displayServices.map((service, index) => {
            const isActive = activeIndex === index;

            return (
            <Typography
              key={`${service.title}-${index}`}
              component="button"
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              sx={{
                border: 0,
                background: "transparent",
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "0.3s",
                color: isActive ? "#FF5B2E" : "rgba(255,255,255,0.75)",
                fontFamily: "inherit",
                "&:hover": {
                  color: "#FF5B2E",
                },
              }}
            >
              {service.title}
            </Typography>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "300px 1fr",
            },
            alignItems: "center",
            gap: { xs: 5, lg: 6 },
            minHeight: "70vh",
          }}
        >
          {/* LEFT ICON */}
          <AnimatePresence mode="wait">
            <MotionBox
              key={activeService.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={activeService.image || arrow}
                alt=""
                sx={{
                  width: {
                    xs: 200,
                    md: 300,
                    lg: 350,
                  },
                  maxHeight: { xs: 220, md: 360 },
                  objectFit: activeService.image ? "cover" : "contain",
                  borderRadius: activeService.image ? "24px" : 0,
                }}
              />
            </MotionBox>
          </AnimatePresence>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <MotionBox
              key={activeService.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "2.8rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                  lineHeight: 0.95,
                  fontWeight: 500,
                  mb: 3,
                  letterSpacing: "-0.05em",
                  textTransform: "uppercase",
                }}
              >
                {activeService.rightTitle}
              </Typography>

              <Typography
                sx={{
                  maxWidth: 800,
                  color: "rgba(255,255,255,.72)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  mb: 6,
                  mt: 2,
                }}
              >
                {activeService.description}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                  },
                  gap: 3,
                  maxWidth: 850,
                }}
              >
                {(activeService.items?.length
                  ? activeService.items
                  : [activeService.category]
                ).map((item, i) => (
                  <MotionBox
                    key={item}
                    whileHover={{
                      x: 8,
                    }}
                    transition={{ duration: 0.25 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        height: 18, // controls how much of the number is visible
                        overflow: "hidden",
                        width: 38,
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          fontWeight: 500,
                          lineHeight: 1,
                          color: "#FF5B2E",
                          // WebkitTextStroke: "2px #FF5B2E",
                          fontFamily: "Gilroy",
                          userSelect: "none",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </Typography>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
