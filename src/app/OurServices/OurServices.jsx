import { useEffect } from "react";
import Lenis from "lenis";
import { Box } from "@mui/material";
import Seo from "components/Seo";
import Reveal from "components/common/Reveal";
import ServicesShowcase from "./components/ServicesShowcase";
import FolderCardsSection from "./components/FolderCardsSection";
import MeetGoTeam from "./components/TeamCard";
import ValuableIsosSection from "./components/ValuableIsosSection";

export default function OurServices() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        textAlign: "start",
        overflowX: "hidden",
      }}
    >
      <Seo
        title="Home"
        description="Discover Go Creative Solutions, where ideas become unforgettable events through creativity, precision, and flawless execution."
        keywords="Go Creative Solutions, event management, corporate events, exhibitions, brand activations"
      />
      <Reveal delay={0.1}>
        <ServicesShowcase></ServicesShowcase>
      </Reveal>

      <FolderCardsSection />
      <Box
        sx={{
          background:
            "linear-gradient(  180deg,  #1B1B1B 0%,   #FE572A 50%,  #1B1B1B 100%)",
        }}
      >
        <MeetGoTeam />
        <ValuableIsosSection />
      </Box>
    </Box>
  );
}
