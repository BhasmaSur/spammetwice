import { Box, Typography } from '@mui/material'
import React from 'react'

const metaData = {
    likes : 20,
    views : 100,
    uniqueViews : 35
}

const boxStyle = {
    display: "flex",
    flexDirection : "row",
    columnGap : 2,
    marginTop : 1
}

const fontSize=12
const SpamMetaData = () => {
  return (
    <Box sx={boxStyle} >
        <Typography fontSize={fontSize} align='left' variant='subtitle1'>
            Likes {metaData.likes}
        </Typography>
        <Typography fontSize={fontSize} align='left' variant='subtitle1'>
            Views {metaData.views}
        </Typography>
        <Typography fontSize={fontSize} align='left' variant='subtitle1'>
            Unique Views {metaData.uniqueViews}
        </Typography>
    </Box>
  )
}

export default SpamMetaData