import React, { useState } from 'react';
import {
  Button,
  Paper,
  Typography,
  Box,
  Grid,
  InputField,
  makeStyles,
  Divider,
  TextField
} from "../../../common";
import { httpService } from '../../../common/service-utils';
import "./idplogin.css";
import { useNavigate } from 'react-router-dom';

import CopyrightIcon from "@mui/icons-material/Copyright";
import { signUpValidations, userNameValidation } from '../../../common/validations';

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const historyHook = useNavigate();

  const verifyUser = () => {
    const {valid, message} = signUpValidations(userName, password, confirmPassword);
    if(valid){
        let signUpData = {
        username: userName,
        password: password
      }
      httpService('sign-up', 'post', signUpData).then((src) => {
        if (src) {
          if (src.data.body.status === 201) {
            alert("You are signed up successfully, try to login now")
            historyHook("/login")
          } else {
            alert(src.data.body.result)
          }
        }
      })
    }else{
      alert(message)
    }
  }
  return (

    <>
      <Grid container gap={0} sx={{ mt: 5, justifyContent: "center" }}>
        <Grid item md={6} sx={{ display: { xs: "none", md: "block" }, p: 0 }}>
          <img
            alt="lol"
            width="90%"
            height="90%"
            src="/assets/login.png"
          />

        </Grid>

        <Grid item sx={{ display: { xs: "none", md: "block" }, p: 0 }}>
          <Divider orientation="vertical" />
        </Grid >
        <Grid item md={4} sm={12} xs={12} sx={{ mt: 5 }}>
          <Box

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


            <Paper
              elevation={-1}
              sx={{ p: 4, pb: 0, justifyContent: "center" }}>
              <Typography variant="h3" >
              <img src="/assets/weblogo.png" width={200} />
              </Typography>
              <Grid container justifyContent="center" md={12} sm={12} xs={12} sx={{ p: 3, justifyContent: "center" }}>
                <img
                  alt="lol"
                  width="40%"
                  src="/assets/signup.svg"
                />
              </Grid>
              <Grid container direction="column" gap={2} sx={{ justifyContent: "center" }}>
                <Grid item >

                  <TextField
                    size="small"
                    type="text"
                    label="Email / Username"
                    variant="outlined"
                    onChange={(event)=>setUserName(event.target.value)}
                  />
                </Grid>

                <Grid item >
                  <TextField
                    size="small"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(event)=>setPassword(event.target.value)}
                  />
                </Grid>

                <Grid item >
                  <TextField
                    size="small"
                    type="text"
                    label="Confirm Password"
                    variant="outlined"
                    onChange={(event)=>setConfirmPassword(event.target.value)}
                  />
                </Grid>

                <Grid item md={4}>
                  <Button

                    size="small"

                    variant="contained"
                    onClick={verifyUser}

                  >
                    <Typography variant="h7" sx={{ color: "white" }} >
                      Sign-up
                    </Typography>
                  </Button>
                </Grid>


                <Grid item md={12}>
                  <Typography variant="body2"  >
                    Already a member! <Button onClick={()=>historyHook("/login")} sx={{ p: 0 }} >Log In</Button>
                  </Typography>
                </Grid>


                <Grid item md={12} sx={{ mt: 3 }}>
                  <Typography variant="caption" >
                    <CopyrightIcon fontSize="2px" /> 2022 SpameMeTwice. All Rights
                    Reserved.
                  </Typography>
                </Grid>


              </Grid>


            </Paper>
          </Box>
        </Grid>
      </Grid >
    </>
  );
};

export default SignUp;