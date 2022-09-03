import React from "react";
import {
  Box,
  CustomTable,
  Paper,
  RowBox,
  uuidv4,
  Typography,
  Grid,
} from "../../../common";

function createData(name, url, reported, actions, status) {
  return { name, url, reported, actions, status };
}
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "url", label: "Url", minWidth: 100, align: "center" },
  {
    id: "reported",
    label: "Times Reported",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "center",
    type: "drop-down",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

//   const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
//   ];

const headerList = ["Sr No.", "Name", "Url", "Times Reported", "Action"];

const actionsList = ["View report card", "Add new spam", "Rechecking"];
const rows = [
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
  createData("Niyasa", "https://www.sdadad.com/", 24, "voew", "fake"),
];

const ReportedSitesList = () => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8}>
        <Typography variant="h5">List of Reported Sites</Typography>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <CustomTable rows={rows} columns={columns} />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <RowBox rows={rows} columns={columns} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReportedSitesList;
