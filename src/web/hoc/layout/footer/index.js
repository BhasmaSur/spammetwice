import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const historyHook = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const headingText = matches ? "30px" : "40px"
  return (
    <Grid
      bottom={0}
      container
      rowSpacing={0}
      justifyContent="center"
      direction="column"
      sx={{
        paddingTop: 10,
        position: "relative",
        left: 0,
        bottom: 0,
        paddingBottom: 3,
        right: 0,
        backgroundColor: "#9C8BEF",
      }}
    >
      <Container sx={{ padding: 0 }}>
        <Typography xs={12} mb={5} variant="h2" fontSize={headingText} sx={{ fontWeight: 'bold' }}>
          Spam Me Twice!
        </Typography>
      </Container>

      <Grid item sx={{ paddingBottom: 1 }}>
        <Grid container justifyContent="center" columnSpacing={0} rowSpacing={0}>
          <Grid sx={{ fontSize:20 }} mb={0.5} item xs={12} sm={3} md={1} onClick={()=>historyHook("/")}>
            Home
          </Grid>
          <Grid sx={{ fontSize:20 }} mb={0.5} item xs={12} sm={3} md={1} onClick={()=>historyHook("/services")}>
            Our Product & Services
          </Grid>
          <Grid sx={{ fontSize:20 }} mb={0.5} item xs={12} sm={3} md={1} onClick={()=>historyHook("/reported-sites")}>
            Reported Sites
          </Grid>
          <Grid sx={{ fontSize:20 }} item xs={12} sm={3} md={1} onClick={()=>historyHook("/our-team")}>
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