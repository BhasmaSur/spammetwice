import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddFields, InputField, RemovableInputField, UploadImageBox, uuidv4} from "../../../common";
import { useLocation } from "react-router-dom";
import { httpService } from "../../../common/service-utils";
import { BUTTON_TYPE, DESCRIPTION_TYPE } from "../../../common/utils/constants";
const EditSpam = () => {
  const location = useLocation();
  const [spamToEdit, setSpamToEdit] = useState(location.state?.spamToEdit);
  console.log("in here", spamToEdit);

  const handleTitleChange = (event)=>{
    spamToEdit.title = event
    setSpamToEdit(spamToEdit)
  }

  const itemHandler = (type) => {
    // if(type === BUTTON_TYPE.SAVE){
    //   createNewSpamObjectAndSave()
    // }else{
    //   let itemNumber = spamContent.length
    //   let obj = { type, itemNumber };
    //   type === DESCRIPTION_TYPE.TEXT ? (obj.content = "") : (obj.url = "");
    //   setSpamContent([...spamContent, obj]);
    // }
     
  };

  const handleTextChange = (value,itemNumber) =>{
    let updatedSpamContent = [...spamToEdit.descriptionEntityList];
    updatedSpamContent[itemNumber].descContent = value
    setSpamToEdit({
        ...spamToEdit,
        descriptionEntityList : updatedSpamContent
    });
  }

  const handleImageChange = (url,itemNumber)=>{
    let updatedSpamContent = [...spamToEdit.descriptionEntityList];
    updatedSpamContent[itemNumber].descContent = url
    setSpamToEdit({
        ...spamToEdit,
        descriptionEntityList : updatedSpamContent
    });
  }

  const handleVideoChange = (url,itemNumber)=>{
    let updatedSpamContent = [...spamToEdit.descriptionEntityList];
    updatedSpamContent[itemNumber].descContent = url
    setSpamToEdit({
        ...spamToEdit,
        descriptionEntityList : updatedSpamContent
    });
  }
  const handleURLChange = (value,itemNumber)=>{
    let updatedSpamContent = [...spamToEdit.descriptionEntityList];
    updatedSpamContent[itemNumber].descContent = value
    setSpamToEdit({
        ...spamToEdit,
        descriptionEntityList : updatedSpamContent
    });
  }

  const deleteItem = (itemNumber) => {
    spamToEdit.descriptionEntityList.splice(itemNumber,1)
    setSpamToEdit({
        ...spamToEdit,
        descriptionEntityList : spamToEdit.descriptionEntityList
    });
    console.log(spamToEdit,itemNumber)
};

  const getItemType = (item,index) => {
    switch(item.descType){
      case DESCRIPTION_TYPE.TEXT :
        return (
          <Box m={2} mt={5} key={index}>
              <RemovableInputField
                text="type here..."
                type="text"
                value={item.descContent}
                handleChange={handleTextChange}
                handleDelete={deleteItem}
                itemNumber = {index}
              />
          </Box>
          
              );
      case DESCRIPTION_TYPE.URL :
        return (
          <Box m={2} mt={5} key={index}>
            <RemovableInputField
              text="enter url..."
              type="text"
              value={item.content}
              handleChange={handleURLChange}
              handleDelete={deleteItem}
              itemNumber = {index}
            />
          </Box>
        );
      case DESCRIPTION_TYPE.IMAGE :
        return (
          <Box m={2} mt={5} key={index}>
            <img
                src={item.descContent}
                aspect-ratio= "16/9"
                    height={"auto"}
                    width={"100%"}
                />
            <UploadImageBox
            handleChange={handleImageChange}
            handleDelete={deleteItem}
            itemNumber = {index}
            />
          </Box>
        );
      case DESCRIPTION_TYPE.VIDEO :
        return (
          <Box m={2} key={index}>
            <UploadImageBox
            handleChange={handleVideoChange}
            handleDelete={deleteItem}
            itemNumber = {index}
            />
          </Box>
        );
      default :
          break;
    }
  };

  return <Grid container alignItems="center" justifyContent="center" sx={{minHeight:"65vh"}}>
  <Grid item xs={12} sm={6}>
    <Box m={2}>
      <InputField
        text="Title"
        type="text"
        value={spamToEdit.title}
        handleChange={(event)=>handleTitleChange(event)}
      />
    </Box>
    <form>
    {spamToEdit &&
      spamToEdit.descriptionEntityList.map((item,index) => {
        return getItemType(item,index)
      })}
    </form>
    <Box m={1} mt={5} mb={10}>
      <AddFields itemHandler={itemHandler}/>
    </Box>
  </Grid>
</Grid>
};

export default EditSpam;
