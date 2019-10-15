import React from "react"
import styled from "styled-components"

const LaunchPlaceholder = () => (
  <Container>
    <Title>HR Scoreboard</Title>
  </Container>
)

const Container = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 40px;
`

const Title = styled.h1`
  color: #1ec882;
  font-size: 62px;
`

export default LaunchPlaceholder
