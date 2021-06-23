import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import UserList from "../components/userList";
import UserForm from "../components/userForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    marginTop: "20px",
  },
}));

function userManager() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <UserList />
      </div>
      <div>
        <UserForm />
      </div>
    </div>
  );
}

export default userManager;
