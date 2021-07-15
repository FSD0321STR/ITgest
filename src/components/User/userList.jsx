import React from "react";
import { makeStyles } from "@material-ui/core";
import { TabScrollButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "600px",
    borderRadius: "10px",
    marginTop:"30px",
    marginLeft:"20px",
    boxShadow: "2px 2px 15px #8888",
    width: "90%",
    padding: "20px",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    
    
  },
}));
function UserList({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
export default UserList;
