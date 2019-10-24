import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import LaunchPlaceholder from "../components/LaunchPlaceholder"
import Header from "./Header"
import Error from "../components/Error"
import VacancyList from "./VacancyList"

const Scoreboard = () => {
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)
  const error = useSelector(state => state.error)

  if (isFirstLaunch) {
    return <LaunchPlaceholder />
  }

  if (error) {
    return (
      <Error
        message={
          (error.response && error.response.data.message) || error.message
        }
      />
    )
  }

  return (
    <Fragment>
      <Header />
      <VacancyList />
    </Fragment>
  )
}

export default Scoreboard
