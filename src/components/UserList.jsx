import React from "react";
import Button from '@material-ui/core/Button'



function UserList(){
    const users = {
        user1:
            {email : 'asier.j.ehu@gmail.com',
            id: 1},
        user2:
            {email : 'asier.j.ehu+2@gmail.com',
            id: 2},
        user3:
            {email : 'asier.j.ehu+3@gmail.com',
            id: 3}

    }

    return(
        <Button variant="contained" color="primary">{users.email}</Button>
    )
}

export default UserList;
