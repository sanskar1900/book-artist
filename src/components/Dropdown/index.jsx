import { useState, useEffect } from "react";
import classes from "./dropdown.module.css";
import { useNavigate } from "react-router-dom";

const Dropdown = ({
  dropDownName,
  dropDownIcon,
  menuList,
  dropDownId,
  onDropDownSelect,
  variant,
  theColor,
}) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuItem = (menuItem) => {
    if (onDropDownSelect && typeof onDropDownSelect === "function") {
      onDropDownSelect(menuItem);
    } else {
      navigate(menuItem.url);
    }
  };

  const handleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!document.getElementById(dropDownId)?.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropDownId]);

  return (
    <div className={classes.root} id={dropDownId} onClick={handleDropdown}>
      <div className={classes.dropDownContainer}>
        {dropDownIcon && (
          <img src={dropDownIcon} alt="icon" width={18} height={18} />
        )}

        {variant === "class-selector" ? (
          <div className={classes.gradeSelector}>
            <div
              className={classes.gradeSelectorName}
              style={{ color: theColor }}
            >
              {dropDownName}
            </div>
            <div className={classes.dropDownIcon}></div>
          </div>
        ) : (
          <>
            <div className={classes.dropDownName} style={{ color: theColor }}>
              {activeIndex ? (
                <>
                  <span style={{ fontFamily: "sg-semibold-20" }}>
                    {dropDownName}
                  </span>
                  <div
                    style={{
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                      backgroundColor: theColor,
                      minHeight: "5px",
                      maxWidth: "80%",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  ></div>
                </>
              ) : (
                <span> {dropDownName}</span>
              )}
            </div>
            <div>{" "}</div>
          </>
        )}
      </div>
      <div
        className={`${
          open
            ? classes.activeDropdownCardStyle
            : classes.inactiveDropdownCardStyle
        }`}
      >
        {menuList.map((menuItem, i) => {
          return (
            <div
              onClick={() => handleMenuItem(menuItem)}
              key={i}
              className={classes.menuItemStyle}
            >
              {menuItem.icon && (
                <div className={classes.icon}>
                  <img
                    src={menuItem.icon}
                    width={26}
                    height={24}
                    alt={"classes_icon"}
                  />
                </div>
              )}
              <div className={classes.menuItemText}>{menuItem.text}</div>
              <a
                href={menuItem.fullLink ? menuItem.fullLink : menuItem.url}
                style={{ display: "none" }}
              >
                {menuItem.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
