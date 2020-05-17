import React, { CSSProperties } from "react";
import { Typography, TextField } from "@material-ui/core";
import Space from "../atoms/Space";
import SearchBar from "../molecules/SearchBar";

interface IHeader extends React.HTMLAttributes<HTMLDivElement> {}

const style: CSSProperties = {
  position: "sticky",
  top: "0",
  width: "100%",
  height: "64px",
  boxShadow: "0px 2px 4px 0px rgba(156,156,156,1)",
  zIndex: 1000,
  backgroundColor: "#fff",
  padding: "0 20px",

  display: "flex",
  alignItems: "center",
};

const Header = ({ ...props }: IHeader) => {
  return (
    <div {...props} style={{ ...style, ...props.style }}>
      <Typography variant="h5">Growth</Typography>
      <Space />
      <SearchBar />
    </div>
  );
};

export default Header;
