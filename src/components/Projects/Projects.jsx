import React, { useState, useEffect } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { DesignServices, Map, RemoveRedEye, Start } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";

import "swiper/css";

import galleryOne from "assets/images/gallery/image (1).png";
import galleryTwo from "assets/images/gallery/image (2).png";
import galleryThree from "assets/images/gallery/image (3).png";
import galleryFour from "assets/images/gallery/image (4).png";
import galleryFive from "assets/images/gallery/image (5).png";
import { Pagination } from "swiper/modules";
import logo from "assets/images/icons/arrowUpRight.svg";
import Logo3D from "components/Logo3d";
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
    bg: `radial-gradient(circle at bottom, #00000000 37%, #3b3a3a 54%, #00000000 75%)`,
  },
  {
    title: "Award Ceremonies",
    subtitle: "Premium stage experience",
    icon: <DesignServices />,
    client: "Go Creative Solutions",
    event: "Annual Awards Night",
    desc: "A polished ceremony concept with immersive screen content, lighting design, and elegant flow control built around memorable guest moments.",
    bg: "radial-gradient(circle at 100% 100%, #05050500 25%, transparent 70%),radial-gradient(circle at 0% 0%, #2e0000 5%, transparent 70%)",
  },
  {
    title: "Concept Activation",
    subtitle: "Interactive brand moments",
    icon: <RemoveRedEye />,
    client: "Retail Brand",
    event: "Launch Activation",
    desc: "A high-touch activation with custom-built displays, visitor interaction points, and a visual system designed for social sharing.",
    bg: `radial-gradient(circle at bottom, transparent 40%, #57250a 39%, transparent 80%)`,
  },
  {
    title: "Exhibition Booths",
    subtitle: "Built environments",
    icon: <Map />,
    client: "Technology Partner",
    event: "Industry Expo",
    desc: "A booth experience shaped around clear wayfinding, product storytelling, and practical visitor engagement across a compact footprint.",
    bg: "radial-gradient(circle at 100% 100%, transparent 25%, transparent 70%),radial-gradient(circle at 20% 100%, #643000 5%, transparent 70%)",
  },
  {
    title: "Private Events",
    subtitle: "Tailored guest journeys",
    icon: <Start />,
    client: "Private Client",
    event: "Executive Reception",
    desc: "A refined reception plan with atmospheric lighting, venue styling, and a concise run-of-show for a premium audience.",
    bg: `radial-gradient(circle at bottom, transparent 37%, #54138a79 54%, transparent 75%)`,
  },
  {
    title: "Product Launch",
    subtitle: "Reveal-driven production",
    icon: <DesignServices />,
    client: "Consumer Brand",
    event: "Product Reveal",
    desc: "A launch setup centered on reveal timing, stage storytelling, and media-friendly zones that keep the product in the spotlight.",
    bg: "radial-gradient(circle at 100% 100%, transparent 25%, transparent 70%),radial-gradient(circle at 0% 0%, #470d0d 5%, transparent 70%)",
  },
  {
    title: "Conference",
    subtitle: "Operational event planning",
    icon: <RemoveRedEye />,
    client: "Business Group",
    event: "Leadership Conference",
    desc: "A structured conference environment with speaker support, branded touchpoints, and smooth transitions between sessions.",
    bg: `radial-gradient(circle at bottom, transparent 40%, #442210 39%, transparent 80%)`,
  },
  {
    title: "Brand Experience",
    subtitle: "Audience-first production",
    icon: <Map />,
    client: "Lifestyle Brand",
    event: "Community Experience",
    desc: "An audience-focused event concept combining spatial design, photo moments, and branded interactions for strong visitor recall.",
    bg: "radial-gradient(circle at 100% 100%, #0505056e 25%, transparent 70%),radial-gradient(circle at 20% 100%, #0c3f57 5%, transparent 70%)",
  },
];

export default function Services() {
  const isMobile = useMediaQuery("(max-width:899px)");
  const [selected, setSelected] = useState(0);
  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const selectedProject = items[selected];
  const [active, setActive] = useState(null);

  const { scrollYProgress } = useScroll();
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.9, 1],
    [0.68, 0.4, 0.5, 0.22],
  );
  const logoX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["30vw", "30vw", "-40vw", "10vw"],
  );
  const logoY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["0vh", "4vh", "10vh", "20vh"],
  );

  useEffect(() => {
    if (isMobile) return undefined;

    const lenis = new Lenis({
      duration: 4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [isMobile]);

  return (
    <Box
      sx={{
        color: "white",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        style={{
          opacity: isMobile ? 0.28 : logoOpacity,
          x: isMobile ? "0vw" : logoX,
          y: isMobile ? "2vh" : logoY,
        }}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          filter: "drop-shadow(0 18px 30px rgba(254, 88, 42, 0.36))",
        }}
      >
        <Logo3D scrollYProgress={scrollYProgress} isMobile={isMobile} />
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 2 },
            height: { xs: 420, md: "75vh" },
            alignItems: "stretch",
            overflowX: "scroll",
            scrollbarColor: "transparent transparent",
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
                    isMobile || isActive || isSelected
                      ? "clamp(280px, 35vw, 520px)"
                      : "clamp(66px, 7vw, 100px)",
                }}
                transition={
                  isMobile
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                      }
                }
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
                    backdropFilter: "blur(32px)",
                    border: "1px solid #ffffff0e",
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
                      top: { xs: "42%", md: "32%" },
                      left: "-23%",
                      width: "50vh",
                      wordBreak: "no-break",
                      fontSize: { xs: "1.5rem", md: "2rem" },
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
                          opacity: isMobile || isSelected || isActive ? 1 : 0,
                          transition: "opacity 0.25s ease",
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
                height: { xs: 280, md: "80vh" },
                ml: "50%",
                transform: "translateX(-50%)",
                objectFit: "contain",
                display: "block",
                borderRadius: { xs: "20px", md: "40px" },
                mb: 3,
              }}
            />

            <Swiper
              modules={[Pagination]}
              slidesPerView={2.2}
              spaceBetween={14}
              pagination={true}
              breakpoints={{
                600: { slidesPerView: 3.2, spaceBetween: 18 },
                900: { slidesPerView: 4, spaceBetween: 24 },
              }}
              style={{ width: "100%", paddingBottom: "40px" }}
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
                        borderRadius: { xs: "20px", md: "40px" },
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
