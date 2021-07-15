import axios from 'axios'
const VITE_API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
});

const token = localStorage.getItem('token');
console.log(token);
api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';


const postItem = (item) => {
    return fetch(`http://localhost:8000/formproduct`, {
      method: 'POST',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(item.properties),
  }).then(res => res = res.json())
  .catch(error => console.error('Error:', error))
  };

  const getAllItem = () => {
    return fetch(`http://localhost:8000/item`, {
      method: 'GET',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
    }).then(res => res = res.json())
};


const register = (user) => {
    return fetch(`http://localhost:8000/register`, {
      method: 'POST',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(res => res = res.json(user))
    .catch(error => console.error('Error:', error))
};

const allUsers = () => {
    return fetch(`http://localhost:8000/user`, {
      method: 'GET',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
      },
    }).then(res => res = res.json())
};

const getUser = (id) => {
    return fetch(`http://localhost:8000/user/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
      },
    }).then(res => res = res.json(user))
};

const deleteUser = (id) => {
    return fetch(`http://localhost:8000/user/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
      },
    }).then(res => res = res.json("Usuario borrado"))
};
const updateUser = (user) => {
    return fetch(`http://localhost:8000/user/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(res => res = res.json(user))
    .catch(error => console.error('Error:', error))
};




const login = (user) => {
    return fetch(`http://localhost:8000/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Conten-Type': 'application/json',  
        },
        body: JSON.stringify(user)
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

const getAllUsers = () => {
    return fetch(`http://localhost:8000/user`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${token}`
        }
    }).then(res => res = res.json());
  }

  const removeUser = async (id) => {
    const response = await api.deleteUser(id);
    alert(response.message);
    const users = await api.getAllUsers()
    //setUsers(users);
  };



export default {
    register,
    allUsers,
    getUser,
    deleteUser,
    updateUser,
    getAllUsers,
    removeUser,
    login,
    postItem,
    getAllItem,
}
