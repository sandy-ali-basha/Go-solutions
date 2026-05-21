import React, { useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

import logo from "assets/images/logo.svg";

const items = [
  "Tech Solutions",
  "Events Managements",
  "Booth / Exhibition",
  "Brand Activation",
];

export default function ServicesSwiperSection() {
  const [isHovering, setIsHovering] = useState(false);
  console.log("isHovering:", isHovering);
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
            modules={[Mousewheel]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            speed={900}
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
