import React, { useState } from "react";
import { Box, Button, Grid, IconButton, DeleteIcon } from "../..";
import { httpService } from "../../service-utils";
const UploadImageBox = ({handleChange,handleDelete,itemNumber}) => {
  const [fileSelected, setFileSelected] = useState(null);
  const fileSelectedHandler = (event) => {
    setFileSelected(event.target.files[0])
  };
  const uploadFile = (event) => {
    const formData = new FormData();
    formData.append(
      "myFile",
      fileSelected,
      fileSelected.name
    )
    //retrurn url of the file uploaded
    httpService("file/upload","post",formData,"spam").then((src)=>{
      if(src?.data.status === 200){
        handleChange(src.data.result,itemNumber)
      }
    })
  };
  return (
    <Grid container>
      <Grid
        item
        xs={10}
        sm={11}
        sx={{
          border: "solid grey",
          borderRadius: "5px",
          paddingTop: 1.5,
          paddingBottom: 1.5,
        }}
      >
        <input type="file" onChange={(event)=>fileSelectedHandler(event)} />
        <Button disabled={!fileSelected} size="small" variant="contained" onClick={uploadFile}>
          Upload
        </Button>
      </Grid>
      <Grid item xs={2} sm={1}>
        <Box mt={3} ml={1}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={()=>handleDelete(itemNumber)}
          >
            <DeleteIcon/>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UploadImageBox;
