// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// function FadeRight({ className, children }) {
//   return (
//     <motion.div
//       className={className}
//       initial={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
//       whileInView={{
//         // onani
//         opacity: 1,
//         transition: { duration: 1, delay: 0.2 },
//         transform: "translate3d(0,0,0)",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default FadeRight;

"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function FadeRight({
  className,
  children,
  as: Component = "div",
  delay,
  duration,
  animationRepeat = "once", // 'once' (default) or 'infinite'
}) {
  const ref = useRef(null);

  // Check if the component is in view
  const isInView = useInView(ref, {
    amount: 0.5,
    once: animationRepeat === "once",
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
      initial={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
      animate={controls}
      variants={{
        hidden: { opacity: 0, transform: "translate3d(100px,0,0)" },
        visible: {
          opacity: 1,
          transform: "translate3d(0,0,0)",
          transition: { duration: duration || 1, delay: delay || 0.2 },
        },
      }}
    >
      {children}
    </MotionComponent>
  );
}

export default FadeRight;
