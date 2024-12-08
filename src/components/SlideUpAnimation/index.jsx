import React, { useState, useEffect } from "react";
import classes from "./slideUpAnimation.module.css"; // Assuming CSS file is named App.css
import FadeInUp from "../animations/fadeInUp/page";

const SlideUpAnimation = ({ textArr, preText }) => {
  const texts = textArr;
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <FadeInUp
      animationRepeat="once"
      delay={2.3}
      duration={1}
      className={`${classes.introHeading} ${classes.headContainer}`}
    >
      <p className={classes.introHeadingFirstPart}>{preText}</p>
      {texts.map(
        (text, index) =>
          visibleIndex === index && (
            <div
              className={classes.slideUpAnimation}
              key={index}
            >
              <p className={classes.introHeadingSecondPart}>
                &nbsp;{`${text}`}
              </p>
            </div>
          )
      )}
    </FadeInUp>
  );
};

export default SlideUpAnimation;
