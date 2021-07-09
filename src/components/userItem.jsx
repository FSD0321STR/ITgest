import React from "react";
import { makeStyles, Grid, Box, Fab } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  options: {
    background: "#fff",
    border: "1px solid #e1e1e1",
    filter: "drop-shadow(3px 3px 1px rgba(0,0,0,.08))",
    padding: "12px",
    display: "flex",
    marginBottom: "10px",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  icon: {
    width: "20px",
    Height: "20px",
  },
}));

function UserItem({ userId, email, deleteUser, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.options}>
      {email}
      <div>
        <Tooltip title="Delete">
          <IconButton
            onClick={(userId) => deleteUser(userId)}
            className={classes.icon}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton
            onClick={(id) => onClick(id)}
            className={classes.icon}
            aria-label="Edit"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default UserItem;
