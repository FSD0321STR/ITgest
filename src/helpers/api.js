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

export default {
    register,
}
