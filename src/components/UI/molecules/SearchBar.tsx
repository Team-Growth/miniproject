import React, { CSSProperties, useState } from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface ISearchBar extends React.HTMLAttributes<HTMLDivElement> {}
const useStyles = makeStyles({
  root: {
    paddingLeft: 10,
    border: "1px solid #000",
    borderRadius: 30,
  },
  focused: {
    borderColor: "#0098fe",
  },
});

const SearchBar = ({ ...props }: ISearchBar) => {
  const styles = useStyles();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Input
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      classes={styles}
      disableUnderline={true}
      inputProps={{ placeholder: "검색" }}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon htmlColor={isFocus ? "#0098fe" : "#000"} />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
