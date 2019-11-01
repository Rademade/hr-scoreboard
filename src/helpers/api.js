import axios from "axios"

const request = axios.create({ withCredentials: true })
const api = process.env.REACT_APP_API_URL
const get = url => request.get(api + url)
const post = (url, data) => request.post(api + url, data)
export const authPing = () => get("/authPing")
export const auth = data => post("/auth", data)
export const getInterviewStates = () => get("/interviewStates")
export const getVacancies = () => get("/vacancies")
export const getVacancyDetails = data => post("/vacancyDetails", data)
