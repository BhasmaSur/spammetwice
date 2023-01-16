import React, { useState } from "react";
import { ShowCurlModal } from "../../../common"
import {
  Grid,
  Box,
  Typography,
  Button,
} from "../../../common";
import "./index.css"

function ProductServices() {

    const [openShowCurlModal, setOpenShowCurlModal] = useState(false)
 const showCurl = () =>{
    setOpenShowCurlModal(true)
 }

  return (
    <>
    <div className="prod-box">
    <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
              <Typography mb={5} variant="h2">Our Product</Typography>
              <Typography mb={2} variant="h5" color={"primary"}>
                API to check if the website you going to interact with is ever reported
              </Typography>
              <Typography mb={2} variant="h4">
                https://spammetwice.com/check/{'<website-name>'}
              </Typography>
              <Typography mb={5} variant="subtitle1">
                e.g. https://spammetwice.com/check/spammetwice
              </Typography>
              <Typography mb={10} variant="subtitle1">
                <Button onClick={showCurl} variant="contained">Download the curl</Button>
              </Typography>
          </Grid>
          <Grid item xs={0} sm={4}>
            <div className="img-box">
                <img 
                    src="/assets/product.jpg"
                    aspect-ratio= "16/9"
                    height={"auto"}
                    width={"100%"}
                />
            </div>
            
          </Grid>
        </Grid>
    </div>
    
        <Grid container spacing={0}>
        <Grid item xs={0} sm={4}>
            <div className="img-box">
                <img 
                    src="/assets/service.jpg"
                    aspect-ratio= "16/9"
                    height={"auto"}
                    width={"100%"}
                />
            </div>
            
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box mt={15} justifyContent={"center"}>
              <Typography align="center" mb={5} variant="h2">Our Service</Typography>
              <Typography variant="h5" color={"primary"}>
                You can add your spam and in every spam you can put your own ad, this can help you in monetizing your 
                spam, more views you have, more money you will make.
              </Typography>
              <Typography variant="h5" color={"primary"}>
                You can also search spams, save your hard earned money and time.
              </Typography>
              <Typography mb={10} variant="subtitle1">
                You can contact us to to provide your ADs to most viewed Spams
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {openShowCurlModal && <ShowCurlModal open={openShowCurlModal} closeCurlModal={setOpenShowCurlModal}/>}
    </>
    
  );
}

export default ProductServices;