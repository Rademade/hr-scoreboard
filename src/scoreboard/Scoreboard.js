import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import LaunchPlaceholder from "./LaunchPlaceholder"
import Header from "./Header"

const Scoreboard = () => {
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)

  if (isFirstLaunch) {
    return <LaunchPlaceholder />
  }

  return (
    <Container>
      <Header />
    </Container>
  )
}

const Container = styled.div`
  padding: 30px;
`

export default Scoreboard
