import {
  Paper,
  Box,
  Grid,
  Typography,
  uuidv4,
  Select,
  MenuItem,
} from "../..";
import React from "react";

const RowBox = ({ rows, columns }) => {

  const handleChange =()=>{

  }
  const getFieldAccordingToType = (row, col) => {
    if (col.type === "drop-down") {
      return (
        <Grid mt={1} textAlign="left" item xs={8} key={uuidv4()}>
         <Select
          value={10}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>
      );
    } else {
      return (
        <Grid mt={1} textAlign="left" item xs={8} key={uuidv4()}>
          {row[col.id]}
        </Grid>
      );
    }
  };
  console.log(rows, columns);
  return (
    <Box p={1}>
      {rows.map((row) => {
        return (
          <Paper elevation={3} key={uuidv4()}>
            <Grid mt={1} p={1} container>
              {columns.map((col) => {
                return (
                  <>
                    <Grid textAlign="left" item xs={4} key={uuidv4()}>
                      <Typography variant="h6">{col.label} : </Typography>
                    </Grid>
                    {getFieldAccordingToType(row, col)}
                  </>
                );
              })}
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default RowBox;
