import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useDashboardHomeVideo } from "hooks/dashboard/useDashboardHomeContent";

function HomeVideoSection() {
  const { data } = useDashboardHomeVideo();
  const video = data?.data;

  if (!video?.video_url) {
    return null;
  }

  return (
    <Box
      sx={{
        color: "white",
        py: { xs: 6, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        {video.title && (
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: { xs: 3, md: 4 },
              fontWeight: 400,
            }}
          >
            {video.title}
          </Typography>
        )}

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            overflow: "hidden",
            borderRadius: 1,
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 24px 70px rgba(0,0,0,0.26)",
            backgroundColor: "#101010",
          }}
        >
          <Box
            component="video"
            src={video.video_url}
            poster={video.poster_url || undefined}
            controls
            playsInline
            sx={{
              display: "block",
              width: "100%",
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default HomeVideoSection;
