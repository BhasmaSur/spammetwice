import React, { useEffect, useState } from "react";
import {
  Box,
  CustomTable,
  Paper,
  RowBox,
  uuidv4,
  Typography,
  Grid,
} from "../../../common";
import SiteModal from "../../../common/components/site-modal";
import { httpService } from "../../../common/service-utils";

function createData(name, url, reported, actions) {
  return { name, url, reported, actions };
}
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "url", label: "Url", minWidth: 100, align: "center" },
  {
    id: "reported",
    label: "Reported",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const ReportedSitesList = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [siteSelected, setSiteSelected] = useState({});
  const returnNameFromUrl = (baseUrl) => {
    return baseUrl.split("//")[1].split(".")[0];
  };

  const rowClicked = (rowSelected) => {
    setSiteSelected(rowSelected);
    setOpen(true);
  };

  useEffect(() => {
    httpService("reported-sites","get",null, "spam" ).then((src)=>{
      if(src){
        const tempRows = src.data.result.map((site)=>{
          return createData(returnNameFromUrl(site.baseUrl),site.baseUrl,site.occurance, "View Spam")
        })
        setRows(tempRows)
      }
    })
    // const tempRows = [createData("nasa", "https://nasa.com", 24, "View Spam"),
    // ];
    // setRows(tempRows);
  }, []);
  return (
    <Grid sx={{minHeight:"550px" }} container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8}>
        <Typography mt={5} mb={5} variant="h5">
          List of Reported Pages
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <CustomTable rows={rows} columns={columns} rowClicked={rowClicked} />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <RowBox rows={rows} columns={columns} rowClicked={rowClicked} />
        </Box>
      </Grid>
      {open && <SiteModal
        open={open}
        handleClose={setOpen}
        siteSelected={siteSelected}
      />}
    </Grid>
  );
};

export default ReportedSitesList;
