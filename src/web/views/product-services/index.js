import React, { useState } from "react";
import { Divider, ShowCurlModal } from "../../../common";
import { Grid, Box, Typography, Button } from "../../../common";
import "./index.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ourServicesList } from "../../demo-data";
import { List, ListItem, ListItemText } from "@mui/material";
function ProductServices() {
  const matches = useMediaQuery("(max-width:600px)");
  const headingfontSize = matches ? "30px" : "40px";
  const textfontSize = matches ? "20px" : "25px";
  const listFontSize = matches ? "15px" : "20px";
  const [openShowCurlModal, setOpenShowCurlModal] = useState(false);
  const showCurl = () => {
    setOpenShowCurlModal(true);
  };

  return (
    <>
      <div className="prod-box">
        <Grid container spacing={0} sx={{ marginTop: matches ? 0 : 5 }}>
          <Grid item xs={0} sm={1} order={{ xs: 1, sm: 1 }}></Grid>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
            <Typography
              mt={matches ? 1 : 0}
              mb={matches ? 2 : 5}
              variant="h2"
              fontSize={headingfontSize}
              sx={{ fontWeight: 'bold' }}
            >
              Our Product
            </Typography>
            <Typography
              mb={2}
              variant="h5"
              fontSize={textfontSize}
              color={"primary"}
              sx={{ fontWeight: 'bold' }}
            >
              API to check if the website you going to interact with is ever
              reported
            </Typography>
            <Typography mb={2} variant={matches ? "subtitle1" : "h5"} sx={{ fontWeight: 'bold' }}>
              https://spammetwice.com/spam/site
            </Typography>
            <Typography variant="subtitle1">
              e.g. https://spammetwice.com/spam/site
            </Typography>
            <Typography mb={5} variant="subtitle1">
              method : Post,
              payload : {'baseUrl : <websiteName>'}
            </Typography>
            <Button
              sx={{ width: "300px", marginBottom: matches ? 5 :10 }}
              onClick={showCurl}
              variant="contained"
            >
              <Typography sx={{ fontWeight: 1000 }} variant="h6">
                Download the curl
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={0} sm={1} order={{ xs: 2, sm: 3 }}></Grid>
          <Grid item xs={0} sm={3} order={{ xs: 1, sm: 4 }} mt={matches ? 0 : 12}>
            <Typography align="left">
              <img
                src="/assets/product.jpg"
                aspect-ratio="16/9"
                height={"auto"}
                width={"100%"}
              />
            </Typography>
          </Grid>
          <Grid item xs={0} sm={1} order={{ xs: 2, sm: 5 }}></Grid>
        </Grid>
      </div>
      <Divider
        textAlign="center"
        sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
      />
      <Grid container spacing={0} sx={{ marginTop: 5 }}>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={0} sm={3} mt={matches ? 0 : 12}>
          <Typography align="left">
            <img
              src="/assets/service.jpg"
              aspect-ratio="16/9"
              height={"auto"}
              width={"100%"}
            />
          </Typography>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={0} mb={matches ? 5 : 10} justifyContent={"center"}>
            <Typography
              align="center"
              mt={matches ? 1 : 0}
              mb={matches ? 2 : 5}
              variant="h2"
              fontSize={headingfontSize}
              sx={{ fontWeight: 'bold' }}
            >
              Our Services
            </Typography>
            <List>
              {ourServicesList.map((service, index) => {
                return (
                  <ListItem>
                    <Typography
                      variant="h5"
                      fontSize={listFontSize}
                    >
                      {index + 1 + ". " + service}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
      {openShowCurlModal && (
        <ShowCurlModal
          open={openShowCurlModal}
          closeCurlModal={setOpenShowCurlModal}
        />
      )}
    </>
  );
}

export default ProductServices;
