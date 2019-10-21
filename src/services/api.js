import axios from "axios"

const get = url => axios.get(url, { withCredentials: true })
const post = (url, data) => axios.post(url, data, { withCredentials: true })

export const getAllPersons = () => get("/allPersons")

export const getVacancies = () => get("/vacancies")

export const getInterviewStates = () => get("/interviewStates")

export const auth = data => post("/auth", data)

export const getVacancyStatistic = data => post("/vacancyStatistic", data)

export const getVacancyDetails = data => post("/vacancyDetails", data)

export const getGeneralStatistics = data => post("/generalStatistics", data)
