import React, { useState } from "react";
import {
  Box,
  Typography,
  uuidv4,
  FirstAd,
  Grid,
  Avatar,
  Stack,
  Divider,
  PROFILE_TABS,
  Link,
  profile_data,
  Chip,
  LocationOnIcon,
  SchoolIcon,
  WorkIcon,
  IconButton,
  useQuery,
} from "../../../common";
import { auth } from "../../../auth";
import { httpService } from "../../../common/service-utils";
import EditUserProfile from "../edit-user-profile";

const UserProfile = () => {
  const { getSessionData } = auth();
  const { user } = getSessionData();
  const [editProfile, setEditProfile] = useState(false);
  const { spams, tags, activity, userHighligts } = profile_data;
  const [userProfileData, setUserProfileData] = useState();
  
  const fetchUserProfile = async ()=>{
    const res = await httpService('get-profile','get',null,"profile")
    return res.data
  }
  const {data} = useQuery("profileData", fetchUserProfile);
  if(data?.status !== 200){
    //show error message
  }
  console.log("profile", data)
  const [tabSelected, setTabSelected] = useState("spams");
  const getTabDataSelected = () => {
    if (tabSelected === PROFILE_TABS.SPAMS) {
      return ShowRecentSpams();
    } else if (tabSelected === PROFILE_TABS.TAGS) {
      return ShowTagsCreated();
    } else if (tabSelected === PROFILE_TABS.ACTIVITY)
      return ShowRecentActivity();
  };

  const ShowRecentSpams = () => {
    return (
      <>
        <Typography align="left" mb={2} variant="subtitle2">
          Recent Spams
        </Typography>
        <Divider />
        {spams.map((spam) => {
          return (
            <>
              <Typography
                style={{ fontWeight: 600 }}
                align="left"
                mt={2}
                mb={1}
                variant="subtitle2"
                component="div"
              >
                {spam.title}
              </Typography>
              <Stack direction="row">
                <Typography
                  align="left"
                  mb={2}
                  variant="subtitle2"
                  component="div"
                >
                  {spam.upvotes} Votes
                </Typography>
                <Typography
                  align="left"
                  ml={2}
                  mb={2}
                  variant="subtitle2"
                  component="div"
                >
                  {spam.comments} Comments
                </Typography>
                <Typography
                  align="left"
                  ml={2}
                  mb={2}
                  variant="subtitle2"
                  component="div"
                >
                  {spam.createdOn}
                </Typography>
              </Stack>
              <Divider />
            </>
          );
        })}
      </>
    );
  };

  const ShowCredentials = () => {
    return (
      <Box>
        <Stack direction="row">
          <IconButton mt={2}>
            <WorkIcon />
          </IconButton>
          <Typography mt={1} align="left" variant="subtitle1">
            {data?.result.work || "Enter about your profession"}
          </Typography>
        </Stack>
        <Stack direction="row">
          <IconButton mt={2}>
            < SchoolIcon/>
          </IconButton>
          <Typography mt={1} align="left" variant="subtitle1">
            {data?.result.education || "Enter about your education"}
          </Typography>
        </Stack>
        <Stack direction="row">
          <IconButton mt={2}>
            <LocationOnIcon />
          </IconButton>
          <Typography mt={1} align="left" variant="subtitle1">
            {data?.result.location || "Select your location"}
          </Typography>
        </Stack>
      </Box>
    );
  };
  const ShowTagsCreated = () => {
    return (
      <>
        <Typography align="left" mb={2} variant="subtitle2">
          Tags Added
        </Typography>
        <Divider />
        <Typography mt={2} mb={2} align="left">
          {tags.map((tag) => {
            return <Chip label={tag} />;
          })}
        </Typography>
        <Divider />
      </>
    );
  };
  const ShowRecentActivity = () => {
    return <div>activity under construction</div>;
  };
  return (
    <Grid mt={3} container>
      <Grid item sm={2} xs={0}></Grid>
      <Grid m={2} item sm={5} xs={11}>
        <Box sx={{ width: "100%" }}>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={data?.result.imageUrl}
              sx={{ width: 120, height: 120 }}
            />
            <Stack direction="column">
              <Typography variant="h45">{data?.result.username || user.userName}</Typography>
              <Typography align="left" variant="subtitle1">
                {data?.result.bio || "About You"}
              </Typography>
              <Typography align="left" variant="subtitle1">
                {data?.result.email || user.email}
              </Typography>
              <Stack direction="row">
                <Typography variant="subtitle2" spacing={1}>
                  Total spam views - 78
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ width: "100%" }} mt={2}>
          <Stack direction="column">
            <Typography align="left" variant="subtitle2">
              {data?.result.about || "favourite quote"}
            </Typography>
            <Typography onClick={()=>setEditProfile(!editProfile)} color="text.disabled" align="left" variant="subtitle1">
              Edit Profile
            </Typography>
            <EditUserProfile open = {editProfile} handleClose={setEditProfile} profileDetails={data?.result}/>
          </Stack>
        </Box>
        { "work" && <><Box sx={{ width: "100%" }} mt={7} mb={1}>
          <Stack direction="row">
            <Link
              href="#"
              underline="hover"
              onClick={() => setTabSelected("spams")}
            >
              {spams.length} Spams
            </Link>
            <Link
              ml={2}
              href="#"
              underline="hover"
              onClick={() => setTabSelected("tags")}
            >
              3 Tags
            </Link>
            <Link
              ml={2}
              href="#"
              underline="hover"
              onClick={() => setTabSelected("activity")}
            >
              15 Activity
            </Link>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ width: "100%" }} mt={2} mb={2}>
          {getTabDataSelected()}
        </Box></>}
      </Grid>
      <Grid m={2} item sm={3} xs={11}>
        <Typography
          align="left"
          mb={2}
          style={{ fontWeight: 600 }}
          variant="subtitle1"
        >
          Credentials & Highights
        </Typography>
        <Divider />
        {ShowCredentials()}
      </Grid>
      <Grid item sm={2} xs={0}></Grid>
    </Grid>
  );
};

export default UserProfile;
