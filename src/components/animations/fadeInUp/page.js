"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function FadeInUp({
  children,
  className,
  as: Component = "div" || Component, // Allows dynamic element type (e.g., section, article, etc.)
  delay = 0.2, // Default delay before animation starts
  duration = 0.7, // Default duration of the animation
  animationRepeat = "once", // Allows animation to repeat once or infinitely
}) {
  const ref = useRef(null);

  // Check if the component is in view
  const isInView = useInView(ref, {
    amount: 0.5, // Trigger animation when 50% of the element is in view
    once: animationRepeat === "once", // Run the animation once or infinitely based on the option
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (animationRepeat === "infinite") {
      controls.start("hidden"); // Reset animation if `infinite` is chosen
    }
  }, [isInView, controls, animationRepeat]);

  const MotionComponent = motion[Component] || motion.div; // Default to motion.div if Component is invalid

  return (
    <MotionComponent
      className={className}
      ref={ref}
      initial={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
      animate={controls}
      variants={{
        hidden: { opacity: 0, transform: "translate3d(0,40px,0)" },
        visible: {
          opacity: 1,
          transform: "translate3d(0,0,0)",
          transition: { duration, delay },
        },
      }}
    >
      {children}
    </MotionComponent>
  );
}

export default FadeInUp;
