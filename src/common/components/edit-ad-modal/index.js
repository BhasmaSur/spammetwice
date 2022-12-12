import React, { useRef, useState } from "react";
import { Box, Modal, Grid, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const EditAdModal = () => {
    const historyHook = useNavigate();
  const [fileSelected, setFileSelected] = useState("assets/pikachu.png");
  const fileInput = useRef();
  const matches = useMediaQuery("(max-width:600px)");
  const style = {
    position: "absolute",
    top: matches ? "50%" : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid green",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };

  const selectFile = () => {
    fileInput.current.click();
  };

  const fileChanged = (event) => {
    console.log(event);
    setFileSelected(event.target.files[0]);
  };

  const handleClose = ()=>{
    historyHook(-1)
  }
  return (
    <>
      <Modal
        open={true}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" mt={matches ? 0 : 10}>
              User Ad
            </Typography>
          </Grid>
          <Grid container mt={matches ? 0 : 10}>
            <Grid item xs={12} sm={4}>
              <Typography align="center">
                <img
                  src="/assets/ad1.jpeg"
                  width={matches ? 300 : 400}
                  height={matches ? 300 : 400}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} mt={10}>
              {!matches && (
                <Typography align="center">
                  <img src="/assets/right.png" width={200} height={200} />
                </Typography>
              )}
              {matches && (
                <Typography align="center">
                  <img src="/assets/bottom.png" width={200} height={200} />
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography align="center">
                <img
                  src="/assets/ad1.jpeg"
                  width={matches ? 300 : 400}
                  height={matches ? 300 : 400}
                />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" mt={10}>
              <Button variant="contained" onClick={selectFile}>
                Change Ad image
              </Button>
              <input
                onChange={fileChanged}
                type="file"
                style={{ display: "none" }}
                ref={fileInput}
              />
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default EditAdModal;
