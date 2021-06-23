import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
})

const register = ({email, password}) => {
    return fetch(`${API_URL}/register`, {
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
