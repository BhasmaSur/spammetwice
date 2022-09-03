import React from "react";
import { CircularProgress, Grid } from "../..";
const LoadingScreen = () => {
  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
      mt={50}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default LoadingScreen;
