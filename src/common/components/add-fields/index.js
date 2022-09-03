import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BUTTON_TYPE, DESCRIPTION_TYPE } from "../../utils/constants";
import { makeStyles } from "../.."
const useStyles = makeStyles((theme) => ({
  boxStyle: {
    background: theme.palette.primary.main,
    borderRadius: "30px",
    width: "fit-content",
    padding: "10px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AddFields = ({ itemHandler }) => {
  const classes = useStyles();
  return (
    <Box className={classes.boxStyle}>
      <Button
        color="success"
        sx={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }}
        variant="contained"
        onClick={() => itemHandler(DESCRIPTION_TYPE.TEXT)}
      >
        Add Text
      </Button>
      <Button
        color="success"
        variant="contained"
        onClick={() => itemHandler(DESCRIPTION_TYPE.IMAGE)}
      >
        Add Image
      </Button>
      <Button
        color="success"
        variant="contained"
        onClick={() => itemHandler(DESCRIPTION_TYPE.URL)}
      >
        Add URL
      </Button>
      <Button
        color="success"
        variant="contained"
        onClick={() => itemHandler(DESCRIPTION_TYPE.VIDEO)}
      >
        Add Video
      </Button>
      <Button
        sx={{ borderTopRightRadius: "30px", borderBottomRightRadius: "30px" }}
        color="warning"
        variant="contained"
        onClick={() => itemHandler(BUTTON_TYPE.SAVE)}
      >
        Save Spam
      </Button>
    </Box>
  );
};

export default AddFields;
