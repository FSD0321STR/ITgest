import React from "react";
import {
  Container,
  Button,
  makeStyles,
  Grid,
  Box,
  Fab,
} from "@material-ui/core";
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

function UserList() {
  const classes = useStyles();
  const users = {
    user1: { email: "asier.j.ehu@gmail.com", id: 1 },
    user2: { email: "asier.j.ehu+2@gmail.com", id: 2 },
    user3: { email: "asier.j.ehu+3@gmail.com", id: 3 },
  };

  const deleteUser = (e) => {
    const userId = e.target.value;
    console.log();
  };

  const editUser = () => {
    console.log("editUser");
  };

  return (
    <div>
      <Grid item xs={14} sm={10}>
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
          {users.user1.email}
          <div>
            <Tooltip title="Delete">
              <IconButton
                onClick={deleteUser}
                value={users.user1.id}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              onClick={editUser}
              value={users.user1.id}
              title="Edit"
              aria-label="add"
            >
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

export default UserList;
