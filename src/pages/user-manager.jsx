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

const users = [
  {
    email: "as.j@SpeechGram3@marList.com",
    _id: "jasndj21jn3j12lk3lk",
  },
  {
    email: "as.j@SpeechGramm2@arList.com",
    _id: "jasndj21jn3j1aqwe2lk3lk",
  },
  {
    email: "as.j@SpeechGrammar3@List.com",
    _id: "jasndj21jn3sdsj12lk3lk",
  },
];

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
    id: "",
    name: "",
    surname: "",
    email: "",
    role: "",
    password: "",
  });

  const editUser = async (id) => {
    await api.getUser().then((user) => setEditingUser(user));
  };

  const [users, setUsers] = useState([]);

  useEffect(async () => {
    await api.getAllUsers().then(setUsers);
  }, []);

  const deleteUser = async (id) => {
    const response = await api.deleteUser(id);
    alert(response.message);
    const tasks = await api.getAllUsers();
    setUsers(users);
  };

  return (
    <div className={classes.root}>
      <div>
        <UserList>
          {users.map((user) => (
            <UserItem
              key={user._id}
              id={user._id}
              onClick={editUser}
              onRemuve={deleteUser}
              email={user.email}
            />
          ))}
        </UserList>
      </div>
      <UserForm user={editingUser} />
    </div>
  );
}

export default userManager;
