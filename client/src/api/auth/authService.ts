// Library imports.
import axios from 'axios';


const API_URL = '/api/users/';

// const register = async (userData : UserFormData) => {
//   const res = await axios.post(API_URL + 'register', userData);

//   (res.data) && localStorage.setItem('user', JSON.stringify(res.data));

//   return res.data;
// };

const login = async (userData : UserFormData) => {
  const res = await axios.post(API_URL + 'login', userData);

  (res.data) && localStorage.setItem('user', JSON.stringify(res.data));

  return res.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  // register,
  logout,
  login,
};

export default authService;
