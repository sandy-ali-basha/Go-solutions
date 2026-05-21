import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

import { motion, useScroll, useTransform } from "framer-motion";

import img1 from "assets/images/team/team (1).jpg";
import img2 from "assets/images/team/team (2).webp";
import img3 from "assets/images/team/team (2).jpg";
import img4 from "assets/images/team/team (3).webp";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Mousewheel } from "swiper/modules";

const MotionBox = motion(Box);

const team = [
  {
    image: img1,
    name: "Ayah Arnous",
    role: "General Manager",
    description:
      "Leading strategic growth and managing operations across all departments.",
  },
  {
    image: img2,
    name: "Mahmoud Al-ani",
    role: "Sales Director",
    description:
      "Driving revenue growth and building strong client relationships worldwide.",
  },
  {
    image: img3,
    name: "Sandy",
    role: "Web Developer",
    description:
      "Crafting modern user experiences with scalable and high-performance solutions.",
  },
  {
    image: img4,
    name: "Sarah Lee",
    role: "Marketing Specialist",
    description:
      "Creating innovative campaigns that connect brands with their audience.",
  },
  {
    image: img2,
    name: "David Smith",
    role: "UI/UX Designer",
    description:
      "Designing intuitive interfaces focused on usability and beautiful interactions.",
  },
];

function TeamCard({ member, index, scrollYProgress }) {
  // HORIZONTAL SLIDER EFFECT
  const x = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <Box
      sx={{
        width: {
          xs: 240,
          md: 280,
        },
        height: {
          xs: 360,
          md: 460,
        },
        borderRadius: "28px",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        cursor: "pointer",
        group: "card",
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={member.image}
        alt={member.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "0.5s",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          p: 3,
          color: "white",
          background:
            "linear-gradient(to top, rgba(14, 14, 14, 0.87), transparent 60%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.95rem",
            mt: 0.7,
            mb: 2,
          }}
        >
          {member.role}
        </Typography>
      </Box>
      {/* DESCRIPTION ON HOVER */}
      <MotionBox
        sx={{
          backdropFilter: "blur(5px)",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          right: 0,
          bottom: 0,
          p: 3,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "0.92rem",
            lineHeight: 1.7,
          }}
        >
          {member.description}
        </Typography>
      </MotionBox>
    </Box>
  );
}

export default function MeetGoTeam() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: 18,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* TITLE */}
        <Box
          sx={{
            textAlign: "center",
            mb: 12,
            maxWidth: 900,
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: {
                xs: "3rem",
                md: "5rem",
              },
              fontWeight: 300,
              lineHeight: 1,
              mb: 3,
              letterSpacing: "-0.04em",
            }}
          >
            Meet Go Team
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
              },
              lineHeight: 1.7,
              maxWidth: 650,
              mx: "auto",
            }}
          >
            Hear the success stories of the businesses we’ve helped. We work
            with a variety of industries and passionate people.
          </Typography>
        </Box>
        <Swiper
          modules={[Mousewheel, Autoplay]}
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={false}
          grabCursor={true}
          speed={1000}
          // MOUSEWHEEL CONTROL
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          // AUTO MOVE
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{
            overflow: "visible",
            paddingBottom: "20px",
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
              }}
            >
              <TeamCard
                member={member}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
