import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { DesignServices, Map, RemoveRedEye, Start } from "@mui/icons-material";

const items = [
  {
    title: "Strategy",
    subtitle: "Strategy with tech",
    icon: <Start />,
    desc: "We build scalable digital strategies.",
    bg: `radial-gradient(circle at bottom, #000000 37%, #3b3a3a 54%, #000 75%)`,
  },
  {
    title: "Design",
    subtitle: "Design with conversion in mind",
    icon: <DesignServices />,
    desc: "Modern UI/UX focused on conversion.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 0% 0%, #2e0000 5%, transparent 70%)",
  },
  {
    title: "Development",
    subtitle: "Development with performance in mind",
    icon: <RemoveRedEye />,
    desc: "Fast and maintainable React systems.",
    bg: `radial-gradient(circle at bottom, #000000 40%, #57250a 39%, #000 80%)`,
  },
  {
    title: "Animation",
    subtitle: "Animation with smooth transitions",
    icon: <Map />,
    desc: "Smooth Framer Motion experiences.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 20% 100%, #643000 5%, transparent 70%)",
  },
  {
    title: "Strategy",
    subtitle: "Strategy with tech",
    icon: <Start />,
    desc: "We build scalable digital strategies. ",
    bg: `radial-gradient(circle at bottom, #000000 37%, #2e1047 54%, #000 75%)`,
  },
  {
    title: "Design",
    subtitle: "Design with conversion in mind",
    icon: <DesignServices />,
    desc: "Modern UI/UX focused on conversion.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 0% 0%, #470d0d 5%, transparent 70%)",
  },
  {
    title: "Development",
    subtitle: "Development with performance in mind",
    icon: <RemoveRedEye />,
    desc: "Fast and maintainable React systems.",
    bg: `radial-gradient(circle at bottom, #000000 40%, #442210 39%, #000 80%)`,
  },
  {
    title: "Animation",
    subtitle: "Animation with smooth transitions",
    icon: <Map />,
    desc: "Smooth Framer Motion experiences.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 20% 100%, #0c3f57 5%, transparent 70%)",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <Box
      sx={{
        color: "white",
        py: 10,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* Row */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            height: "75vh",
            alignItems: "stretch",
          }}
        >
          {items.map((item, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  width: isActive ? "35vw" : "7vw",
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                }}
                style={{
                  height: "100%",
                  borderRadius: "24px",
                  p: 2,
                  cursor: "pointer",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: item.bg,
                }}
              >
                <Box
                  sx={{
                    backdropFilter: "blur(20px)",
                    padding: 5,
                    height: "100%",
                    width: "35vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      rotate: "90deg",
                      position: "absolute",
                      top: "30%",
                      left: "-20%",
                      width: "42vh",
                      fontSize: "2rem",
                      float: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: isActive ? 0.9 : 0,
                        transition: "opacity 1s",
                      }}
                    >
                      {item.desc}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: isActive ? 1 : 0,
                          transition: "opacity 1s",
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
