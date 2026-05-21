import { Box, Typography } from "@mui/material";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import oStar from "assets/images/icons/oStar.svg";

const MotionBox = motion(Box);

function AnimatedText({ firstText, secondText }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 45%"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [-90, 180]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });
  return (
    <MotionBox
      ref={ref}
      sx={{
        mb: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2.5rem", md: "6rem" },
          lineHeight: 1,
          fontWeight: 600,
          color: "white",
          fontFamily: "gilroy, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          overflow: "clip",
        }}
      >
        {/* FIRST TEXT */}
        <motion.span
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
            y: textY,
            opacity: textOpacity,
          }}
        >
          {firstText}
        </motion.span>

        {/* STAR */}

        <motion.div
          initial="rest"
          whileHover="hover"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            mouseX.set(x * 0.18);
            mouseY.set(y * 0.18);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          style={{
            scale: 1.3,
            x: springX,
            y: springY,
            width: "clamp(70px, 10vw, 110px)",
            height: "clamp(70px, 10vw, 110px)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {/* HOVER CIRCLE */}

          <motion.div
            variants={{
              rest: {
                opacity: 0,
                scale: 0.7,
              },
              hover: {
                opacity: 1,
                scale: 1.4,
              },
            }}
            className="RotatingCircle"
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "absolute",
              inset: 0,
              mixBlendMode: "revert",
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                rotate: circleRotate,
              }}
            >
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                <defs>
                  <path
                    id="circlePath"
                    d="
                      M 100, 100
                      m -75, 0
                      a 75,75 0 1,1 150,0
                      a 75,75 0 1,1 -150,0
                    "
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="12"
                  fontWeight="500"
                  letterSpacing="2px"
                >
                  <textPath href="#circlePath">
                    {firstText} o {secondText} • GO CREATIVE •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

          {/* STAR */}

          <motion.img
            src={oStar}
            alt="star"
            style={{
              width: "55%",
              height: "55%",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              rotate: starRotate,
            }}
          />
        </motion.div>

        {/* SECOND TEXT */}

        <motion.span
          style={{
            display: "inline-block",
            willChange: "transform, opacity",
            y: textY,
            opacity: textOpacity,
          }}
        >
          {secondText}
        </motion.span>
      </Typography>
    </MotionBox>
  );
}

export default AnimatedText;
