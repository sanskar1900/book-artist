import { useEffect, useRef, useState } from "react";
import NavBar from "../components/navbar";
import IntroSection from "../components/introSection";
import TheElevnEffect from "../components/theElevnEffect";
import OurFeatures from "../components/ourFeatures";
import Footer from "../components/footer";
import WhyArtistNetwork from "../components/WhyArtistNetwork";
import HowArtistNetworkWorks from "../components/howArtistNetworkWorks";
import data from "../utils/pagesData.json";
import LoadingIndicator from "../components/loadingIndicator/page";

const Homepage = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [isLoading, setIsLoading] = useState(true);
  const [disableScroll, setDisableScroll] = useState(true); // New state
  const navbarRef = useRef(null);

  const introRef = useRef(null);
  const whyElevnRef = useRef(null);
  const howElevnWorksRef = useRef(null);
  const elevnEffectRef = useRef(null);
  const ourFeaturesRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Disable scrolling for 4 seconds
    const scrollTimer = setTimeout(() => {
      setDisableScroll(false);
    }, 4000);

    // Cleanup timers
    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    const checkWindowSize = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 768);
      }
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  useEffect(() => {
    const sections = [
      { id: "intro", ref: introRef },
      { id: "whyElevn", ref: whyElevnRef },
      { id: "howElevnWorks", ref: howElevnWorksRef },
      { id: "elevnEffect", ref: elevnEffectRef },
      { id: "ourFeatures", ref: ourFeaturesRef },
      { id: "footer", ref: footerRef },
    ];

    const handleScroll = () => {
      let navbarHeight = navbarRef.current?.getBoundingClientRect().height;
      if (isDesktop) {
        navbarHeight = navbarHeight + 100;
      } else {
        navbarHeight = navbarHeight + 90;
      }
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionRect = section.ref.current.getBoundingClientRect();

        // Check if the top of the section has passed the navbar height
        if (
          sectionRect.top <= navbarHeight &&
          sectionRect.bottom >= navbarHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    // Add scroll event listener
    if (!disableScroll) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableScroll, isDesktop]);

  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [disableScroll]);

  return (
    <>
      <div className="homepage overflow-hidden">
        {isLoading && <LoadingIndicator />}
        <div ref={navbarRef}>
          <NavBar activeSection={activeSection} renderHeader={true} />
        </div>
        <section id="intro" ref={introRef}>
          <IntroSection data={data} />
        </section>
        <section id="whyElevn" ref={whyElevnRef}>
          <WhyArtistNetwork data={data} />
        </section>
        <section id="howElevnWorks" ref={howElevnWorksRef}>
          <HowArtistNetworkWorks isDesktop={isDesktop} />
        </section>
        <section id="elevnEffect" ref={elevnEffectRef}>
          <TheElevnEffect data={data} />
        </section>
        <section id="ourFeatures" ref={ourFeaturesRef}>
          <OurFeatures isDesktop={isDesktop} />
        </section>
        <section id="footer" ref={footerRef}>
          <Footer data={data} isDesktop={isDesktop} />
        </section>
      </div>
    </>
  );
};

export default Homepage;
