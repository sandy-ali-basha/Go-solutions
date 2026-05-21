import { Box, } from "@mui/material";
import Slider from "./sections/Slider";
import AnimatedText from "components/common/AnimatedText";

function TechSolution() {
  return (
    <Box
      sx={{
        mt: 10,
        background: "transparent",
        position: "relative",
      }}
    >
      <AnimatedText
        firstText={"Tech S"}
        secondText={"lutions services"}
      ></AnimatedText>
      <Slider />
    </Box>
  );
}

export default TechSolution;
