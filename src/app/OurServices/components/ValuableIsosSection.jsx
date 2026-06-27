import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "assets/images/isos/iso1.png";
import image2 from "assets/images/isos/iso2.png";
import image3 from "assets/images/isos/iso3.png";
import arrow from "assets/images/icons/gradientArrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              mb: 3,
            }}
          >
            {/* Left Icon */}
            <Box
              component="img"
              src={arrow}
              alt=""
              sx={{
                width: {
                  xs: 42,
                  md: 54,
                },
                mt: 0.5,
                flexShrink: 0,
              }}
            />

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "2.3rem",
                    md: "4rem",
                  },
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                ISO CERTIFICATIONS
              </Typography>

              <Typography
                sx={{
                  maxWidth: 760,
                  color: "rgba(255,255,255,.75)",
                  fontSize: {
                    xs: "1rem",
                    md: "1.15rem",
                  },
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                Built on a foundation of quality, responsibility, and continuous
                improvement, our ISO certifications demonstrate the standards
                that guide every experience we design and deliver.
              </Typography>
            </Box>
          </Box>
        </MotionBox>
        {/* <Box
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
            >
              <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
                <Typography
                  variant="h2"
                  sx={{
                    letterSpacing: "-0.08em",
                    textTransform: "capitalize",
                    background:
                      "linear-gradient(180deg, #FF5B2E 46.15%, #46261E 61.06%, #45261E 100%)",
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
              <img  src={card.image} alt={card.alt} loading="lazy" />
            </MotionBox>
          ))}
        </Box> */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          style={{
            paddingBottom: "50px",
          }}
        >
          {isoCards.map((card, index) => (
            <SwiperSlide key={card.id}>
              <MotionBox
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                sx={{
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      letterSpacing: "-0.08em",
                      background:
                        "linear-gradient(180deg, #FF5B2E 46.15%, #46261E 61.06%, #45261E 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
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

                <Box
                  component="img"
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </MotionBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
