import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { searchData } from "../../demo-data";
import {
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { uuidv4 } from "../..";
import { httpService } from "../../service-utils";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const ref = useRef(null);
  const [suggestion, setSuggestion] = React.useState([]);
  const [wordEntered, setWordEntered] = React.useState("");
  const historyHook = useNavigate();
  const handleSpamSelected = (spam) => {
    setSuggestion([]);

    historyHook("/spam", { state: { spamId: spam } });
  };
  const debounce = (func, time) => {
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
    let word = event.target.value;
    if (word === undefined || word === "") {
      setSuggestion([]);
    } else {
      let spamsReturned = [];
      httpService("search/" + word, "get", null, "spam").then((src) => {
        if (src.data.status === 200) {
          spamsReturned = src.data.result;
          setSuggestion(spamsReturned);
        }
      });
    }
  };

  const debounceCB = React.useCallback(debounce(handleFilter, 800), []);

  const clearBar = () => {
    setSuggestion([]);
    setWordEntered("");
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSuggestion([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
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
          placeholder="Search any Scam!"
          type="text"
          value={wordEntered}
          onKeyUp={(e) => {
            if (e.target.value !== undefined && e.target.value !== "") {
              debounceCB(e);
            }
          }}
          onClick={(e) => {
            if (e.target.value !== undefined && e.target.value !== "") {
              handleFilter(e);
            }
          }}
          onChange={(e) => {
            setWordEntered(e.target.value);
            if (e.target.value == undefined || e.target.value.length == 0)
              clearBar();
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

      {suggestion && (
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
            zIndex: 5,
          }}
        >
          {suggestion.map((value, key) => {
            return (
              <div key={uuidv4()}>
                <ListItemButton
                  dense="true"
                  sx={{
                    fontSize: "2px",
                    padding: 0,
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={value.title}
                      onClick={() => {
                        handleSpamSelected(value.spamId);
                      }}
                    />
                  </ListItem>
                </ListItemButton>
              </div>
            );
          })}
        </List>
      )}
    </div>
  );
};

const SearchIconWrapper = () => {
  return <div>search icon wrapper</div>;
};
export { SearchBar, SearchIconWrapper };
