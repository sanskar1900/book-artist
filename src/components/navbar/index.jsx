"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./navbar.module.css";

import Dropdown from "../Dropdown";
import HamburgerMenu from "../hamburgerMenu";
import MenuItem from "../MenuItem";
import { headItems } from "./headItems";
import {
  determineBackgroundColor,
  determineColor,
} from "../../utils/determine";
import {
  ARTIST_NEXT_DOOR_LOGO,
  ELEVN_HEADER_PURPLE_LOGO,
  HAMBURGER_ICON,
  HAMBURGER_ICON_PURPLE,
} from "../../utils/images";
import { useNavigate } from "react-router-dom";

const NavBar = ({ activeSection, renderHeader = false }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [theColor, setTheColor] = useState("white");
  const [navbarPosition, setNavbarPosition] = useState(0);
  const [footerNavOpacity, setFooterNavOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [shouldAnimate, setShouldAnimate] = useState(false); // State for animation
  const hasAnimated = useRef(true);
  const router = useNavigate(); // useNavigate hook for programmatic navigation

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  const onDropDownSelect = (selectedItem) => {
    router.push(selectedItem.url); // Navigate to the selected URL
  };

  useEffect(() => {
    setTheColor(determineColor(activeSection));
    setBackgroundColor(determineBackgroundColor(activeSection));
    if (activeSection === "footer") {
      setNavbarPosition("-100%");
      setFooterNavOpacity("0 0.3s ease-in-out");
    } else {
      setNavbarPosition("0");
      setFooterNavOpacity(1);
    }
  }, [activeSection]);

  useEffect(() => {
    if (hasAnimated.current) {
      hasAnimated.current = false; // Mark animation as completed
    }
  }, []);

  console.log("The has animated value is:", hasAnimated);
  //{ id: "intro", ref: introRef },
  // { id: "whyElevn", ref: whyElevnRef },
  // { id: "howElevnWorks", ref: howElevnWorksRef },
  // { id: "elevnEffect", ref: elevnEffectRef },
  // { id: "ourFeatures", ref: ourFeaturesRef },

  return (
    <>
      {showMenu && (
        <HamburgerMenu
          handleHamburgerClick={handleHamburgerClick}
          setShowMenu={setShowMenu}
        />
      )}

      {!showMenu && (
        <div
          className={`${classes.head} ${
            hasAnimated && renderHeader ? classes.onlyAnimation : ""
          }`}
          style={{
            backgroundColor: backgroundColor,
            transform: `translateY(${navbarPosition})`,
            opacity: footerNavOpacity,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <img
            src={theColor === "white" ? HAMBURGER_ICON : HAMBURGER_ICON_PURPLE}
            width={28}
            height={18}
            alt="hamburger"
            className={classes.hamburger}
            onClick={handleHamburgerClick}
          />
          <img
            src={
              theColor === "white"
                ? ARTIST_NEXT_DOOR_LOGO
                : ELEVN_HEADER_PURPLE_LOGO
            }
            alt="white-logo"
            className={classes.andLogo}
            onClick={() => router.push("/")} // Replacing openLink with navigate
            width={200}
            height={110}
          />

          <a href="https://elevncommunity.com/" style={{ display: "none" }}>
            <img
              src={ARTIST_NEXT_DOOR_LOGO}
              width={141}
              height={110}
              alt="white-logo"
              className={classes.elevnLogo}
              onClick={() => router.push("/")}
              loading="lazy"
            />
          </a>

          <div className={classes.headItemsContainer}>
            {headItems.map(
              ({
                key,
                name,
                icon,
                isButton,
                children,
                link,
                isDropdown,
                isMenuItem,
                moEngageEventId,
                fullLink,
              }) => {
                if (isButton) {
                  return (
                    <div key={key}>
                      <button
                        className={classes.headItemsBtn}
                        onClick={() => {
                          router.push(link); // Replacing openLink with navigate
                        }}
                      >
                        <span
                          style={{ textDecoration: "underline !important;" }}
                        ></span>
                        {name}
                      </button>
                      <a href={fullLink} style={{ display: "none" }}>
                        {name}
                      </a>
                    </div>
                  );
                }
                if (isDropdown) {
                  return (
                    <Dropdown
                      key={key}
                      theColor={theColor}
                      dropDownName={name}
                      dropDownIcon={icon}
                      menuList={children}
                      dropDownId={key}
                      onDropDownSelect={onDropDownSelect}
                    />
                  );
                }
                if (isMenuItem) {
                  return (
                    <MenuItem
                      key={key}
                      name={name}
                      onClick={() => {
                        router.push(link); // Replacing openLink with navigate
                      }}
                      fullLink={fullLink}
                      activeSection={activeSection}
                    />
                  );
                }
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
