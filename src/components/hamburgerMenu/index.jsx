import { useState, useEffect, useRef } from "react";
import { hamburgerItems } from "./data";
import classes from "./hamburgerMenu.module.css";
import { ARTIST_NEXT_DOOR_LOGO, HAMBURGER_ARROW } from "../../utils/images";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = ({ handleHamburgerClick, setShowMenu }) => {
  const [showList, setShowList] = useState({ 0: true, 1: false });
  const openLink = useNavigate();

  // Create a ref for the wrapper div
  const wrapperRef = useRef(null);

  const handleClickMenuItem = (isDropdown, url, index) => {
    if (isDropdown) {
      const allClosed = { 0: false, 1: false };
      setShowList({ ...allClosed, [index]: !showList[index] });
      return;
    }
    openLink.push(url);
    setShowMenu(false);
  };

  // Handle clicks outside of the wrapper
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the wrapper
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowMenu(false); // Close the menu
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setShowMenu]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper} ref={wrapperRef}>
        <div className={classes.top}>
          <img src={ARTIST_NEXT_DOOR_LOGO} alt="logo" width={80} height={54} />
        </div>
        <div className={classes.headItemsContainer}>
          {hamburgerItems.map(({ key, name, isDropdown, children, url }, i) => {
            return (
              <div key={key}>
                <div
                  className={classes.headItemsName}
                  onClick={() => handleClickMenuItem(isDropdown, url, i)}
                >
                  {name}{" "}
                  {isDropdown && (
                    <img
                      src={HAMBURGER_ARROW}
                      alt="arrow"
                      width={15}
                      height={15}
                      className={`${
                        showList[i] ? classes.arrowUp : classes.arrowDown
                      }`}
                    />
                  )}
                </div>
                {showList[i] && (
                  <>
                    {children &&
                      children.map(({ text, icon, url }, index) => {
                        return (
                          <div
                            key={text}
                            onClick={() => openLink.push(url)}
                            className={classes.headItemsChildName}
                          >
                            {text}
                          </div>
                        );
                      })}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
