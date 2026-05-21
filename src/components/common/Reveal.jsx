import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 50,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 55%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        opacity,
        y: translateY,
        scale,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}
