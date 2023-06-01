import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { httpService } from "../../../common/service-utils";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import RecommendTwoToneIcon from "@mui/icons-material/RecommendTwoTone";
// const metaData = {
//     likes : 20,
//     views : 100,
//     uniqueViews : 35
// }

const boxStyle = {
  display: "flex",
  flexDirection: "row",
  columnGap: 2,
  marginTop: 1,
};

const fontSize = 12;
const SpamMetaData = ({
  checkForView,
  refreshPage,
  displayLike,
  editSpam,
  metaData,
  isEditable,
}) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const checkIfUserLikedAlready = () => {
    httpService("likes/check/" + editSpam.spamId, "get", null, "spam").then(
      (src) => {
        if (src) {
          setAlreadyLiked(src.data.result);
        }
      }
    );
  };

  const likeSpam = () => {
    httpService("likes/add/" + editSpam.spamId, "get", null, "spam").then(
      (src) => {
        if (src) {
          refreshPage();
        }
      }
    );
  };

  const dislikeSpam = () => {
    httpService("likes/minus/" + editSpam.spamId, "get", null, "spam").then(
      (src) => {
        if (src) {
          refreshPage();
        }
      }
    );
  };

  const updateViewCount = () => {
    httpService("views/saveView/" + editSpam.spamId, "get", null, "spam").then(
      (src) => {
        if (src) {
          if (src.data.status === 200) {
            refreshPage();
          }
        }
      }
    );
  };

  useEffect(() => {
    checkIfUserLikedAlready();
    if (checkForView && !isEditable) {
      updateViewCount();
    }
  }, [editSpam, isEditable]);
  return (
    <Box sx={boxStyle}>
      <Typography fontSize={fontSize} align="left" variant="subtitle1">
        Likes {metaData?.likes}
      </Typography>
      <Typography fontSize={fontSize} align="left" variant="subtitle1">
        Views {metaData?.views}
      </Typography>
      {displayLike && (
        <Typography align="left" variant="subtitle2">
          {!alreadyLiked && (
            <RecommendTwoToneIcon onClick={likeSpam} fontSize={"medium"} />
          )}
          {alreadyLiked && (
            <RecommendTwoToneIcon
              onClick={dislikeSpam}
              color={"primary"}
              fontSize={"medium"}
            />
          )}
        </Typography>
      )}
      {/* {isEditable && <Typography onClick={editSpam} fontSize={fontSize} align='left' variant='subtitle1'>
            Edit
        </Typography>} */}
    </Box>
  );
};

export default SpamMetaData;
