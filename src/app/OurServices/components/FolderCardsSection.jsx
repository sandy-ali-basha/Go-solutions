import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import arrow from "assets/images/icons/arrow.svg";
import img1 from "assets/images/demo/demo (1).png";
import img2 from "assets/images/demo/demo (2).png";
import img3 from "assets/images/demo/demo (3).png";
import img4 from "assets/images/demo/demo (4).png";
import img5 from "assets/images/demo/demo (5).png";
import { position } from "stylis";

const MotionBox = motion(Box);

const folders = [
  {
    id: "01",
    title: "Project Management",
    desc: "Manage quality control before, during, and after events",
    image: img1,
  },
  {
    id: "02",
    title: "Creative Direction",
    desc: "Build immersive creative concepts and experiences",
    image: img2,
  },
  {
    id: "03",
    title: "Brand Activation",
    desc: "Create memorable audience interactions and campaigns",
    image: img3,
  },
  {
    id: "04",
    title: "AV Production",
    desc: "Professional stage, sound, lighting and AV solutions",
    image: img4,
  },
  {
    id: "05",
    title: "Event Logistics",
    desc: "Smooth operations and execution from start to finish",
    image: img5,
  },
];

export default function FolderCardsSection() {
  const [active, setActive] = useState(0);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        overflow: "hidden",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "430px 1fr",
            },
            gap: 8,
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={arrow}
            sx={{
              position: "absolute",
              left: "10vw",
              top: "200",
              width: "150px",
              filter: "blur(2px)",
            }}
          ></Box>
          {/* LEFT FOLDERS */}
          <Box
            sx={{
              position: "relative",
              height: 560,
              width: 380,
            }}
          >
            {folders.map((folder, index) => {
              const isActive = active === index;
              return (
                <MotionBox
                  key={folder.id}
                  onMouseEnter={() => setActive(index)}
                  animate={{
                    y: index * 70,
                    x: isActive ? 20 : 0,
                    rotateX: isActive ? -4 : 0,
                    scale: isActive ? 1.03 : 1,
                    zIndex: isActive ? 20 : 10 + index,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                  sx={{
                    position: "absolute",
                    left: 0,
                    width: 340,
                    height: 260,
                    cursor: "pointer",
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                    backdropFilter: "blur(3px)",
                    borderRadius: "30px",
                  }}
                >
                  {/* FOLDER */}
                  <MotionBox
                    animate={{
                      rotateX: isActive ? -10 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* folder */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        borderRadius: "36px",
                      }}
                    >
                      {/* GLASS SVG */}
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 573 439"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <path
                          d="M535.5 87.6201H331.5C328.544 87.6201 286.5 76.6201 286.5 59.6201L262 22.1201C249.799 5.66612 241.954 0 220.882 0H64.6931C29.0192 0 0 27.4819 0 61.2639V377.736C0 411.519 29.0192 439 64.6931 439H508.307C543.981 439 573 411.519 573 377.736V124.104C564 91.1201 545 93.1201 535.5 87.6201Z"
                          fill="rgba(133, 133, 133, 0.42)"
                          stroke="rgba(255, 255, 255, 0.67)"
                          strokeWidth="1"
                        />
                      </svg>
                    </Box>
                    {/* NUMBER */}
                    <Typography
                      sx={{
                        position: "absolute",
                        right: 22,
                        top: 0,
                        fontWeight: 400,
                        letterSpacing: "-0.08em",
                        textTransform: "capitalize",
                        background:
                          "linear-gradient(180deg, #FFFFFF 46.15%, #1B1B1B 61.06%, #1B1B1B 100%)",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        fontSize: "2.5rem",
                      }}
                    >
                      {folder.id}
                    </Typography>

                    {/* CONTENT */}

                    <AnimatePresence>
                      {isActive && (
                        <MotionBox
                          initial={{
                            opacity: 0,
                            y: 30,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          sx={{
                            position: "absolute",
                            left: 34,
                            bottom: 34,
                            maxWidth: 270,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: "2rem",
                              fontWeight: 700,
                              mb: 2,
                              lineHeight: 1,
                            }}
                          >
                            {folder.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: "rgba(255,255,255,0.85)",
                              fontSize: "1.1rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {folder.desc}
                          </Typography>
                        </MotionBox>
                      )}
                    </AnimatePresence>
                  </MotionBox>
                </MotionBox>
              );
            })}
          </Box>

          {/* RIGHT SIDE */}

          <AnimatePresence mode="wait">
            <MotionBox
              key={folders[active].image}
              initial={{
                opacity: 0.5,
                rotateY: 15,
                x: 5,
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                x: 0,
              }}
              exit={{
                opacity: 0,
                rotateY: -10,
                x: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              sx={{
                width: "100%",
                maxWidth: 700,
                height: 520,
                borderRadius: "34px",
                overflow: "hidden",
                position: "relative",
                background: "#000",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* IMAGE */}

              <Box
                component="img"
                src={folders[active].image}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* DARK OVERLAY */}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
                }}
              />

              {/* BOTTOM CARD */}

              <MotionBox
                initial={{ y: 10, opacity: 0,scale:0.9 }}
                animate={{ y: 0, opacity: 1, scale:1 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                }}
                sx={{
                  position: "absolute",
                  left: 24,
                  right: 24,
                  bottom: 24,
                  borderRadius: "30px",
                  padding: 4,
                  background: "rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {folders[active].title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    maxWidth: 500,
                  }}
                >
                  {folders[active].desc}
                </Typography>
              </MotionBox>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
