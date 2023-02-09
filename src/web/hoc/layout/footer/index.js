import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const historyHook = useNavigate();
  return (
    <Grid
      bottom={0}
      container
      rowSpacing={1}
      justifyContent="center"
      direction="column"
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        paddingBottom: 3,
        right: 0,
        backgroundColor: "#9C8BEF",
      }}
    >
      <Container sx={{ padding: 3 }}>
        <Typography xs={12} variant="h5">
          Spam Me Twice!
        </Typography>
      </Container>

      <Grid item sx={{ paddingBottom: 1 }}>
        <Grid container justifyContent="center" columnSpacing={2} rowSpacing={1}>
          <Grid item xs={6} sm={3} md={1} onClick={()=>historyHook("/")}>
            Home
          </Grid>
          <Grid item xs={6} sm={3} md={1} onClick={()=>historyHook("/services")}>
            Our Product & Services
          </Grid>
          <Grid item xs={6} sm={3} md={1} onClick={()=>historyHook("/reported-sites")}>
            Reported Sites
          </Grid>
          <Grid item xs={6} sm={3} md={1} onClick={()=>historyHook("/our-team")}>
            Our Team
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ padding: 3 }}>
        <Grid container justifyContent="center" columnSpacing={1} rowSpacing={1}>
          <Grid item xs={2} sm={1} md={0.5}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
        <Typography variant="body2" fontSize="10px">
          <CopyrightIcon fontSize="1px" /> 2022 SpameMeTwice. All Rights
          Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;