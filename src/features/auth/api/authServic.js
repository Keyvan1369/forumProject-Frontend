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


export const signUpService = async(name,email,password) => {
  const res = await axios.get("https://api.escuelajs.co/api/v1/users/", // get and post
    {
      "name":name,
      "email":email,
      "password":password,
      " avatar":"https://picsum.photos/800"

    }
  )
   const data = res.data 
 console.log("Signup success:", data);
 
}

