import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { spamsList } from "../../demo-data";

const FamousSpams = () => {
  return (
    <>
      <Grid container m={1} mb={3}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography mb={5} align="center" variant="h6">
            Famous Spams
          </Typography>
          <Typography color="primary" mb={1} align="center" variant="h6">
            Spams ({spamsList.length})
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
      {spamsList.map((spam, index) => {
        return (
          <Grid container ml={1} mr={1} mt={2} mb={1} display="flex" textAlign={"left"}>
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <Typography mb={1} align="left" variant="subtitle6">
                {`${index + 1}. ${spam.title}`}
              </Typography>
              <Divider sx={{ marginTop: 1, marginRight: 1 }} />
            </Grid>
            <Grid item xs={0} sm={2}></Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default FamousSpams;
