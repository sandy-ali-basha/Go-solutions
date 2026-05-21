import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { DesignServices, Map, RemoveRedEye, Start } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import galleryOne from "assets/images/gallery/image (1).png";
import galleryTwo from "assets/images/gallery/image (2).png";
import galleryThree from "assets/images/gallery/image (3).png";
import galleryFour from "assets/images/gallery/image (4).png";
import galleryFive from "assets/images/gallery/image (5).png";

const galleryImages = [
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
];

const items = [
  {
    title: "Live Events",
    subtitle: "Al Hilal Saudi Football Club",
    icon: <Start />,
    client: "Al Hilal Saudi Football Club",
    event: "Bank Al-Riyadh Collaboration",
    desc: "Go Event Management proudly played a role in a strategic partnership event, crafting an interactive zones, brand moments, and a focused guest journey from arrival to closing.",
    bg: `radial-gradient(circle at bottom, #000000 37%, #3b3a3a 54%, #000 75%)`,
  },
  {
    title: "Award Ceremonies",
    subtitle: "Premium stage experience",
    icon: <DesignServices />,
    client: "Go Creative Solutions",
    event: "Annual Awards Night",
    desc: "A polished ceremony concept with immersive screen content, lighting design, and elegant flow control built around memorable guest moments.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 0% 0%, #2e0000 5%, transparent 70%)",
  },
  {
    title: "Concept Activation",
    subtitle: "Interactive brand moments",
    icon: <RemoveRedEye />,
    client: "Retail Brand",
    event: "Launch Activation",
    desc: "A high-touch activation with custom-built displays, visitor interaction points, and a visual system designed for social sharing.",
    bg: `radial-gradient(circle at bottom, #000000 40%, #57250a 39%, #000 80%)`,
  },
  {
    title: "Exhibition Booths",
    subtitle: "Built environments",
    icon: <Map />,
    client: "Technology Partner",
    event: "Industry Expo",
    desc: "A booth experience shaped around clear wayfinding, product storytelling, and practical visitor engagement across a compact footprint.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 20% 100%, #643000 5%, transparent 70%)",
  },
  {
    title: "Private Events",
    subtitle: "Tailored guest journeys",
    icon: <Start />,
    client: "Private Client",
    event: "Executive Reception",
    desc: "A refined reception plan with atmospheric lighting, venue styling, and a concise run-of-show for a premium audience.",
    bg: `radial-gradient(circle at bottom, #000000 37%, #2e1047 54%, #000 75%)`,
  },
  {
    title: "Product Launch",
    subtitle: "Reveal-driven production",
    icon: <DesignServices />,
    client: "Consumer Brand",
    event: "Product Reveal",
    desc: "A launch setup centered on reveal timing, stage storytelling, and media-friendly zones that keep the product in the spotlight.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 0% 0%, #470d0d 5%, transparent 70%)",
  },
  {
    title: "Conference",
    subtitle: "Operational event planning",
    icon: <RemoveRedEye />,
    client: "Business Group",
    event: "Leadership Conference",
    desc: "A structured conference environment with speaker support, branded touchpoints, and smooth transitions between sessions.",
    bg: `radial-gradient(circle at bottom, #000000 40%, #442210 39%, #000 80%)`,
  },
  {
    title: "Brand Experience",
    subtitle: "Audience-first production",
    icon: <Map />,
    client: "Lifestyle Brand",
    event: "Community Experience",
    desc: "An audience-focused event concept combining spatial design, photo moments, and branded interactions for strong visitor recall.",
    bg: "radial-gradient(circle at 100% 100%, #050505 25%, transparent 70%),radial-gradient(circle at 20% 100%, #0c3f57 5%, transparent 70%)",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);
  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const selectedProject = items[selected];
  const [active, setActive] = useState(null);
  return (
    <Box
      sx={{
        color: "white",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 2 },
            height: { xs: 520, md: "75vh" },
            alignItems: "stretch",
          }}
        >
          {items.map((item, i) => {
            const isActive = active === i;
            const isSelected = selected === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => {
                  setSelected(i);
                  setMainImage(galleryImages[i % galleryImages.length]);
                }}
                animate={{
                  width:
                    isActive || isSelected
                      ? "clamp(280px, 35vw, 520px)"
                      : "clamp(66px, 7vw, 100px)",
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
                  boxShadow: isSelected
                    ? "0 0 28px rgba(255, 255, 255, 0.16)"
                    : "none",
                }}
              >
                <Box
                  sx={{
                    backdropFilter: "blur(20px)",
                    padding: 5,
                    height: "100%",
                    width: "clamp(280px, 35vw, 520px)",
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
                      top: "32%",
                      left: "-23%",
                      width: "50vh",
                      wordBreak: "no-break",
                      fontSize: { xs: "0.9rem", md: "2rem" },
                      opacity: isSelected ? 0 : 1,
                      transition: "opacity 0.25s ease",
                      float: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      opacity: isSelected ? 1 : 0,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 3,
                        mb: 4,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#FE572A",
                            fontSize: 12,
                            fontWeight: 800,
                          }}
                        >
                          Client
                        </Typography>
                        <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                          {item.client}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#FE572A",
                            fontSize: 12,
                            fontWeight: 800,
                          }}
                        >
                          Event
                        </Typography>
                        <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                          {item.event}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: isSelected ? 0.9 : 0,
                        transition: "opacity 1s",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      opacity: isSelected ? 1 : 0,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 3,
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 700,
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
        <Container maxWidth="lg">
          <Box sx={{ mt: 5 }}>
            <Box
              component="img"
              src={mainImage}
              alt={`${selectedProject.title} selected project view`}
              sx={{
                width: "100vw",
                height: { xs: 280, md: "72vh" },
                ml: "50%",
                transform: "translateX(-50%)",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Box
              sx={{
                width: { xs: "78%", md: "72%" },
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.55)",
                mx: "auto",
                my: { xs: 3, md: 2 },
              }}
            />

            <Swiper
              slidesPerView={2.2}
              spaceBetween={14}
              breakpoints={{
                600: { slidesPerView: 3.2, spaceBetween: 18 },
                900: { slidesPerView: 4, spaceBetween: 24 },
              }}
              style={{ width: "100%" }}
            >
              {galleryImages.map((image, index) => {
                const isCurrent = mainImage === image;
                return (
                  <SwiperSlide key={image}>
                    <Box
                      component="button"
                      type="button"
                      onClick={() => setMainImage(image)}
                      sx={{
                        width: "100%",
                        border: isCurrent
                          ? "2px solid #FE572A"
                          : "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        p: 0,
                        overflow: "hidden",
                        cursor: "pointer",
                        background: "transparent",
                        aspectRatio: "1 / 0.72",
                      }}
                      aria-label={`View project image ${index + 1}`}
                    >
                      <Box
                        component="img"
                        src={image}
                        alt=""
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          opacity: isCurrent ? 1 : 0.76,
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                          "&:hover": {
                            opacity: 1,
                            transform: "scale(1.03)",
                          },
                        }}
                      />
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
