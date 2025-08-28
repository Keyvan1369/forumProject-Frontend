import axios from "axios";

export const loginservice = async (email, password) => {
  const res = await axios.post(" http://localhost:5010/login", {
    email: email,
    password: password,
  });
  return res.data;
  console.log(data);
};

export const signUpService = async (newUser) => {
  try {
    const res = await axios.post(
      "http://localhost:5010/signup", 

      newUser
    );
    const data = res.data;
    console.log("Signup success:", data);
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
  }
};
