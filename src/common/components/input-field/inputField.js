import { TextField, Typography } from "@mui/material";
import React from "react";

const InputField = ({ text,value, type, handleChange }) => {
  return (
    <div>
      <Typography mt={2} align="left">{text}</Typography>
      <TextField 
        type={type}
        fullWidth={true}
        variant="outlined"
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
