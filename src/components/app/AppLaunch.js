import React from "react"
import styled from "styled-components"
import { AppText } from "../common"

const AppLaunch = () => (
  <Container>
    <Title>HR Scoreboard</Title>
  </Container>
)

const Container = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 40px;
`

const Title = styled(AppText)`
  font-weight: bold;
  color: #1ec882;
  font-size: 62px;
`

export default AppLaunch
