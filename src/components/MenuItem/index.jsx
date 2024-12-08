import React, { useEffect, useState } from "react";
import classes from "./menuItem.module.css";
import { determineColor } from "../../utils/determine";

const MenuItem = ({ link, name, onClick, fullLink, activeSection }) => {
  const [theColor, setTheColor] = useState("white");

  useEffect(() => {
    setTheColor(determineColor(activeSection));
  }, [activeSection]);

  // Use the activeNavStyle function to get the styles

  return (
    <div
      className={classes.menuItemRoot}
      onClick={onClick}
      style={{
        color: theColor,
      }}
    >
      {name}

      <a href={fullLink} style={{ display: "none" }}>
        {name}
      </a>
    </div>
  );
};

export default MenuItem;
