import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "assets/images/isos/iso1.png";
import image2 from "assets/images/isos/iso2.png";
import image3 from "assets/images/isos/iso3.png";
import AnimatedText from "components/common/AnimatedText";

const MotionBox = motion(Box);

const isoCards = [
  {
    id: "01",
    code: "ISO 9001",
    subtitle: "Quality Control",
    sideLabel: "ISO 9001 : 2015",
    image: image1,
    alt: "ISO 9001 certificate",
    offset: 0,
  },
  {
    id: "02",
    code: "ISO 20121",
    subtitle: "Event Sustainability",
    sideLabel: "ISO 20121 : 2024",
    image: image2,
    alt: "ISO 20121 certificate",
    offset: 50,
  },
  {
    id: "03",
    code: "ISO 45001",
    subtitle: "Health & Safety",
    sideLabel: "ISO 45001 : 2018",
    image: image3,
    alt: "ISO 45001 certificate",
    offset: 0,
  },
];

export default function ValuableIsosSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        color: "white",
      }}
    >
      <Container maxWidth="md">
      <AnimatedText firstText={"Valuable "} secondText={" ISOs"}></AnimatedText>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 5, md: 4 },
            alignItems: "start",
          }}
        >
          {isoCards.map((card, index) => (
            <MotionBox
              key={card.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              sx={{
                mt: { md: `${card.offset}px` },
              }}
            >
              <Box sx={{ display: "flex", gap: 2,alignItems:"center", }}>
                <Typography
                  variant="h2"
                  sx={{
                    letterSpacing: "-0.08em",
                    textTransform: "capitalize",
                    background:
                      "linear-gradient(180deg, #FFFFFF 46.15%, #46261E 61.06%, #45261E 100%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    fontWeight: 400,
                  }}
                >
                  {card.id}
                </Typography>
                <Box>
                  <Typography variant="body1">{card.code}</Typography>
                  <Typography variant="body1">{card.subtitle}</Typography>
                </Box>
              </Box>
              <img src={card.image} alt={card.alt} loading="lazy" />
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
