import { Box, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { httpService } from "../../../common/service-utils";

// const metaData = {
//     likes : 20,
//     views : 100,
//     uniqueViews : 35
// }

const boxStyle = {
    display: "flex",
    flexDirection : "row",
    columnGap : 2,
    marginTop : 1
}

const fontSize=12
const SpamMetaData = ({metaData}) => {

  return (
    <Box sx={boxStyle} >
        <Typography fontSize={fontSize} align='left' variant='subtitle1'>
            Likes {metaData?.likes}
        </Typography>
        <Typography fontSize={fontSize} align='left' variant='subtitle1'>
            Views {metaData?.views}
        </Typography>
    </Box>
  )
}

export default SpamMetaData