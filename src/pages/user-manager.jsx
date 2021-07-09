import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import UserForm from "../components/userForm";
import UserItem from "../components/userItem";
import UserList from "../components/userList";
import api from "../helpers/api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    margin: "20px",
    gridGap: "20px",
  },
}));

const toediteduser = {
  _id: "60d379b8a46c433880a96b8a",
  name: "Victor2",
  surname: "Victor",
  email: "victor@victor.com",
  role: "ROLE_ADMIN",
};

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
    console.log("editar usuario");
    // await api.getUser().then((user) => setEditingUser(user));
  };

  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await api.getAllUsers().then(setUsers);
  }, []);

  const deleteUser = async (userId) => {
    console.log(userId);
    const response = await api.deleteUser(userId);
    alert(response.message);
    const users = await api.getAllUsers();
    setUsers(users);
  };

  return (
    <div className={classes.root}>
      <div>
        <UserList>
          {users.map((users) => (
            <UserItem
              key={users.id}
              userId={users.id}
              onClick={editUser}
              deleteUser={deleteUser}
              email={users.email}
            />
          ))}
        </UserList>
      </div>
      <UserForm user={editingUser} />
    </div>
  );
}

export default userManager;
