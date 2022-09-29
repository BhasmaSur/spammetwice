import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../auth";
import {
  Grid,
  PrimarySearchAppBar,
  Paper,
  Box,
  Typography,
  Button,
  Stats,
} from "../../../common";
import { BLNavbar } from "../../../common/components/navbar-before-login";
import HomeImage from "../../../common/components/home-image";
import Footer from "../../hoc/layout/footer";
import { FreeLayout } from "../../hoc";
function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getSessionData } = auth();
  const historyHook = useNavigate();
  const { user } = getSessionData();
  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      console.log(user);
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <FreeLayout>
      <div>
        {isLoggedIn && <PrimarySearchAppBar />}
        {!isLoggedIn && <BLNavbar />}
        {/* <Grid container>
        <Grid style={{ display: "flex", justifyContent: "flex-end" }} item sm={5} xs={11}>
          right
        </Grid>
        <Grid flexDirection={"col-reverse"} item sm={6} xs={11}>
          left
        </Grid>
      </Grid> */}
        <Grid container spacing={0} justify="flex-start">
          <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
            <Box mt={15} ml={"10%"} mr={"10%"} justifyContent={"center"}>
              <Typography variant="h2">Let Nobody</Typography>
              <Typography variant="h2" color={"primary"}>
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
              <Button variant="contained">How it will benefit you ?</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 3 }}>
            <HomeImage />
          </Grid>
        </Grid>
        <div>
          <Box mt={10} mb={10}>
            <Typography variant="h5" mb={5}>
              Stats
            </Typography>
            <Stats />
          </Box>
        </div>
      </div>
    </FreeLayout>
  );
}

export default Home;
