import { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "assets/images/goHeroSection.png";

const CaroselSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.55]);

  return (
    <>
      <Box
        ref={ref}
        sx={{
          paddingBottom: "2dvh",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <Box
          component={motion.img}
          srcSet={`${img}`}
          src={`${img}`}
          alt={"hero image"}
          loading="lazy"
          style={{
            scale: imageScale,
            y: imageY,
            opacity: imageOpacity,
          }}
          sx={{
            height: "90dvh",
            width: "100dvw",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>
    </>
  );
};

export default CaroselSection;
