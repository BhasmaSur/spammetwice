import { Avatar, Button, Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { theme } from "../../../common";
function Test() {



  return (
    <div>
      <h1>Test</h1>
      <div>

        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          direction="column"
          sx={{
            backgroundColor: "#889900",
          }}
        >
          <Container sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ font: "bold", color: "white" }}>
              Our Amazing Team
            </Typography>
          </Container>

          <Grid item >
            <Grid container justifyContent="center" >
              <Grid item xs={12}>
                <Grid container spacing={3}
                  lg={9} md={12} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }}>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }} >
                    <Paper
                      elevation={10}
                      sx={{
                        height: 460,
                        width: 270,
                        p: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="/assets/wobuffet.png"
                            sx={{
                              m: 3, mt: 1, marginLeft: "auto",
                              marginRight: "auto",
                              height: 200,
                              width: 200,
                              border: "7px solid #889900",
                            }}
                          />
                        </Grid>
                        <Grid item >
                          <Typography variant="h5" sx={{ textTransform: 'uppercase' }} >
                            Mradul Mishra
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="button" display="block" gutterBottom sx={{ color: "#889900", textTransform: 'lowercase' }} >
                            Co-Founder
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}>
                            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }} >
                    <Paper
                      elevation={10}
                      sx={{
                        height: 460,
                        width: 270,
                        p: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="/assets/wobuffet.png"
                            sx={{
                              m: 3, mt: 1, marginLeft: "auto",
                              marginRight: "auto",
                              height: 200,
                              width: 200,
                              border: "7px solid #889900",
                            }}
                          />
                        </Grid>
                        <Grid item >
                          <Typography variant="h5" sx={{ textTransform: 'uppercase' }} >
                            Mradul Mishra
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="button" display="block" gutterBottom sx={{ color: "#889900", textTransform: 'lowercase' }} >
                            Co-Founder
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}>
                            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }} >
                    <Paper
                      elevation={10}
                      sx={{
                        height: 460,
                        width: 270,
                        p: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="/assets/wobuffet.png"
                            sx={{
                              m: 3, mt: 1, marginLeft: "auto",
                              marginRight: "auto",
                              height: 200,
                              width: 200,
                              border: "7px solid #889900",
                            }}
                          />
                        </Grid>
                        <Grid item >
                          <Typography variant="h5" sx={{ textTransform: 'uppercase' }} >
                            Mradul Mishra
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="button" display="block" gutterBottom sx={{ color: "#889900", textTransform: 'lowercase' }} >
                            Co-Founder
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}>
                            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }} >
                    <Paper
                      elevation={10}
                      sx={{
                        height: 460,
                        width: 270,
                        p: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="/assets/wobuffet.png"
                            sx={{
                              m: 3, mt: 1, marginLeft: "auto",
                              marginRight: "auto",
                              height: 200,
                              width: 200,
                              border: "7px solid #889900",
                            }}
                          />
                        </Grid>
                        <Grid item >
                          <Typography variant="h5" sx={{ textTransform: 'uppercase' }} >
                            Mradul Mishra
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="button" display="block" gutterBottom sx={{ color: "#889900", textTransform: 'lowercase' }} >
                            Co-Founder
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}>
                            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }} >
                    <Paper
                      elevation={10}
                      sx={{
                        height: 460,
                        width: 270,
                        p: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="/assets/wobuffet.png"
                            sx={{
                              m: 3, mt: 1, marginLeft: "auto",
                              marginRight: "auto",
                              height: 200,
                              width: 200,
                              border: "7px solid #889900",
                            }}
                          />
                        </Grid>
                        <Grid item >
                          <Typography variant="h5" sx={{ textTransform: 'uppercase' }} >
                            Mradul Mishra
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="button" display="block" gutterBottom sx={{ color: "#889900", textTransform: 'lowercase' }} >
                            Co-Founder
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}>
                            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{
                    p: 0, marginLeft: "auto",
                    marginRight: "auto",
                  }} >
                    <Paper
                      elevation={10}
                      sx={{
                        height: 460,
                        width: 270,
                        p: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "20px",
                      }}
                    >
                      <Grid container direction={"column"} spacing={1}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="/assets/wobuffet.png"
                            sx={{
                              m: 3, mt: 1, marginLeft: "auto",
                              marginRight: "auto",
                              height: 200,
                              width: 200,
                              border: "7px solid #889900",
                            }}
                          />
                        </Grid>
                        <Grid item >
                          <Typography variant="h5" sx={{ textTransform: 'uppercase' }} >
                            Mradul Mishra
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="button" display="block" gutterBottom sx={{ color: "#889900", textTransform: 'lowercase' }} >
                            Co-Founder
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant="subtitle2" gutterBottom sx={{ mt: 0, ml: 3, mr: 3, color: "#808080" }}>
                            Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum
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
      </div>
    </div >
  );
}

export default Test;