import { useEffect } from "react";
import Lenis from "lenis";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

import Seo from "components/Seo";

import CaroselSection from "components/modules/home/CaroselSection.jsx";
import ClientsIndustriesSection from "components/modules/home/ClientsIndustriesSection.jsx";
import CompanyPortfolioSection from "components/modules/home/CompanyPortfolioSection";
import EventSection from "components/modules/home/EventSection";
import TechSolution from "components/modules/home/TechSolution";

import Reveal from "components/common/Reveal";
import Logo3D from "components/Logo3d";
import ContactUsSection from "components/modules/home/ContactUsSection";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.9, 1],
    [0.68, 0.64, 0.56, 0.22],
  );
  const logoX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["18vw", "-14vw", "13vw", "-8vw"],
  );
  const logoY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["4vh", "10vh", "-8vh", "3vh"],
  );

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
        position: "relative",
        isolation: "isolate",
        background: `
          linear-gradient(
            180deg,
            #1B1B1B 0%,
            #1B1B1B 8%,
            #FE572A 17%,
            #1B1B1B 28%,
            #1B1B1B 36%,
            #FE572A 47%,
            #1B1B1B 58%,
            #1B1B1B 67%,
            #FE572A 78%,
            #1B1B1B 90%,
            #1B1B1B 100%
          )
        `,
      }}
    >
      <Seo
        title="Home"
        description="Discover Go Creative Solutions, where ideas become unforgettable events through creativity, precision, and flawless execution."
        keywords="Go Creative Solutions, event management, corporate events, exhibitions, brand activations"
      />
      <Box
        component={motion.div}
        style={{
          opacity: logoOpacity,
          x: logoX,
          y: logoY,
        }}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0 18px 30px rgba(254, 87, 42, 0.3))",
        }}
      >
        <Logo3D scrollYProgress={scrollYProgress} />
      </Box>

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <CaroselSection />
        <Reveal>
          <ClientsIndustriesSection />
        </Reveal>

        <CompanyPortfolioSection />

        <EventSection />

        <TechSolution />
        <ContactUsSection/>
      </Box>
    </Box>
  );
}
