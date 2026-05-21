import { Box } from "@mui/material";
import Seo from "components/Seo";
import ServicesScrollSection from "components/Projects/ServicesScrollSection";
import Projects from "components/Projects/Projects";

function ProjectPage() {
  return (
    <Box
    >
      <Seo
        title="Projects"
        description="Explore our portfolio of successful event management projects."
        keywords={`Go Creative Solutions, event management`}
      />

      <ServicesScrollSection />
      <Projects/>
    </Box>
  );
}

export default ProjectPage;
