import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import UserForm from "../components/User/userForm";
import UserItem from "../components/User/userItem";
import UserList from "../components/User/userList";
import api from "../helpers/api";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    margin: "20px",
    gridGap: "20px",
  },
  userItems: {
    borderRadius: "10px",
    marginTop: "30px",
    margin: "10px",
    padding: "10px",
    boxShadow: "2px 2px 15px #8888",
    display: "flex",
  },
  screen: {
    minHeight: "80vh",
  },
}));

function userManager() {
  const classes = useStyles();
  const [editingUser, setEditingUser] = useState({
    name: "",
    surname: "",
    email: "",
    role: "",
    password: "",
  });

  const editUser = async (id) => {
    console.log(id);
    const toeditUser = users.filter((user, id) => {
      return user._id === id;
    });
    console.log(toeditUser);
    setEditingUser(toeditUser);
    // await api.getUser(id).then((user) => setEditingUser(user));
  };

  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await api.getAllUsers().then(setUsers);
  }, []);

  const deleteUser = async (userId) => {
    console.log(userId);
    const response = await api.deleteUser(userId);
    const users = await api.getAllUsers();
    setUsers(users);
  };
  console.log(users);
  return (
    <div className={classes.screen}>
      <div className={classes.root}>
        <div className={classes.userItems}>
          <UserList>
            {users.map((user) => (
              <UserItem
                key={user._id}
                userId={user._id}
                onClick={editUser}
                deleteUser={deleteUser}
                email={user.email}
              />
            ))}
          </UserList>
        </div>
        <UserForm user={editingUser} />
      </div>
    </div>
  );
}

export default userManager;
