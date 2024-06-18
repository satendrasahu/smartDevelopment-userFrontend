import axios from "axios"
import config from "../../utils/config"

export const fetchCoursesDataService = async() => {
    const result = await axios.get(`${config.apiUrl}/fetch-user-courses`)
    return result.data
  }
export const fetchTopicsDataService = async(payload) => {
    const result = await axios.post(`${config.apiUrl}/fetch-course-topics`,payload)
    return result.data
  }
export const fetchQuestionAnswerService = async(payload) => {
    const result = await axios.post(`${config.apiUrl}/fetch-topic-questions-answers`,payload)
    return result.data
  }