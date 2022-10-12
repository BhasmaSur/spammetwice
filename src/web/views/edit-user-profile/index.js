import {
  Box,
  Divider,
  Modal,
  Typography,
  Grid,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { httpService } from "../../../common/service-utils";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid green",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const EditUserProfile = ({ open, handleClose, profileDetails }) => {
  // console.log(profileDetails)
  const [fileSelected, setFileSelected] = useState();
  const [username, setUsername] = useState(profileDetails?.username);
  const [bio, setBio] = useState(profileDetails?.bio);
  const [about, setAbout] = useState(profileDetails?.about);
  const [profession, setProfession] = useState(profileDetails?.work);
  const [education, setEducation] = useState(profileDetails?.education);
  const [location, setLocation] = useState(profileDetails?.location);
  const fileInput = useRef();
  const selectFile = () => {
    fileInput.current.click();
  };

  const fileChanged = (event) => {
    console.log(event);
    setFileSelected(event.target.files[0]);
  };

  const saveProfile = () => {
    const formData = new FormData();
    if (fileSelected) {
      formData.append("myFile", fileSelected, fileSelected.name);
      httpService("file/profile-pic", "post", formData, "spam").then((res) => {
        if (res) {
            let payload = {
                username : username || profileDetails.username || "",
                about : about || profileDetails.about || "",
                bio : bio || profileDetails.bio || "",
                work : profession || profileDetails.work || "",
                education : education || profileDetails.education || "",
                location : location || profileDetails.location || "",
                imageUrl : res.data.result
              };
              httpService("save-profile", "post", payload, "profile").then((pro)=>{
                if(pro.data.status === 200){
                    handleClose(false)
                    alert(pro.data.result)
                }
              })
        }
        
      });


    } else {
        let payload = {
            username : username || profileDetails.username,
            about : about || profileDetails.about,
            bio : bio || profileDetails.bio,
            work : profession || profileDetails.work,
            education : education || profileDetails.education,
            location : location || profileDetails.location,
            imageUrl : profileDetails.imageUrl
          };
          httpService("save-profile", "post", payload, "profile").then((pro)=>{
            if(pro.data.status === 200){
                handleClose(false)
                alert(pro.data.result)
            }
          })
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" variant="h6" marginBottom={5}>
            Edit Profile
          </Typography>
          <Divider />
          <Grid mt={2} mb={8} container>
            <Grid
              m={2}
              mb={5}
              item
              sm={5}
              xs={11}
              sx={{ justifyContent: "center" }}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Avatar
                  alt={profileDetails?.username}
                  src={profileDetails?.imageUrl}
                  sx={{ width: 120, height: 120 }}
                />
              </Box>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <input
                  onChange={fileChanged}
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInput}
                />
                <Button
                  onClick={selectFile}
                  sx={{ marginTop: 5, width: "fit-content" }}
                  variant="outlined"
                >
                  Change Image
                </Button>
                {fileSelected && (
                  <Typography>file selected : {fileSelected.name}</Typography>
                )}
              </Box>
            </Grid>
            <Grid item sm={6} xs={11}>
              <TextField
                id="fullName"
                label="Full Name"
                defaultValue={profileDetails?.username}
                variant="outlined"
                size="small"
                required="true"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                sx={{ width: "100%", fontSize: "2px" }}
              />
              <TextField
                id="fullName"
                label="About"
                defaultValue={profileDetails?.bio}
                variant="outlined"
                size="small"
                required="true"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                sx={{ marginTop: "30px", width: "100%", fontSize: "2px" }}
              />
              <TextField
                id="fullName"
                label="Quote"
                multiline
                rows={2}
                defaultValue={profileDetails?.about}
                variant="outlined"
                size="small"
                required="true"
                value={about}
                onChange={(event) => setAbout(event.target.value)}
                sx={{ marginTop: "30px", width: "100%", fontSize: "2px" }}
              />
              <TextField
                id="fullName"
                label="Profession"
                defaultValue={profileDetails?.work}
                variant="outlined"
                size="small"
                required="true"
                value={profession}
                onChange={(event) => setProfession(event.target.value)}
                sx={{ marginTop: "30px", width: "100%", fontSize: "2px" }}
              />
              <TextField
                id="fullName"
                label="Education"
                defaultValue={profileDetails?.education}
                variant="outlined"
                size="small"
                required="true"
                value={education}
                onChange={(event) => setEducation(event.target.value)}
                sx={{ marginTop: "30px", width: "100%", fontSize: "2px" }}
              />
              <TextField
                id="fullName"
                label="Location"
                defaultValue={profileDetails?.location}
                variant="outlined"
                size="small"
                required="true"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                sx={{ marginTop: "30px", width: "100%", fontSize: "2px" }}
              />

              <Button
                onClick={saveProfile}
                sx={{ marginTop: "30px" }}
                variant="contained"
              >
                Save profile
              </Button>
            </Grid>
          </Grid>
          <Divider />
        </Box>
      </Modal>
    </>
  );
};

export default EditUserProfile;
