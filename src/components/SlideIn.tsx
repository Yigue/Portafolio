import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type SlideInProps = {
  children: React.ReactNode;
  direction: "left" | "right";
};

const SlideIn: React.FC<SlideInProps> = ({ children, direction }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-100vw" : "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
        delay:0.1,

      },
    },
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref}>
      <motion.div
        ref={wrapperRef}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideIn;
