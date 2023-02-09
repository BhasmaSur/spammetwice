import React, { useEffect } from "react";
import { Box, Typography, uuidv4, Link, FirstAd,Grid, Paper } from "../..";
import { SecondAd } from "../ads";
import { DESCRIPTION_TYPE } from "../../utils/constants";
import SpamMetaData from "../spam-metadata";
import { useNavigate } from "react-router-dom";
import { padding } from "@mui/system";

const boxStyle = "1px grey #890";
export default function SpamTemplate({checkForView = false, refreshPage,displayLike,isEditable, spamData,similarSpams, metaData}) {
  // const { title, descriptionEntityList, resolution, similarSpams } = props;
  const historyHook = useNavigate();
  const editSpam = () => {
    historyHook("/edit-spam",{state:{spamToEdit: spamData}})
  }
  const getTextContent = (content) => {
    return (
      <Typography
        key={uuidv4()}
        mt={2}
        style={{
          wordWrap: "break-word",
          textAlign: "left",
        }}
        variant="subtitle1"
      >
        {content}
      </Typography>
    );
  };

  const getUrlContent = (content) => {
    return (
      <Typography
        key={uuidv4()}
        mt={2}
        style={{
          wordWrap: "break-word",
          textAlign: "left",
        }}
        variant="subtitle1"
      >
        {content}
      </Typography>
    );
  };

  const getImageContent = (url) => {
    return (
      <Box mt={2}>
        <img src={url} width="80%" height="300px" />
      </Box>
    );
  };
  const getTheDescription = (desc) => {
    switch(desc.descType){
      case DESCRIPTION_TYPE.TEXT : 
        return getTextContent(desc.descContent);
      case DESCRIPTION_TYPE.IMAGE : 
        return getImageContent(desc.descContent);
      case DESCRIPTION_TYPE.VIDEO :
        return getImageContent(desc.descContent);
      case DESCRIPTION_TYPE.URL :
        return getUrlContent(desc.descContent);
    }
  };

  // console.log(props)
  return (
    <Grid container mt={2} mb={2}>
      <Grid item sm={1.4} xs={0}></Grid>
      <Grid item sm={6} xs={12} sx={{border: boxStyle, padding: "10px"}}>
        <Paper elevation={3} sx={{padding: 2}}>
        <Box sx={{ width: "100%"}}>
          <Typography mt={2} align="left" variant="h1">{spamData.title}</Typography>
          <SpamMetaData checkForView={checkForView} refreshPage={refreshPage} displayLike={displayLike} editSpam={spamData} isEditable={isEditable} metaData={metaData}/>
          {spamData.descriptionEntityList.map((desc) => getTheDescription(desc))}
          {/* <Box mt={3}>
            <Typography align="left" variant="h1">
              Resolution : lol
            </Typography>
          </Box> */}
        </Box>
        </Paper>
        
      </Grid>
      <Grid item sm={0.2} xs={12}></Grid>
      <Grid item sm={3} xs={12} sx={{border: boxStyle, padding : "10px"}}>
        <Typography align="left" variant="h1">
          
        </Typography>
        {similarSpams.map((sS) => {
          return (
            <Typography align="left" variant="subtitle1">
             <Link key={uuidv4()} href={sS.url}>
              {sS.title}
            </Link>
          </Typography>
           
          );
        })}
        <Paper elevation={3} sx={{padding: 2}}>
        <Box sx={{ width: "100%" }}
        mt={3}
        >
          <FirstAd/>
        </Box>
        <Box sx={{ width: "100%" }}
        mt={3}
        >
          <SecondAd adUrl={spamData.userAd}/>
        </Box>
        </Paper>
      </Grid>
      <Grid item sm={1.4} xs={0}></Grid>
    </Grid>
  );
}
