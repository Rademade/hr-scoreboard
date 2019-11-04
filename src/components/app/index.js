import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import AppLaunch from "./AppLaunch"
import Error from "./Error"
import Header from "../header"

const App = () => {
  const isFirstLaunch = useSelector(state => state.isFirstLaunch)
  const error = useSelector(state => state.error)

  if (isFirstLaunch) {
    return <AppLaunch />
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
    <Container>
      <Header />
    </Container>
  )
}

const Container = styled.div`
  padding-top: 38px;
  padding-left: 52px;
  padding-right: 52px;
`

export default App
