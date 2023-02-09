import React, { useRef, useState } from "react";
import { Box, Modal, Grid, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { httpService } from "../../../common/service-utils";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const EditAdModal = ({ open, handleEditAdClose, spam }) => {
  const [fileSelected, setFileSelected] = useState("assets/pikachu.png");
  const [preview, setPreview] = useState(spam.userAd)
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
    if (!event.target.files || event.target.files.length === 0) {
      setFileSelected(undefined)
      return
  }
    setFileSelected(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]))
  };

  const saveNewUserAd = () =>{
    const formData = new FormData();
    if(fileSelected){
      formData.append("myFile", fileSelected, fileSelected.name);
      formData.append("spamId", spam.spamId);
      let payload = {
        spamId : spam.spamId,
        adImage : formData
      }
      console.log(payload);
      httpService("file/upload-ad","post",formData,"spam").then((res)=>{
        if(res.status === 200){
          alert("Ad saved successfully")
          handleEditAdClose(false)
        }
      })
      
    }
  }
  // const handleClose = ()=>{
  //   historyHook("/user-profile")
  // }

  return (
    <>
      <Modal
        open={open}
        onClose={() => handleEditAdClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="right">
            <CancelOutlinedIcon onClick={() => handleEditAdClose(false)}/>
          </Typography>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" mt={matches ? 0 : 0}>
              User Ad
            </Typography>
          </Grid>
          <Grid container mt={matches ? 0 : 10}>
            <Grid item xs={12} sm={4}>
              <Typography align="center">
                <img
                  src={spam.userAd}
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
                  src={preview}
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
              <Button variant="contained" onClick={saveNewUserAd}>
                Save Ad
              </Button>
              <input
                onChange={fileChanged}
                type="file"
                style={{ display: "none" }}
                ref={fileInput}
              />
            </Typography>
            <Typography>
              
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default EditAdModal;
