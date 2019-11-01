import axios from "axios"
const request = axios.create({ withCredentials: true })
const api = process.env.REACT_APP_API_URL
console.log("api", api)

const get = url => request.get(api + url)
const post = (url, data) => request.post(api + url, data)

export const getAllPersons = () => get("/allPersons")
export const getVacancies = () => get("/vacancies")
export const getInterviewStates = () => get("/interviewStates")
export const auth = data => post("/auth", data)
export const getVacancyDetails = data => post("/vacancyDetails", data)
