import React, { useMemo, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import arrow from "assets/images/icons/gradientArrow.svg";
import arrowUp from "assets/images/icons/arrowUpRight.svg";
import Ostar from "assets/images/icons/oStar.svg";

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
      "At Go event Management, we turn ideas into unforgettable experiences. As a full-service event management company, we specialize in crafting seamless, innovative, and impactful events tailored to your vision. From corporate gatherings and exhibitions to immersive brand activations and large-scale celebrations, we bring creativity, precision, and flawless execution to every project.",
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
      "We create immersive technology-driven brand experiences using innovative visuals, installations, and interactive environments designed to leave a lasting impression.",
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

function CursorFollower({ active }) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
  });

  React.useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 50);
      mouseY.set(e.clientY - 50);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <MotionBox
      animate={{
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        borderRadius: "50%",
        pointerEvents: "none",
        // zIndex: 9999,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(255, 91, 46, 0.66), rgba(255, 91, 46, 0.21))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <MotionBox
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -70, 0
                a 70,70 0 1,1 140,0
                a 70,70 0 1,1 -140,0
              "
            />
          </defs>

          <text fill="white" fontSize="12" fontWeight="600" letterSpacing="2px">
            <textPath href="#circlePath">GO CREATIVE • GO CREATIVE •</textPath>
          </text>
        </svg>
      </MotionBox>

      <NorthEastIcon
        sx={{
          color: "white",
          fontSize: 34,
          position: "relative",
          zIndex: 2,
        }}
      />
    </MotionBox>
  );
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);

  const activeService = useMemo(() => {
    return services[activeIndex];
  }, [activeIndex]);

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

      <Container maxWidth="xl">
        {/* TOP MENU */}

        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 6 },
            flexWrap: "wrap",
            mb: 12,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {[
            "Corporate & Events",
            "Team Building Activities",
            "Branding Solutions",
            "Technology & AV",
            "Logistics & Operations",
          ].map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  color: "#FF5B2E",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* MAIN SECTION */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 8,
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ textAlign: "right" }}>
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <MotionBox
                  key={service.title}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setCursorActive(true);
                  }}
                  onMouseLeave={() => {
                    setCursorActive(false);
                  }}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}  
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.2,
                  }}
                  sx={{
                    mb: 1,
                    cursor: "none",
                    transformOrigin: "left center",
                    transition: "0.2s",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        color: isActive ? "white" : "#4F5560",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.9rem",
                          md: "1rem",
                        },
                      }}
                    >
                      {service.category}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: {
                          xs: "2.5rem",
                          md: isActive ? "3.5rem" : "2.5rem",
                        },
                        color: isActive ? "white" : "#2E3440",
                        transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  <AnimatePresence>
                    {isActive && (
                      <MotionBox
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        sx={{
                          overflow: "hidden",
                          pl: 1,
                          pt: 2,
                        }}
                      >
                        {service.items.map((item) => (
                          <Typography
                            key={item}
                            sx={{
                              fontSize: "1.05rem",
                              color: "rgba(255,255,255,0.85)",
                              mb: 1,
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </MotionBox>
                    )}
                  </AnimatePresence>
                </MotionBox>
              );
            })}
          </Box>

          {/* RIGHT SIDE */}

          <AnimatePresence mode="wait">
            <MotionBox
              key={activeService.title}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MotionBox
                animate={{
                  rotate: [0, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                sx={{
                  mb: 5,
                }}
              />
              <Box
                component={"img"}
                src={arrow}
                sx={{ width: "10vw", mb: 2 }}
              ></Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: "2.2rem",
                    md: "2.5rem",
                  },
                  lineHeight: 1,
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: "gilroy",
                }}
              >
                {activeService.rightTitle}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  maxWidth: 580,
                  fontWeight: 300,
                  letterSpacing: "-2%",
                }}
              >
                {activeService.description}
              </Typography>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
