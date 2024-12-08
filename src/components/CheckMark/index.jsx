import classes from "./checkMark.module.css";
const CheckMark = ({ borderColor }) => {
  return (
    <div
      className={classes.circle}
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div className={classes.tick}></div>
    </div>
  );
};

export default CheckMark;
