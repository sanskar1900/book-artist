"use client";
import "react-multi-carousel/lib/styles.css";

import FadeInUp from "../animations/fadeInUp/page";
import "./OurFeaturesSliderMobile.css";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

function OurFeaturesSliderMobile() {
  return (
    <FadeInUp className="carousel-container-mobile py-5 my-5">
      {/*      
      <OurFeaturesCarousel
        sliderClassName={"our-features-slider-mobile mx-auto"}
      >
        <div>
          <OurFeaturesContent
            heading={"Invite & Endorse"}
            text={
              "Females can invite two males and decide which ones can join from the waitlist"
            }
            imageUrl={OurFeaturesSliderRightImage1}
          ></OurFeaturesContent>
        </div>
        <div>
          <OurFeaturesContent
            heading={"The experience of love is ours."}
            text={
              "Users can conveniently schedule dates across 100+ experiences!"
            }
            imageUrl={OurFeaturesSliderRightImage2}
          ></OurFeaturesContent>
        </div>
        <div>
          <OurFeaturesContent
            heading={"Report unsafe during date"}
            text={
              "In case of emergency restaurant staff & Elevn team will get you to safety asap"
            }
            imageUrl={OurFeaturesSliderRightImage3}
          ></OurFeaturesContent>
        </div>
      </OurFeaturesCarousel> */}
    </FadeInUp>
  );
}

export default OurFeaturesSliderMobile;
