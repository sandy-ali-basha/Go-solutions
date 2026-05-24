import { Box, Divider, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlides } from "../portfolioData";
function Slider() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 45%"],
  });
  const sliderY = useTransform(scrollYProgress, [0, 1], [70, -20]);
  const sliderOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const navScale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);

  return (
    <>
      <Box
        ref={ref}
        component={motion.div}
        style={{
          y: sliderY,
          opacity: sliderOpacity,
        }}
        sx={{
          px: { xs: 0, md: 8 },
          overflow: "visible",
          position: "relative",
        }}
      >
        <Box
          className="portfolio-swiper-button-prev"
          sx={{
            position: "absolute",
            left: "10vw",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "all 0.2s ease",

            zIndex: 5,
            "&:hover": {
              left: "9vw",
            },
          }}
        >
          <IconButton
            component={motion.button}
            style={{ scale: navScale }}
            sx={{
              color: "white",
              width: "4vw",
              height: "50vh",
              borderRadius: "40px",
              border: "2px solid rgba(254, 87, 42, 0.95)",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(185, 185, 185, 0.11)",
              transition: "all 0.2s ease",
              boxShadow: "0 10px 26px rgba(72, 24, 10, 0.11)",
              "&:hover": {
                backgroundColor: "rgba(140, 68, 39, 0.28)",
                width: "7vw",
              },
              display: { xs: "none", md: "block" },
            }}
          >
            <ChevronLeft sx={{ fontSize: { xs: 30, md: 38 } }} />
          </IconButton>
        </Box>

        <Box
          className="portfolio-swiper-button-next"
          sx={{
            position: "absolute",
            right: "10.25vw",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
            transition: "all 0.2s ease",
            "&:hover": {
              right: "9.5vw",
            },
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton
            component={motion.button}
            style={{ scale: navScale }}
            sx={{
              color: "white",
              width: "4vw",
              height: "50vh",
              borderRadius: "40px",
              border: "2px solid rgba(254, 87, 42, 0.95)",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(185, 185, 185, 0.11)",
              transition: "all 0.2s ease",
              boxShadow: "0 10px 26px rgba(72, 24, 10, 0.11)",
              "&:hover": {
                backgroundColor: "rgba(140, 68, 39, 0.28)",
                width: "7vw",
              },
            }}
          >
            <ChevronRight sx={{ fontSize: { xs: 30, md: 38 } }} />
          </IconButton>
        </Box>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[Navigation, EffectCards]}
          navigation={{
            nextEl: ".portfolio-swiper-button-next",
            prevEl: ".portfolio-swiper-button-prev",
          }}
          cardsEffect={{
            slideShadows: false,
            rotate: true,
            perSlideRotate: 3,
            perSlideOffset: 6,
          }}
          spaceBetween={24}
          slidesPerView={1}
          style={{
            paddingBottom: "40px",
            overflow: "visible",
          }}
        >
          {portfolioSlides.map((slide) => (
            <SwiperSlide
              style={{
                overflow: "visible",
              }}
              key={slide.id}
            >
              <Box
                sx={{
                  px: { xs: 0, md: 8 },
                }}
              >
                <Box
                  role="button"
                  tabIndex={0}
                  sx={{
                    border: "1px solid rgba(254, 88, 42, 0.45)",
                    mx: "auto",
                    position: "relative",
                    borderRadius: ["45px","50px"],
                    overflow: "hidden",
                    width: ["80vw", "60vw"],
                    minHeight: { xs: "60vh", md: "60vh" },
                    boxShadow: "0 26px 30px rgba(53, 20, 10, 0.28)",
                  }}
                >
                  <Box
                    component="img"
                    src={slide.image}
                    alt={slide.title}
                    sx={{
                      width: "100%",
                      height: { xs: 460, md: 520 },
                      display: "block",
                      objectFit: "cover",
                      background: "transparent",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,

                      background:
                        "linear-gradient(180deg, rgba(22,22,22,0.02) 0%, rgba(22,22,22,0.12) 40%, rgba(16,16,16,0.42) 100%)",
                    }}
                  />

                  <Box
                    sx={{
                      boxSizing: "border-box",
                      position: "absolute",
                      height:"auto",
                      bottom: 0,
                      margin:"10px",
                      px: { xs: 2.5, md: 3.5 },
                      py: { xs: 2.25, md: 3 },
                      background: "rgba(39, 25, 25, 0.09)",
                      border: "1px solid #FFFFFF",
                      boxShadow:
                        "inset 0px 4px 20px 1px #ffffff40, inset 1px 4px 4px #ffffff33",
                      backdropFilter: "blur(5px)",
                      borderRadius: { xs: "35px", md: "40px" },
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        borderRadius: "60px",
                        scale: 1.02,
                      },
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        navigate(`/projects`);
                      }
                    }}
                    onClick={() => navigate(`/projects`)}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.7rem", md: "2.1rem" },
                          mb: 1.25,
                          fontWeight: 600,
                          color: "white",
                          letterSpacing: "-1%",
                        }}
                      >
                        {slide.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          maxWidth: { xs: "100%", md: "72%" },
                          fontSize: "1rem",
                          lineHeight: 1.55,
                          fontWeight: 200,
                          letterSpacing: "-1%",
                        }}
                      >
                        {slide.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
       
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default Slider;
