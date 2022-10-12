import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Paper,
  Typography,
  Box,
  Grid,
  InputField,
  makeStyles
} from "../../../common";
import "./idplogin.css";
import { httpService } from "../../../common/service-utils";

const useStyles = makeStyles((theme)=>({
  loginBox:{
    marginTop:"150px",
    [theme.breakpoints.down("sm")]:{
      marginTop:"100px",
    }
  }
}))

const IdpLogin = (props) => {
  const classes = useStyles();
  const { onSuccess } = props;
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const historyHook = useNavigate();

  const handleSignUp = () =>{
    historyHook("/signup")
  }

  const verifyUser = async() => {
    if (!userName) {
      alert("enter user name");
    }
    if (userName && !password) {
      alert("enter password");
    }
    const loginData = {
      username : userName,
      password
    }
    const { status, data} = await httpService('authenticate','post',loginData);
    if(status === 200){
      onSuccess({
        user: data.result,
        isLoggedIn: true
      })
    }else{
      alert("Login failed")
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          className={classes.loginBox}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 500,
              height: 500,
            },
          }}
        >
          <Paper elevation={3}>
            <Typography variant="h4" mt={3}>
              Spam Me Twice
            </Typography>
            <div className="logo-box">logo</div>
            <div className="user-box">
              <InputField
                type="text"
                text={"User Name :"}
                handleChange={setUserName}
              />
              <InputField
                type="password"
                text={"Password :"}
                handleChange={setPassword}
              />
              <div className="btn-box">
                <Button
                  size="medium"
                  mt={2}
                  variant="contained"
                  onClick={verifyUser}
                >
                  Log In
                </Button>
              </div>
            </div>
            <div className="signup-box">
              Not a member? <Button onClick={handleSignUp}>Sign Up</Button>
              </div>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IdpLogin;
