import axios from 'axios'
const VITE_API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
});

const token = localStorage.getItem('token');

api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

// const register = ({email, password}) => {
//     return fetch(`${VITE_API_URL}/api/register`, {
//       method: 'POST',
//       mode: 'cors',
//       headers: { 
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({email, password})
//     }).then(res => res = res.json())
//     .catch(error => console.error('Error:', error))
// }


// const getCategory = ({name}) => {
//     return fetch(`${VITE_API_URL}/categories`, {
//       method: 'GET',
//       mode: 'cors',
//       headers: { 
//           'Content-Type': 'application/json',
//       },
      
//       body: JSON.stringify({name})
      
//     }).then(res => res = res.json())
//     .catch(error => console.error('Error:', error))
    
// }


const postForm = ({category, model, brand, supplier, price, stock}) => {
    return fetch(`http://localhost:8000/formproduct`, {
      method: 'POST',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      
      body: JSON.stringify({category, model, brand, supplier, price, stock})
      
    }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))


    
    
}
const postFormAxios =() => {
axios.post('http://localhost:8000/formproduct', {
  data:{
    category: formValues.category,
    model: formValues.model,
    brand: formValues.brand,
    supplier: formValues.supplier,
    price: formValues.price,
    stock: formValues.stock
  }  
  
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
 
}



export default {
    // register,
    // getCategory,
    postForm,
    postFormAxios,
}
