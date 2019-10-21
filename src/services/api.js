import axios from "axios"

export const get = url => axios.get(url, { withCredentials: true })
export const post = (url, data) =>
  axios.post(url, data, { withCredentials: true })

export const authRequest = data => post("/auth", data)

export const allPersonsRequest = () => get("/allPersons")

export const vacanciesRequest = () => get("/vacancies")

export const detailsRequest = data => post("/vacancyDetails", data)

export const statisticsRequest = data => post("/statistics", data)

export const statesRequest = () => get("/states")
