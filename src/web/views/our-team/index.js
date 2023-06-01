import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
function OurTeam() {
  return (
    <Grid container rowSpacing={1} justifyContent="center" direction="column">
      <Container sx={{ padding: 3 }}>
        <Typography
          variant="h4"
          sx={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}
        >
          Our Amazing Team
        </Typography>
      </Container>
      <Grid item>
        <Grid container justifyContent="center" mb={10}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={3}
              lg={9}
              md={12}
              sm={12}
              xs={12}
              sx={{
                p: 0,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{
                  p: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    height: 460,
                    width: "90%",
                    borderRadius: "20px",
                  }}
                >
                  <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                      <Avatar
                        alt="Mradul Mishra"
                        src="/assets/me_passport.png"
                        sx={{
                          m: 3,
                          mt: 1,
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: 200,
                          width: 200,
                          border: "1px solid #BDCDD6",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase" }}
                      >
                        Mradul Mishra
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        sx={{ color: "#889900", textTransform: "lowercase" }}
                      >
                        Co-Founder
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}
                      >
                        Full Stack Developer
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{
                  p: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    height: 460,
                    width: "90%",
                    borderRadius: "20px",
                  }}
                >
                  <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                      <Avatar
                        alt="Suraj Gawas"
                        src="/assets/babban.jpeg"
                        sx={{
                          m: 3,
                          mt: 1,
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: 200,
                          width: 200,
                          border: "1px solid #BDCDD6",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase" }}
                      >
                        Suraj Gawas
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        sx={{ color: "#889900", textTransform: "lowercase" }}
                      >
                        Co-Founder
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}
                      >
                        Full Stack Developer
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{
                  p: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    height: 460,
                    width: "90%",
                    borderRadius: "20px",
                  }}
                >
                  <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                      <Avatar
                        alt="Sarika Dengle"
                        src="/assets/sarika.jpeg"
                        sx={{
                          m: 3,
                          mt: 1,
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: 200,
                          width: 200,
                          border: "1px solid #BDCDD6",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase" }}
                      >
                        Sarika Dengle
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        sx={{ color: "#889900", textTransform: "lowercase" }}
                      >
                        Co-founder
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}
                      >
                        Manual QA
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{
                  p: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    height: 460,
                    width: "90%",
                    borderRadius: "20px",
                  }}
                >
                  <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                      <Avatar
                        alt="Mradul Mishra"
                        src="/assets/swapnil.jpeg"
                        sx={{
                          m: 3,
                          mt: 1,
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: 200,
                          width: 200,
                          border: "1px solid #BDCDD6",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase" }}
                      >
                        Swapnil Waghchaure
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        sx={{ color: "#889900", textTransform: "lowercase" }}
                      >
                        Engineer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}
                      >
                        Java Developer
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OurTeam;
