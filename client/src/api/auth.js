import axios from  axios
const API_URL = 'http:localhost:5000/api/users'

export const register = async (userdata)=>{
    const response = await axios.post(`${API_URL}/register`, userdata)
    return response.data
  }

  export const login  = async (userdata)=>{
    const response = await axios.post(`${API_URL}/login`,userdata)
    return response.data
  }

