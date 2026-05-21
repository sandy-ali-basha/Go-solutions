import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

function TypingText({
  text = "All Rights Reserved (c) 2026",
  sx = {},
  variant = "text",
}) {
  const ref = useRef(null);
  const [displayedText, setDisplayedText] = useState("");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 58%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const cursorOpacity = useTransform(scrollYProgress, [0, 0.98, 1], [1, 1, 0]);

  useEffect(() => {
    const currentProgress = scrollYProgress.get();
    setDisplayedText(text.slice(0, Math.round(currentProgress * text.length)));
  }, [scrollYProgress, text]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextLength = Math.round(latest * text.length);
    setDisplayedText(text.slice(0, nextLength));
  });

  return (
    <Typography
      ref={ref}
      component={motion.p}
      style={{ opacity, y }}
      sx={{
        color: "#C7C7C7",
        fontSize: "0.9rem",
        display: "flex",
        alignItems: "center",
        gap: "2px",
        ...sx,
      }}
      variant={variant}
    >
      {displayedText}

      <motion.span style={{ opacity: cursorOpacity }}>|</motion.span>
    </Typography>
  );
}

export default TypingText;
