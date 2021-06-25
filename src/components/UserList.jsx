import React from "react";
import { makeStyles } from "@material-ui/core";
import UserItem from "./userItem";

const useStyles = makeStyles((theme) => ({
  options: {
    display: "flex",
    marginRight: "20px",
  },
}));

function UserList({ children }) {
  const classes = useStyles();

  return <UserItem>{children}</UserItem>;
}
export default UserList;
