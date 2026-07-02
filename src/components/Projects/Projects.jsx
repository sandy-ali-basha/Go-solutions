import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
import Logo3D from "components/Logo3d";
import { dashboardHomeContentApi } from "api/dashboard/homeContent";

const fallbackGalleryImages = [
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
];

const iconSequence = [
  <Start key="start" />,
  <DesignServices key="design" />,
  <RemoveRedEye key="eye" />,
  <Map key="map" />,
];

const staticItems = [
  {
    icon: <Start />,
    bg: `radial-gradient(circle at bottom, #00000000 37%, #3b3a3a 54%, #00000000 75%)`,
  },
  {
    icon: <DesignServices />,
    bg: "radial-gradient(circle at 100% 100%, #05050500 25%, transparent 70%),radial-gradient(circle at 0% 0%, #2e0000 5%, transparent 70%)",
    galleryImages: fallbackGalleryImages,
  },
  {
    icon: <RemoveRedEye />,
    bg: `radial-gradient(circle at bottom, transparent 40%, #81360e 39%, transparent 80%)`,
  },
  {
    icon: <Map />,
    bg: "radial-gradient(circle at 100% 100%, transparent 25%, transparent 70%),radial-gradient(circle at 20% 100%, #643000 5%, transparent 70%)",
  },
  {
    icon: <Start />,
    bg: `radial-gradient(circle at bottom, transparent 37%, #8a6a1379 54%, transparent 75%)`,
  },
  {
    icon: <DesignServices />,
    bg: "radial-gradient(circle at 100% 100%, transparent 25%, transparent 70%),radial-gradient(circle at 0% 0%, #470d0d 5%, transparent 70%)",
  },
  {
    icon: <RemoveRedEye />,
    bg: `radial-gradient(circle at bottom, transparent 40%, #442210 39%, transparent 80%)`,
  },
  {
    icon: <Map />,
    bg: "radial-gradient(circle at 100% 100%, #0505056e 25%, transparent 70%),radial-gradient(circle at 20% 100%, #d88146 5%, transparent 70%)",
  },
];

const mapProjectToViewModel = (project, index) => ({
  title: project.title || `Project ${index + 1}`,
  subtitle: project.event_name || project.client_name || "Featured Project",
  icon: iconSequence[index % iconSequence.length],
  client: project.client_name || "Featured Client",
  event: project.event_name || "Featured Event",
  desc:
    project.description || "A tailored event experience crafted for impact.",
  bg: project.card_background_color
    ? `radial-gradient(circle at bottom, transparent 40%, ${project.card_background_color}33 39%, transparent 80%)`
    : staticItems[index % staticItems.length]?.bg,
  galleryImages: project.gallery_images?.length
    ? project.gallery_images
    : fallbackGalleryImages,
});

export default function Services() {
  const isMobile = useMediaQuery("(max-width:899px)");
  const [selected, setSelected] = useState(0);
  const [mainImage, setMainImage] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const selectedProject = items[selected] ?? null;
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

  useEffect(() => {
    let isMounted = true;

    dashboardHomeContentApi
      .projects()
      .then((response) => {
        const projects = (response?.data || []).map((project, index) =>
          mapProjectToViewModel(project, index),
        );

        if (!isMounted) return;

        if (projects.length) {
          setItems(projects);
          setSelected(0);
          setMainImage(
            projects[0].galleryImages[0] || fallbackGalleryImages[0],
          );
        } else {
          setItems(staticItems);
          setSelected(0);
          setMainImage(fallbackGalleryImages[0]);
        }

        if (isMounted) {
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setItems(staticItems);
        setSelected(0);
        setMainImage(fallbackGalleryImages[0]);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleProjectSelect = (index, project) => {
    setSelected(index);
    setMainImage(project?.galleryImages?.[0] || fallbackGalleryImages[0]);
  };

  const displayGalleryImages = selectedProject?.galleryImages?.length
    ? selectedProject.galleryImages
    : fallbackGalleryImages;

  if (isLoading) {
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
              height: { xs: 420, md: "75vh" },
              alignItems: "stretch",
              overflowX: "scroll",
              scrollbarColor: "transparent transparent",
            }}
          >
            {[...Array(4)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "clamp(66px, 7vw, 520px)",
                  minWidth: "280px",
                  height: "100%",
                  borderRadius: "24px",
                  p: 2,
                  background: "rgba(255,255,255,0.08)",
                  flexShrink: 0,
                }}
              >
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
            ))}
          </Box>

          <Container maxWidth="lg">
            <Box sx={{ mt: 5 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={isMobile ? 280 : "80vh"}
                sx={{ borderRadius: { xs: "20px", md: "40px" }, mb: 3 }}
              />

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {[...Array(4)].map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width={isMobile ? "48%" : "calc(25% - 12px)"}
                    height={isMobile ? 120 : 180}
                    sx={{ borderRadius: { xs: "20px", md: "40px" } }}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>
    );
  }

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
                onClick={() => handleProjectSelect(i, item)}
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
              alt={`${selectedProject?.title || "Project"} selected project view`}
              sx={{
                width: "100vw",
                height: { xs: 280, md: "80vh" },
                ml: "50%",
                transform: "translateX(-50%)",
                objectFit: "cover",
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
              {displayGalleryImages.map((image, index) => {
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
