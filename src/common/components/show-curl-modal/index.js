import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const ShowCurlModal = ({ open, closeCurlModal }) => {
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
  const handleEditAdClose = () => {
    closeCurlModal(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => handleEditAdClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center">
            {`curl --location --request POST 'http://localhost:8080/spam/site'
--header 'Content-Type: application/json' \
--data-raw '{
    "baseUrl": "https://local.com"
}'`}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ShowCurlModal;
