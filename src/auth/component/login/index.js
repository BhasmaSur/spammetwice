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
import { Divider, InputBase, ListItem, TextField } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const IdpLogin = (props) => {
  const { onSuccess } = props;
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const historyHook = useNavigate();

  const handleSignUp = () => {
    historyHook("/signup")
  }

  const verifyUser = async () => {
    if (!userName) {
      alert("enter user name");
    }
    if (userName && !password) {
      alert("enter password");
    }
    const loginData = {
      username: userName,
      password
    }
    const { status, data } = await httpService('authenticate', 'post', loginData);
    if (data?.status === 200) {
      onSuccess({
        user: data.result,
        isLoggedIn: true
      })
    } else {
      alert("Login failed")
    }
  };
  return (
    <Grid container gap={0} sx={{ mt: 5, justifyContent: "center" }}>
      <Grid item md={6} sx={{ display: { xs: "none", md: "block" }, p: 0, mt: 5 }}>
        <img
          alt="lol"
          width="90%"
          height="90%"
          src="/assets/signup_left.png"
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
                src="/assets/logo.png"
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

              <Grid item md={4}>
                <Button

                  size="small"

                  variant="contained"
                  onClick={verifyUser}

                >
                  <Typography variant="h7" sx={{ color: "white" }} >
                    login
                  </Typography>
                </Button>
              </Grid>
              <Grid item md={12}>
                <Typography variant="body2"  >
                  Not registered yet? <Button sx={{ p: 0 }} onClick={handleSignUp}>Create an account.</Button>
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
  );
};

export default IdpLogin;