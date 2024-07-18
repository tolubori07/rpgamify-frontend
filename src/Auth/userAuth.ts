import axios from 'axios'
const API_URL = "http://localhost:3000"

type loginData = { 
  email:string;
  password:string;
}

type register ={ 
  username:string;
  email:string;
  password:string;
  number:number;
}

export const login = async (userData:loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      // Set the value of the user atom
         }
    return response.data;
  } catch (err) {
    console.error(err);
  }
};


export const logout = () => {
  localStorage.removeItem('user');
};

export const register = async (userData:register) => {
  try {
    const response = await axios.post(API_URL, userData);
  if (response.data) {

    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;

  } catch (error) {
    console.error(error)
  }
};

const authServices = {
login,
logout,
register
}
export default authServices
