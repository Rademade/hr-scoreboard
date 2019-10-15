import React, { Fragment } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import LaunchPlaceholder from "./LaunchPlaceholder"
import Header from "./Header"
import BoardItem from "./BoardItem"

const Scoreboard = () => {
  const items = [{ name: "Julia Ruden" }, { name: "Kate Vakulenko" }]
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)

  if (isFirstLaunch) {
    return <LaunchPlaceholder />
  }

  return (
    <Fragment>
      <Header />
      <BoardContainer>
        {items.map((item, index) => (
          <BoardItem title={item.name} key={index.toString()} />
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
