import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import classes from "./drawer.module.css";

export default function RightDrawer({ ui, onClose }) {
  return (
    <div>
      <SwipeableDrawer
        classNames={classes.rootDrawer}
        anchor="right"
        open={true}
        onClose={onClose}
      >
        {ui}
      </SwipeableDrawer>
    </div>
  );
}
