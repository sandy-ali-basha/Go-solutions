import React, { useRef } from "react";
import { Button } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionButton = motion(Button);

function AnimatedButton({ children = "Submit", onClick, sx = {}, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 62%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [26, 0]);

  return (
    <MotionButton
      ref={ref}
      variant="contained"
      onClick={onClick}
      style={{ opacity, scale, y }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      sx={{
        position: "relative",
        overflow: "hidden",

        width: "fit-content",
        px: 4,
        py: 1.3,
        borderRadius: "12px",
        background: "primary.main",
        color: "white",

        textTransform: "none",
        fontWeight: 600,
        fontSize: "1rem",

        boxShadow: "none",

        transition: "background 0.3s ease",

        "&:hover": {
          background: "primary.main",
          boxShadow: "none",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-120%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.55), transparent)",
          transition: "all 0.7s ease",
        },

        "&:hover::before": {
          left: "120%",
        },

        ...sx,
      }}
      {...props}
    >
      <motion.span
        initial={false}
        whileHover={{
          letterSpacing: "0.5px",
        }}

        transition={{
          duration: 0.3,
        }}

        style={{
          position: "relative",
          zIndex: 2,
          textWrap:"nowrap",
          display:"flex",
        }}
      >
        {children}
      </motion.span>
    </MotionButton>
  );
}

export default AnimatedButton;
