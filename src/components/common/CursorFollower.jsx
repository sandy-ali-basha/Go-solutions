import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box } from "@mui/material";

const MotionBox = motion(Box);

export default function CursorFollower({ active }) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
  });

  React.useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(active ? e.clientX - 50 : e.clientX);
      mouseY.set(active ? e.clientY - 50 : e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <MotionBox
      animate={{
        scale: active ? 1 : 1,
        opacity: active ? 1 : 1,
      }}
      transition={{
        duration: 0.25,
      }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: active ? 100 : 10,
        height: active ? 100 : 10,
        borderRadius: "50%",
        pointerEvents: "none",
        overflow: "hidden",
        background: active
          ? "linear-gradient(135deg, rgba(255, 91, 46, 0.66), rgba(255, 91, 46, 0.21))"
          : "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <MotionBox
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -70, 0
                a 70,70 0 1,1 140,0
                a 70,70 0 1,1 -140,0
              "
            />
          </defs>

          <text fill="white" fontSize="12" fontWeight="600" letterSpacing="2px">
            <textPath href="#circlePath">GO CREATIVE • GO CREATIVE •</textPath>
          </text>
        </svg>
      </MotionBox>

      <NorthEastIcon
        sx={{
          color: "white",
          fontSize: 34,
          position: "relative",
          zIndex: 2,
        }}
      />
    </MotionBox>
  );
}
