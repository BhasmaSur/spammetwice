import React, { useState} from 'react';
import {
    Button,
    Paper,
    Typography,
    Box,
    Grid,
    InputField,
    makeStyles
  } from "../../../common";
import { httpService } from '../../../common/service-utils';
import "./idplogin.css";
import { useNavigate } from 'react-router-dom';


  const useStyles = makeStyles((theme)=>({
    loginBox:{
      marginTop:"150px",
      [theme.breakpoints.down("sm")]:{
        marginTop:"100px",
      }
    }
  }))
const SignUp = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const historyHook = useNavigate();

    const verifyUser = () =>{
        if( (password === confirmPassword) && userName ){
            //console.log(userName,password,confirmPassword)
            let signUpData = {
                username : userName,
                password : password
            }
            httpService('sign-up','post',signUpData).then((src)=>{
                if(src){
                    if(src.data.body.status === 201){
                        alert("You are signed up successfully, try to login now")
                        historyHook("/login")
                    }else{
                        alert(src.data.body.result)
                    }
                }
            })
        }
    }
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
              height: 600,
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
              <InputField
                type="text"
                text={"Confirm Password :"}
                handleChange={setConfirmPassword}
              />
              <div className="btn-box">
                <Button
                  size="medium"
                  mt={2}
                  variant="contained"
                  onClick={verifyUser}
                >
                  Sign up
                </Button>
              </div>
            </div>
            <div className="signup-box">
              Already a member? <Button >Log In</Button>
              </div>
          </Paper>
        </Box>
      </Grid>
    </Grid>
    );
};

export default SignUp;