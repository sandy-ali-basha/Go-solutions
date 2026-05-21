import bigShape from "assets/images/icons/oStar.svg";
import { motion } from "framer-motion";
import { Box, Container, Grid, InputBase, Typography } from "@mui/material";
import AnimatedButton from "components/common/AnimatedButton";
import TypingText from "components/common/TypingText";
import AnimatedText from "components/common/AnimatedText";
const inputStyles = {
  border: "1px solid #D9D9D9",
  borderRadius: "12px",
  px: 2,
  py: 1.5,
  transition: "all 0.3s",
  color: "#fff",
  "&:hover": {
    borderColor: "#FF5B2E",
    background: "#fff",
    color: "#000",
  },
};

const ContactUsSection = () => {
  return (
    <Container
      sx={{
        py: 10,
        backdropFilter: "blur(25px)",
        background: "#2b2b2b3b",
        borderRadius: "30px",
        mt: 10,
        mb:10
      }}
    >
      {/* TOP SECTION */}
      <AnimatedText firstText="Creativity In M" secondText="tion." />

      <Grid container spacing={6}>
        {/* LEFT */}
        <Grid item xs={12} md={5}>
          <Box sx={{ maxWidth: 520 }}>
            {/* FORM */}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  NAME
                </Typography>

                <InputBase placeholder="Your name" fullWidth sx={inputStyles} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  EMAIL
                </Typography>

                <InputBase
                  placeholder="Email@website.com"
                  fullWidth
                  sx={inputStyles}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  MESSAGE
                </Typography>

                <InputBase
                  placeholder="Type your message..."
                  multiline
                  rows={5}
                  fullWidth
                  sx={inputStyles}
                />
              </Box>

              <AnimatedButton>Submit</AnimatedButton>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <motion.span
              variants={{
                hidden: {
                  y: 100,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "inline-block",
                willChange: "transform, opacity",
                overflow: "hidden",
                fontSize: "2rem",
                fontWeight: 500,
                textWrap: "nowrap",
                letterSpacing: "-1px",
              }}
            >
              Start Your Event Conversation
            </motion.span>
            <TypingText
              sx={{
                fontSize: "1.1rem",
                maxWidth: 500,
                lineHeight: 1.3,
                letterSpacing: "-1px",
                fontWeight: 300,
              }}
              text={
                "Share your event needs and our team will get in touch to provide tailored solutions."
              }
            ></TypingText>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <motion.div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={bigShape}
                alt="shape"
                sx={{
                  width: { xs: "40%", md: "70%" },
                  opacity: 1,
                  mx: "auto",
                  pt: 5,
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ContactUsSection;
