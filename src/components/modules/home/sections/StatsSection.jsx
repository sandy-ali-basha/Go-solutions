import React, { useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const stats = [
  {
    left: "5",
    right: "500",
    title: "Years of experience",
    subtitle: "Successful Projects",
    highlight: true,
  },
  {
    left: "16",
    right: "65",
    title: "Industries association",
    subtitle: "Clients",
    highlight: false,
  },
  {
    left: "12",
    right: "5",
    title: "Regions in KSA",
    subtitle: "GCC Destinations",
    highlight: true,
  },
];
function CountUpNumber({ value }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 58%"],
  });
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setDisplayValue(Math.floor(latest * Number(value)));
  });

  return <span ref={ref}>{displayValue}</span>;
}
export default function StatsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 55%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Box
      component={motion.div}
      ref={ref}
      style={{ opacity, y }}
      sx={{
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between">
          {stats.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginInlineStart: "5rem",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "42px", md: "58px" },
                      fontWeight: 600,
                      lineHeight: 1,
                      color: item.highlight ? "#ff5a2c" : "#fff",
                      position: "relative",
                      width: "fit-content",
                    }}
                  >
                    <CountUpNumber value={item.right} />
                    <Box
                      variant="span"
                      sx={{
                        position: "absolute",
                        top: "-0.5rem",
                        marginLeft: "2px",
                        fontSize: "2.3rem",
                        left: "100%",
                      }}
                    >
                      +
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#fff",
                      mt: 1,
                      fontWeight: 300,
                      letterSpacing: "-0.08em",
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "-2rem",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "42px", md: "58px" },
                      fontWeight: 600,
                      lineHeight: 1,
                      color: "#fff",
                      position: "relative",
                      width: "fit-content",
                    }}
                  >
                    <CountUpNumber value={item.left} />
                    <Box
                      variant="span"
                      sx={{
                        position: "absolute",
                        top: "-0.5rem",
                        marginLeft: "2px",
                        fontSize: "2.3rem",
                        left: "100%",
                      }}
                    >
                      +
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#fff",
                      mt: 0.5,
                      fontWeight: 300,
                      letterSpacing: "-0.08em",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
