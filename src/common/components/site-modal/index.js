import { Box, Divider, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { httpService } from "../../service-utils";

const SiteModal = ({ open, handleClose, siteSelected }) => {
  const matches = useMediaQuery("(max-width:600px)");
  const [spamsList, setSpamsList] = useState([]);
  const historyHook = useNavigate();
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

  const openSpam = (spam) => {
    historyHook("/spam", { state: { spamId: spam.spamId } });
  };

  useEffect(() => {
    let payload = {
      baseUrl: siteSelected?.url,
    };
    httpService("site", "post", payload, "spam").then((src) => {
      console.log(src);
      if (src?.data?.status === 200) {
        setSpamsList(src?.data?.result);
      }
    });
  }, [siteSelected]);
  return (
    <>
      <Modal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container mb={3}>
            <Grid item xs={0} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <Typography mb={5} align="center" variant="h6">
                {siteSelected.url}
              </Typography>
              <Typography color="primary" mb={1} align="left" variant="h6">
                Spams ({spamsList.length})
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={0} sm={2}></Grid>
          </Grid>
          {spamsList.map((spam, index) => {
            return (
              <Grid container mt={2} mb={1} onClick={() => openSpam(spam)}>
                <Grid item xs={0} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                  <Typography mb={1} align="left" variant="subtitle6">
                    {`${index + 1}. ${spam.title}`}
                  </Typography>
                  <Divider sx={{ marginTop: 1 }} />
                </Grid>
                <Grid item xs={0} sm={2}></Grid>
              </Grid>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default SiteModal;
