import CheckMark from "../CheckMark";
import classes from "./artistAndUser.module.css";
const ArtistAndUser = ({ data }) => {
  return (
    <>
      <div className={classes.outerMostContainer}>
        <div className={classes.leftCard}>
          <h2 className={classes.forArtistHeading}>{"For Artists"}</h2>
          <p className={`${classes.text} ${classes.greyTxt}`}>
            {"Showcase your talent and get paid handsomely for your skills."}
          </p>

          <div className={classes.tickAndText}>
            <CheckMark borderColor={"orange"} />
            <p className={`${classes.text}`}>
              {" "}
              {"Join a network of over 1000+ artists."}
            </p>
          </div>

          <div className={classes.tickAndText}>
            <CheckMark borderColor={"orange"} />
            <p className={classes.text}>
              {"Get high quality clients and work."}
            </p>
          </div>

          <div className={classes.tickAndText}>
            <CheckMark borderColor={"orange"} />
            <p className={classes.text}>{"Free AI Generated Profile."}</p>
          </div>

          <button className={classes.signUpBtnArtist}>
            {"Sign up as Artist"}
          </button>
        </div>

        <div className={classes.rightCard}>
          <h2 className={classes.forUserHeading}> {"For Users"}</h2>
          <p className={`${classes.text} ${classes.greyTxt}`}>
            {"Hire local and skilled artists at best prices!"}
          </p>
          <div className={classes.tickAndText}>
            <CheckMark borderColor={"#abf5b2"} />
            <p className={classes.text}>
              {"Join a network of over 1000+ artists."}
            </p>
          </div>
          <div className={classes.tickAndText}>
            <CheckMark borderColor={"#abf5b2"} />
            <p className={classes.text}>
              {"Engage with highly skilled entertainers."}
            </p>
          </div>
          <div className={classes.tickAndText}>
            <CheckMark borderColor={"#abf5b2"} />
            <p className={classes.text}>{"Sign up for free!"}</p>
          </div>
          <button className={classes.signUpBtnUser}>{"Sign up as User"}</button>
        </div>
      </div>
    </>
  );
};

export default ArtistAndUser;
