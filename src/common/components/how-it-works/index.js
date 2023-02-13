import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { howItWorks } from '../../../web/demo-data'

const HowItWorks = () => {
  return (
    <Grid container spacing={0} mt={20} mb={20} justify="flex-start">
      <Grid item sm={1.5} xs={0}></Grid>
          <Grid item xs={12} sm={5}>
            <Box justifyContent={"center"}>
              <Typography align='left' variant="h3" mb={5} >How It Works</Typography>
              {howItWorks.map((work, index)=>{
                return(
                  <Typography align='left' variant="subtitle1">
                    {(index+1) + ". " + work}
              </Typography>
                )
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} p={2} border={"1px solid #9C8BEF"}>
            <img src='/assets/spamex.png'
            width={"100%"}
            height={"auto"}
            />

          </Grid>
          <Grid item sm={1.5} xs={0}></Grid>
        </Grid>
  )
}

export default HowItWorks