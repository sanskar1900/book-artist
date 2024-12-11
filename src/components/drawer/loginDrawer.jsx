import { useSelector, useDispatch } from "react-redux";
import RightDrawer from ".";
import { closeLoginDrawer, openLoginDrawer } from "../../redux/uiSlice";
import classes from "./drawer.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const LoginDrawer = () => {
  const location = useLocation();
  const showLoginDrawer = useSelector((state) => state.login.showLoginDrawer);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeLoginDrawer());
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      dispatch(openLoginDrawer());
    }
  }, [location]);

  const LoginDrawerUI = () => {
    return (
      <div className={classes.loginDrawerRoot}>
        <h2>Login form will come here</h2>
      </div>
    );
  };

  return (
    <>
      {showLoginDrawer ? (
        <RightDrawer ui={LoginDrawerUI()} onClose={onClose}></RightDrawer>
      ) : null}
    </>
  );
};
export default LoginDrawer;
