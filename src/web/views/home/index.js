import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Stats,
} from "../../../common";
import HomeImage from "../../../common/components/home-image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../../../common/components/how-it-works";

function Home() {
  const historyHook = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const headingText = matches ? "30px" : "40px"
  const websiteNameText = matches ? "35px" : "50px"
  const redirectToProductAndServices = () =>{
    historyHook("/services");
  }
  return (
      <div>
        <Grid container spacing={0} justify="flex-start">
          <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
            <Box mt={matches ? 0 : 15} ml={"10%"} mr={"10%"} justifyContent={"center"}>
              <Typography variant="h2" fontSize={headingText}>Let Nobody</Typography>
              <Typography variant="h2" fontSize={websiteNameText} color={"primary"}>
                Spam You Twice!!
              </Typography>
              <Typography variant="subtitle1">
                We are in a constant fight with all kinds of spamers. Be it
                email spams, calling spams, spam websites etc, our team is
                working hard to track them down and making this information
                public to the world.
              </Typography>
              <Typography variant="subtitle1">
                So join us in our efforts, it will have multiple benefits, to
                know more about the benefits, click
              </Typography>
              <Button onClick={redirectToProductAndServices} variant="contained">How it will benefit you ?</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 3 }}>
            <HomeImage />
          </Grid>
        </Grid>
        <div>
          <Box mt={10} mb={10}>
            <Typography variant="h3" mb={10}>
              How We Growing..
            </Typography>
            <Stats />
          </Box>
        </div>
        <HowItWorks/>
      </div>
  );
}

export default Home;
