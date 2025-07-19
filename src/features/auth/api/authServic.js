import axios from 'axios'
import { data } from 'react-router';

export const loginservice = async(email, password) => {
  const res = await axios.post(" https://api.escuelajs.co/api/v1/auth/login",
    {
  "email": email,
  "password": password
}
  ) 
  const data = res.data 
  console.log(data);
  
  
}
