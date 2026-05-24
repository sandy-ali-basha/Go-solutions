import { Box, Divider, Typography } from "@mui/material";
import Slider from "./sections/Slider";
import AnimatedText from "components/common/AnimatedText";
import TypingText from "components/common/TypingText";
import huawei from "assets/images/icons/huawei.svg";

function CompanyPortfolioSection() {
  return (
    <Box
      sx={{
        background: "transparent",
        position: "relative",
      }}
    >
      <AnimatedText
        firstText={"C"}
        secondText={"mpany Portfolio"}
      ></AnimatedText>
      {/* slider */}
      <Slider />
      
      <Box
        sx={{
          width: ["90vw", "70vw"],
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
          gap: { xs: 2.5, md: 3 },
          alignItems: "start",
          mt: { xs: 3.5, md: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.6rem" },
            lineHeight: 1,
            fontWeight: 300,
            color: "white",
          }}
        >
          Testimonial
        </Typography>

        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.94)",
              maxWidth: 760,
            }}
          >
            <Box component="span" sx={{ fontWeight: 700 }}>
              "At Go Event Management,
            </Box>{" "}
            <TypingText
              text="We turn ideas into unforgettable experiences. As a full-service
                      event management company, we specialize in crafting seamless,
                      innovative, and impactful events tailored to your vision."
            ></TypingText>
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection:"row",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  flexShrink: 0,
                  color: "white",
                }}
              />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "white" }}
                >
                  Mohamed sultan
                </Typography>
                <Typography variant="caption" sx={{ color: "#ffffff" }}>
                  Marketing Coordinator
                </Typography>
              </Box>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", sm: "block" },
                borderColor: "rgba(255,255,255,0.28)",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                component="img"
                src={huawei}
                sx={{
                  width: 42,
                  height: 24,
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  background: "transparent",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CompanyPortfolioSection;
