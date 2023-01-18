import React, { useEffect, useState } from "react";
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
import "./index.css";
import EditAdModal from "../../../common/components/edit-ad-modal";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const historyHook = useNavigate();
  const { getSessionData } = auth();
  const { user } = getSessionData();
  const [editProfile, setEditProfile] = useState(false);
  const { spams, tags, activity, userHighligts } = profile_data;
  const [userProfileData, setUserProfileData] = useState();
  const [metaData, setMetaData] = useState({});
  const [editAd, setEditAd] = useState(false);
  const [spamSelected, setSpamSelected] = useState();

  const fetchUserProfile = async () => {
    const res = await httpService("get-profile", "get", null, "profile");
    return res.data;
  };
  const { data } = useQuery("profileData", fetchUserProfile);
  if (data?.status !== 200) {
    //show error message
  }

  const [tabSelected, setTabSelected] = useState("spams");
  const getTabDataSelected = () => {
    if (tabSelected === PROFILE_TABS.SPAMS) {
      return ShowRecentSpams();
    } else if (tabSelected === PROFILE_TABS.TAGS) {
      return ShowTagsCreated();
    } else if (tabSelected === PROFILE_TABS.URLS) {
      return ShowUrlsAddedByUser();
    } else if (tabSelected === PROFILE_TABS.ACTIVITY)
      return ShowRecentActivity();
  };
  // const useAddedSpamSelected = (spam) =>{
  //   historyHook("/spam", { state: { spamId: spam.spamId } });
  // }

  const ShowRecentSpams = () => {
    const handleAdEdit = (spam) => {
      setSpamSelected(spam);
      setEditAd(true);
    };
    return (
      <>
        <Typography align="left" mb={2} variant="subtitle2">
          User Added Spams
        </Typography>
        <Divider />
        {metaData?.spamEntityList?.map((spam) => {
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
                  {spam.likes} Likes
                </Typography>
                <Typography
                  align="left"
                  ml={2}
                  mb={2}
                  variant="subtitle2"
                  component="div"
                >
                  {spam.views} Views
                </Typography>
                {/* <Typography
                  align="left"
                  ml={2}
                  mb={2}
                  variant="subtitle2"
                  component="div"
                >
                  {spam.createdOn}
                </Typography> */}
                <Typography
                  align="left"
                  ml={2}
                  mb={2}
                  variant="subtitle2"
                  component="div"
                  onClick={() => handleAdEdit(spam)}
                >
                  <spam className="edit-ad">Edit Ad</spam>
                </Typography>
                <Typography
                  align="left"
                  ml={2}
                  mb={2}
                  variant="subtitle2"
                  component="div"
                  onClick={() =>
                    historyHook("/spam", { state: { spamId: spam.spamId } })
                  }
                >
                  <spam className="edit-ad">Go To Spam</spam>
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
            <SchoolIcon />
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
          {metaData?.tags.map((tag) => {
            return <Chip label={tag} />;
          })}
        </Typography>
        <Divider />
      </>
    );
  };

  const ShowUrlsAddedByUser = () => {
    return (
      <>
        <Typography align="left" mb={2} variant="subtitle2">
          User Added Spams
        </Typography>
        <Divider />
        {metaData?.reportedSitesResponses?.map((url) => {
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
                {url.baseUrl}
              </Typography>
              <Stack direction="row">
                <Typography
                  align="left"
                  mb={2}
                  variant="subtitle2"
                  component="div"
                >
                  {url.occurance} Occurances
                </Typography>
              </Stack>
              <Divider />
            </>
          );
        })}
      </>
    );
  };
  const ShowRecentActivity = () => {
    return <div>activity under construction</div>;
  };

  const fetchDataRelatedToUser = () => {
    httpService("meta-data", "get", null, "spam").then((src) => {
      if (src) {
        setMetaData(src.data.result);
      }
    });
  };

  useEffect(() => {
    fetchDataRelatedToUser();
  }, []);
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
              <Typography variant="h45">
                {data?.result.username || user.userName}
              </Typography>
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
            <Typography
              onClick={() => setEditProfile(!editProfile)}
              color="text.disabled"
              align="left"
              variant="subtitle1"
            >
              Edit Profile
            </Typography>
            <EditUserProfile
              open={editProfile}
              handleClose={setEditProfile}
              profileDetails={data?.result}
            />
          </Stack>
        </Box>
        <Box sx={{ width: "100%" }} mt={7} mb={1}>
          <Stack direction="row">
            <Link
              href="#"
              underline="hover"
              onClick={() => setTabSelected(PROFILE_TABS.SPAMS)}
            >
              {metaData?.spamEntityList?.length} Spams
            </Link>
            {/* <Link
              ml={2}
              href="#"
              underline="hover"
              onClick={() => setTabSelected(PROFILE_TABS.TAGS)}
            >
              {metaData?.tags?.length} Tags
            </Link> */}
            <Link
              ml={2}
              href="#"
              underline="hover"
              onClick={() => setTabSelected(PROFILE_TABS.URLS)}
            >
              {metaData?.reportedSitesResponses?.length} URLs Added
            </Link>
          </Stack>
        </Box>
        <Divider />
        {!metaData && <Box sx={{ height: "220px" }}></Box>}
        {metaData && (
          <Box sx={{ width: "100%", minHeight: "200px" }} mt={2} mb={2}>
            {getTabDataSelected()}
          </Box>
        )}
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
      {editAd && (
        <EditAdModal
          open={editAd}
          handleEditAdClose={setEditAd}
          spam={spamSelected}
        />
      )}
    </Grid>
  );
};

export default UserProfile;
