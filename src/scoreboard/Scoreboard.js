import React, { Fragment } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import LaunchPlaceholder from "../components/LaunchPlaceholder"
import Header from "./Header"
import Error from "../components/Error"
import VacancyItem from "./VacancyItem"

const Scoreboard = () => {
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)
  const error = useSelector(state => state.error)
  const vacancies = useSelector(state => state.vacancies)

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
      <BoardContainer>
        {vacancies.map((vacancy, index) => (
          <VacancyItem key={index.toString()} data={vacancy} />
        ))}
      </BoardContainer>
    </Fragment>
  )
}

const BoardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin: 70px 40px 0px 40px;
  padding-bottom: 20px;
  border-radius: 12px;
  background: #23283b;
`

export default Scoreboard
