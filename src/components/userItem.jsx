import React from "react";
import { makeStyles, Grid, Box, Fab } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  options: {
    display: "flex",
    marginRight: "20px",
  },
}));

function UserItem(id, email, deleteUser, editUser) {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={14} sm={10}>
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
          {email}
          <div>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => deleteUser(id)}
                value={users.user1.id}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip onClick={() => editUser(id)} title="Edit" aria-label="add">
              <Fab color="primary">
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
        </Box>
      </Grid>
    </div>
  );
}

export default UserItem;
