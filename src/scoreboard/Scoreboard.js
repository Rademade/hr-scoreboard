import React, { Fragment } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import LaunchPlaceholder from "../components/LaunchPlaceholder"
import Header from "./Header"
import RecruterBoard from "./RecruterBoard"
import Error from "../components/Error"

const Scoreboard = () => {
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)
  const error = useSelector(state => state.error)
  const recruters = useSelector(state => state.recruters)

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
        {recruters.map((recruter, index) => (
          <RecruterBoard title={recruter.fullName} key={index.toString()} />
        ))}
      </BoardContainer>
    </Fragment>
  )
}

const BoardContainer = styled.div`
  display: flex;
  padding: 70px 38px 0px 38px;
`

export default Scoreboard
