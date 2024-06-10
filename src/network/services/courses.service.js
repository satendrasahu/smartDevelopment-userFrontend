import axios from "axios"
import config from "../../utils/config"

export const fetchCoursesDataService = async() => {
    const result = await axios.get(`${config.apiUrl}/user-courses/fetch`)
    return result.data
  }
export const fetchTopicsDataService = async(payload) => {
    const result = await axios.post(`${config.apiUrl}/course-topics/fetch`,payload)
    return result.data
  }
export const fetchQuestionAnswerService = async(payload) => {
    const result = await axios.post(`${config.apiUrl}/topic-questions-answers/fetch`,payload)
    return result.data
  }