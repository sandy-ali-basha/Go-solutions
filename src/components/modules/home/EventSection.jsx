import React, { useRef } from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion";

import StatsSection from "./sections/StatsSection";
import AnimatedText from "components/common/AnimatedText";
import AnimatedButton from "components/common/AnimatedButton";

const cards = [
  {
    title: "Creative Strategy",
    desc: "We craft event concepts, branding and visuals tailored to your goals and audience.",
  },
  {
    title: "Event Logistics",
    desc: "We coordinate schedules, logistics, and on-site details for smooth stress-free events.",
  },
  {
    title: "Production & Build",
    desc: "Our in-house team handles booth fabrication, stage setup and custom builds.",
  },
  {
    title: "Management",
    desc: "We oversee the full event lifecycle, including guest services and post-event reporting.",
  },
];

const MotionCard = motion(Card);

function EventCard({ card, index, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0.25, 1], [60 + index * 12, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <MotionCard
      style={{ y, opacity }}
      sx={{
        height: "100%",
        cursor: "pointer",
        transition: "background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease",
        background: "linear-gradient(180deg, #B64426 0%, #1B1B1B 100%)",
        border: "0.941043px solid #FFFFFF",
        borderRadius: "15.0567px",
        color: "#fff",

        "&:hover": {
          background: "#fff",
          color: "primary.main",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1px solid currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            fontSize: 14,
          }}
        >
          *
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          {card.title}
        </Typography>

        <Typography
          className="card-desc"
          sx={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "inherit",
            transition: "0.3s",
          }}
        >
          {card.desc}
        </Typography>
      </CardContent>
    </MotionCard>
  );
}

export default function EventSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 45%"],
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        py: 4,
        color: "#fff",
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <AnimatedText firstText="Events In M" secondText="Tion" />
        <StatsSection />

        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={card.title}>
              <EventCard
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            </Grid>
          ))}
        </Grid>

        <Box>
          <Typography sx={{ textAlign: "center", my: 3 }}>
            Digital Portfolio downloads
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexDirection: ["column", "row"],
            }}
          >
            <AnimatedButton
              sx={{
                px: 5,
                background: "transparent",
                color: "white",
                fontWeight: 300,
                border: "1px solid white",
                width: ["90vw", "30vw"],
              }}
            >
              Download Company TECH Profile pdf <ExpandMore />
            </AnimatedButton>

            <AnimatedButton
              sx={{
                px: 5,
                background: "transparent",
                color: "white",
                fontWeight: 300,
                border: "1px solid white",
                width: ["90vw", "30vw"],
              }}
            >
              Download Company Profile pdf <ExpandMore />
            </AnimatedButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
