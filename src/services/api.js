import axios from "axios"

const get = url => axios.get(url, { withCredentials: true })
const post = (url, data) => axios.post(url, data, { withCredentials: true })

export const authRequest = data => post("/auth", data)

export const allPersonsRequest = () => get("/allPersons")

export const vacanciesRequest = () => get("/vacancies")

export const statisticsRequest = data => post("/statistics", data)

export const statesRequest = () => get("/states")
