import React from "react";
import { Box, Typography, uuidv4, Link, FirstAd,Grid } from "../..";
import { SecondAd } from "../ads";
import { DESCRIPTION_TYPE } from "../../utils/constants";

export default function SpamTemplate({ spamData,similarSpams }) {
  // const { title, descriptionEntityList, resolution, similarSpams } = props;
console.log("spamData : ", spamData)
console.log("similarSpams : ", similarSpams)
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

  const getImageContent = (url) => {
    return (
      <Box mt={2}>
        <img src={url} width="100%" height="300px" />
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
    }
  };
  // console.log(props)
  return (
    <Grid container>
      <Grid item sm={2} xs={0}></Grid>
      <Grid m={2} item sm={5} xs={11}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h1">{spamData.title}</Typography>
          {spamData.descriptionEntityList.map((desc) => getTheDescription(desc))}
          {/* <Box mt={3}>
            <Typography align="left" variant="h1">
              Resolution : lol
            </Typography>
          </Box> */}
        </Box>
      </Grid>
      <Grid m={2} item sm={3} xs={11}>
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
        <Box sx={{ width: "100%" }}
        mt={3}
        >
          <FirstAd/>
        </Box>
        <Box sx={{ width: "100%" }}
        mt={3}
        >
          <SecondAd/>
        </Box>
      </Grid>
      <Grid item sm={2} xs={0}></Grid>
    </Grid>
  );
}
