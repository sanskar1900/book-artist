import { useSelector, useDispatch } from "react-redux";
import RightDrawer from ".";
import { closeLoginDrawer, openLoginDrawer } from "../../redux/uiSlice";
import classes from "./drawer.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

const LoginDrawer = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkLoginButtonDisability = () => {
    return formData.email.length === 0 || formData.password.length === 0;
  };

  const LoginDrawerUI = () => {
    return (
      <div className={classes.loginDrawerRoot}>
        <TextField
          id="outlined-basic"
          label="Enter Email"
          variant="standard"
          value={formData.email}
          type="email"
          name="email"
          onChange={handleInputChange}
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Password"
          variant="standard"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
          }}
        />
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            marginTop: "16px",
            "&.Mui-disabled": {
              backgroundColor: "gray",
              color: "white",
            },
          }}
          variant="contained"
          disabled={checkLoginButtonDisability()}
        >
          Login
        </Button>
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
