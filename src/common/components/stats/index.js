import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
  PhishingRoundedIcon,
  LinkIcon,
  GroupIcon,
  useQuery
} from "../..";
import { httpService } from "../../service-utils";


const Stats = () => {
  const fetchStats = async () => {
    const res = await httpService("stats", "get", null, "user");
    return res.data;
  };
  const { data } = useQuery("stats", fetchStats);

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={10} sm={3}>
        <Paper
          sx={{
            backgroundColor: "#BAAEF7",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h6">Spam Count</Typography>
          <Box>
            <IconButton size="large" color="inherit" aria-label="open drawer">
              <PhishingRoundedIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">{data?.result?.spamCount}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Paper
          sx={{
            backgroundColor: "#BAAEF7",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h6">URLs Count</Typography>

          <Box>
            <IconButton size="large" color="inherit" aria-label="open drawer">
              <LinkIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">{data?.result?.urlsCount}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Paper
          sx={{
            backgroundColor: "#BAAEF7",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h6">Users Count</Typography>
          <Box>
            <IconButton size="large" color="inherit" aria-label="open drawer">
              <GroupIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">{data?.result?.usersCount}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Stats;
