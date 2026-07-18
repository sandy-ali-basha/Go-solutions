import { Box } from "@mui/material";
import { useDashboardHomeVideo } from "hooks/dashboard/useDashboardHomeContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function HomeVideoSection() {
  const { data } = useDashboardHomeVideo();
  const video = data?.data;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.55]);

  if (!video?.video_url) {
    return null;
  }

  return (
    <Box
      sx={{
        paddingBottom: "2dvh",
        background: "transparent",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <Box
        component={motion.div}
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
      >
        <Box
          component="video"
          src={video.video_url}
          poster={video.poster_url || undefined}
          playsInline
          autoPlay
          sx={{
            display: "block",
            width: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}

export default HomeVideoSection;
