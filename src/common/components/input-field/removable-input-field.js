import {
  TextField,
  Typography,
  IconButton,
  DeleteIcon,
  Grid,
  Box
} from "../..";

// const useStyles = makeStyles((theme)=>({
//     removeBox:{
//       background:theme.palette.primary.main
//     }
//   }))

const RemovableInputField = ({ text, type,value, handleChange,handleDelete,itemNumber }) => {

    // const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={10} sm={11}>
        <Typography align="left">{text}</Typography>
        <TextField
          type={type}
          fullWidth={true}
          variant="outlined"
          value={value}
          onChange={(event) => {
            handleChange(event.target.value,itemNumber)
          }}
        />
      </Grid>
      <Grid item xs={2} sm={1}>
        <Box 
        mt={3}
        ml={1}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={()=>handleDelete(itemNumber)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RemovableInputField;
