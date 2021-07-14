import React from "react";
import { makeStyles } from "@material-ui/core";
import { TabScrollButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px",
  },

}));

function UserList({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

export default UserList;
