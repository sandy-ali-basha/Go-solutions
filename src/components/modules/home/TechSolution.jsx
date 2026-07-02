import { Box, Skeleton } from "@mui/material";
import Slider from "./sections/Slider";
import AnimatedText from "components/common/AnimatedText";
import { useDashboardTechSolutionServices } from "hooks/dashboard/useDashboardHomeContent";

function TechSolution() {
  const { data, isLoading } = useDashboardTechSolutionServices();
  const services = Array.isArray(data?.data)
    ? data.data
        .filter((service) => service.image_url)
        .map((service) => ({
          id: service.id,
          title: service.title,
          description: service.description,
          image: service.image_url,
        }))
    : null;

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
      {isLoading ? (
        <Skeleton
          variant="rounded"
          width="60vw"
          height={520}
          sx={{
            mx: "auto",
            borderRadius: "50px",
            bgcolor: "rgba(255,255,255,0.16)",
          }}
        />
      ) : (
        <Slider slides={services?.length ? services : undefined} />
      )}
    </Box>
  );
}

export default TechSolution;
