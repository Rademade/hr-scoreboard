import React, { Fragment } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { Container } from "../components/styled"
import LaunchPlaceholder from "./LaunchPlaceholder"
import Header from "./Header"
import BoardItem from "./BoardItem"

const Scoreboard = () => {
  const items = [{ title: "first" }, { title: "second" }]
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)

  if (isFirstLaunch) {
    return <LaunchPlaceholder />
  }

  return (
    <Fragment>
      <Header />
      <BoardContainer>
        {items.map((item, index) => (
          <BoardItem title={item.title} key={index.toString()} />
        ))}
      </BoardContainer>
    </Fragment>
  )
}

const BoardContainer = styled(Container)`
  padding: 40px 38px 0px 38px;
`

export default Scoreboard
