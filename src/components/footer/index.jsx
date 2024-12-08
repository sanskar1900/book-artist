import React from "react";
import classes from "./footer.module.css";
const Footer = ({ data }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div>
          <div>
            <div className={classes.footerTopRightHeading}>
              <h2>{data.footer?.footerTopRightHeading1}</h2>
              <h2>{data.footer?.footerTopRightHeading2}</h2>
            </div>
          </div>
        </div>
        <div className={classes.footerBottomMobile}>
          <h3 className={classes.footerBottomSubheading}>
            {data.footer?.footerBottomSubheading}
          </h3>
          <p className={classes.footerBottomText1}>
            {data.footer?.footerBottomText1}
          </p>
          <p className={classes.footerBottomText2}>
            {data.footer?.footerBottomText2}
          </p>
        </div>
      </div>

      <div className={classes.footerBottomDesktop}>
        <h3 className={classes.footerBottomSubheading}>
          {data.footer?.footerBottomSubheading}
        </h3>
        <p className={classes.footerBottomText1}>
          {data.footer?.footerBottomText1}
        </p>
        <p className={classes.footerBottomText2}>
          {data.footer?.footerBottomText2}
        </p>
      </div>
    </div>
  );
};

export default Footer;
