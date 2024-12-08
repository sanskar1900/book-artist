"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function BounceIn({
  children,
  className,
  as: Component = "div", // Dynamically set the element type (e.g., section, article, etc.)
  delay = 0.2, // Delay before animation starts
  duration = 1, // Duration of the animation
  animationRepeat = "once", // Controls if animation repeats once or infinitely
}) {
  const ref = useRef(null);

  // Check if the component is in view
  const isInView = useInView(ref, {
    amount: 0.5, // Trigger when 50% of the element is in view
    once: animationRepeat === "once", // Once or infinitely based on the repeat setting
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (animationRepeat === "infinite") {
      controls.start("hidden"); // Reset animation if infinite repeat
    }
  }, [isInView, controls, animationRepeat]);

  const MotionComponent = motion[Component] || motion.div; // Default to motion.div if invalid

  return (
    <MotionComponent
      className={className}
      ref={ref}
      initial={{ opacity: 0, x: "-100vw" }} // Start off-screen to the left
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: "-100vw" }, // Hidden state (offscreen)
        visible: {
          opacity: 1,
          x: 0, // Final position (in place)
          transition: {
            duration,
            delay,
            type: "spring", // Spring animation for bounce
            stiffness: 150, // How stiff the spring is (controls bounce strength)
            damping: 10, // How much damping (controls the bounce speed)
            repeat: animationRepeat === "infinite" ? Infinity : 0, // Repeat infinitely or just once
            repeatType: "loop", // Makes it loop the bounce (if infinite)
            bounce: [0.25, 0.45, 0.75], // Bounce curve (use this for effect)
          },
        },
      }}
    >
      {children}
    </MotionComponent>
  );
}

export default BounceIn;
