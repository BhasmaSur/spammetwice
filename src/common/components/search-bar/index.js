import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { searchData } from "../../demo-data";
import {
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import { borderRadius } from "@mui/system";

const SearchBar = () => {
  const [suggestion, setSuggestion] = React.useState([]);
  const [wordEntered, setWordEntered] = React.useState("");

  const debounce = (func, time) => {
    console.log("DEBOUNCE CALLED");

    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, time);
    };
  };

  const handleFilter = (event) => {
    
    console.log("HANDLE FILTER");

    let word = event.target.value;

    console.log("WORD IN HANDLE FILTER");
    console.log(word);

    if (word === "") {
      setSuggestion([]);
    } else {
      const newFilter = searchData.filter((value) => {
        return value.title.toLowerCase().includes(word.toLowerCase());
        //add API here
      });

      setSuggestion(newFilter);
    }
  };

 const debounceCB = React.useCallback(debounce(handleFilter, 700), []);

  const clearBar = () => {
    setSuggestion([]);
    setWordEntered("");
  };

  React.useEffect(() => {
    console.log("In USE Effects");
    window.addEventListener("keyup", debounceCB);
    return () => {
        window.removeEventListener("keyup", debounceCB);
    };
},[wordEntered])

  return (
    <div>
      <Paper
        elevation={0}
        component="form"
        sx={{
          marginTop: "5px",
          p: "1px 1px",
          display: "flex",
          alignItems: "center",
        
        }}
      >
        <SearchIcon sx={{ p: "1px 1px" }} />

        <InputBase
          sx={{ ml: 1, flex: 1, p: "1px 1px" }}
          placeholder="Search any Spam!"
          type="text"
          value={wordEntered}
          onChange={e => {
          //e.persist();
          setWordEntered(e.target.value);
          console.log("from input line " + e.target.value);
          /*
            if (e.target.value !== "") {
              debounceCB(e);
            }
            */

          }}
        />
        {wordEntered.length > 0 && (
          <IconButton
            type="submit"
            sx={{ p: "5px" }}
            aria-label="search"
            onClick={clearBar}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Paper>

      {suggestion.length !== 0 && (
        <List
          sx={{
           
            position: "absolute",
            marginLeft: "25px",
            width: "auto",
            maxWidth: "300px",


            padding: 0,
            backgroundColor: "#f3f3f1",
            borderRadius: "3px",
            textSizeAdjust: 1,
            zIndex: 5
          }}
        >
          {suggestion.slice(0, 5).map((value, key) => {
            return (
              <div>
                <ListItemButton
                dense = "true"
                  sx={{
                    fontSize: "2px",
                    padding: 0,
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemText primary={value.title}/>
                  </ListItem>
                </ListItemButton>
            
              </div>
            );
          })}
        </List>
      )}
    </div>

    /*




          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemText primary="Brunch this weekend?" />
            </ListItem>
          </ListItemButton>
          <Divider variant="middle" component="li" />

          

          <ListItemButton>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Brunch this weekend? ...................asdsa dsadasdsadas dasdsadsa sadasdas asdasdsa asd asdas asd " />
          </ListItem>
          </ListItemButton>
          <Divider variant="middle" component="li" />


       





    <div className="search">
      <div className="searchInput">
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          type="text"
          value={wordEntered}
          onChange={(e) => {
            setWordEntered(e.target.value);
            //console.log("from input line " + wordEntered);
            wordEntered.length > 0 && debounceCB(e);
          }}
        />

        {wordEntered.length === 0 ? (
          <div className="searchIcon">
            <SearchIcon />
          </div>
        ) : (
          <div className="searchIcon" onClick={clearBar}>
            <ClearIcon />
          </div>
        )}
      </div>
      {suggestion.length !== 0 && (
        <div className="dataResult">
          {suggestion.slice(0, 15).map((value, key) => {
            return (
              <a className="dataElement" href={value.link}>
                {" "}
                {value.title}{" "}
              </a>
            );
          })}
        </div>
      )}
    </div>
*/
  );
};

const SearchIconWrapper = () => {
  return <div>search icon wrapper</div>;
};

/*
const SearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  display: "flex",
  justifyContent:"left",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
*/
export { SearchBar, SearchIconWrapper };