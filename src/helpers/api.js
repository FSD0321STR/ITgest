import axios from 'axios'
const VITE_API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
})

const register = ({email, password}) => {
    return fetch(`${VITE_API_URL}/api/register`, {
      method: 'POST',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

const login = ({email, password}) => {
    return fetch(`${VITE_API_URL}/api/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Conten-Type': 'application/json',  
        },
        body: JSON.stringify({email, password})
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

const getAllUsers = () => {
    return fetch(`${API_URL}/api/userAdmin`, {
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
    login,
    getAllUsers,
    removeUser,
}
