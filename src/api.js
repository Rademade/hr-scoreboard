import axios from "axios"

export const authRequest = creds =>
  axios.post(
    "/auth",
    {
      username: creds.username,
      password: creds.password
    },
    { withCredentials: true }
  )

export const vacanciesRequest = () =>
  axios.get("/vacancies", { withCredentials: true })

export const statisticsRequest = ({
  personIds,
  vacancyIds,
  fromTimestamp,
  toTimestamp
}) =>
  axios.post(
    "/statistics",
    {
      personIds,
      vacancyIds,
      fromTimestamp,
      toTimestamp
    },
    { withCredentials: true }
  )
