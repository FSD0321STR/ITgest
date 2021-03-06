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
}));

function userManager() {
  const classes = useStyles();
  const [editingUser, setEditingUser] = useState({
    name: "",
    surname: "",
    email: "",
    role: "Administrador",
    password: "",
    _id: "",
  });

  const editUser = (id) => {
    console.log(id);
    const user = users.filter((user) => user._id === id);
    const userNoPassword = user[0];
    userNoPassword.password = "";
    setEditingUser(userNoPassword);
    console.log(userNoPassword);
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
    <div className={classes.root}>
      <div>
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
      <UserForm user={editingUser} setUser={setEditingUser} />
    </div>
  );
}

export default userManager;
