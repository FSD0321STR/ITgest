import React, { useState } from "react";
import UserList from "./userList";
import UserItem from "./userItem";
import { useState } from "react";

function UserDashboard() {
  const [users, setUsers] = useState([]);

  const getUsers = {
    user1: { email: "asier.j.ehu@gmail.com", id: 1 },
    user2: { email: "asier.j.ehu+2@gmail.com", id: 2 },
    user3: { email: "asier.j.ehu+3@gmail.com", id: 3 },
  };

  const getAllusers = (getUsers) => {
    setUsers(getUsers);
  };

  const deleteUser = (e) => {
    const userId = e.target.value;
    console.log();
  };

  const editUser = () => {
    console.log("editUser");
  };

  getAllusers(getUsers);

  return;
  <UserList>
    {users.map((user) => (
      <UserItem
        key={user.id}
        id={user.id}
        email={user.email}
        onclick={editUser}
        deleteUser={deleteUser}
      />
    ))}
  </UserList>;
}
