import React, { Fragment } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import LaunchPlaceholder from "../components/LaunchPlaceholder"
import Header from "./Header"
import Board from "./Board"

const Scoreboard = () => {
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)
  const users = useSelector(state => state.mockUsers)

  if (isFirstLaunch) {
    return <LaunchPlaceholder />
  }

  return (
    <Fragment>
      <Header />
      <BoardContainer>
        {users.map((item, index) => (
          <Board title={item.name} key={index.toString()} />
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
