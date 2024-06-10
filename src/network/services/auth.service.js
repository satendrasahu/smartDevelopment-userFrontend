import axios from "axios"
import config from "../../utils/config"

export const loginService = async(payload) => {
    const result = await axios.get(`${config.apiUrl}/user-courses/fetch`,{payload})
    return result.data
  }