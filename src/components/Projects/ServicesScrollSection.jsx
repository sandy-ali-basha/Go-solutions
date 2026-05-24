import React, { useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";

import logo from "assets/images/Logo.svg";

const items = [
  "Tech Solutions",
  "Events Managements",
  "Booth / Exhibition",
  "Brand Activation",
];

export default function ServicesSwiperSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: { xs: 240, md: 420 }, mb: 2 }}
          />

          <Swiper
            modules={[Mousewheel, Autoplay]}
            slidesPerView={"1"}
            breakpoints={{
              670: { slidesPerView: "1" },
              900: { slidesPerView: "3" },
            }}
            centeredSlides={true}
            spaceBetween={30}
            speed={900}
            autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            allowTouchMove={true}
            resistanceRatio={0}
            mousewheel={true}
            style={{ width: "100%" }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      transition: "all 0.4s ease",
                      opacity: isActive ? 1 : 0.5,
                      color: isActive ? "#FF5A1F" : "white",
                      transform: isActive ? "scale(1.15)" : "scale(0.95)",
                      userSelect: "none",
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
