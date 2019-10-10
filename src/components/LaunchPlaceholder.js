import React from "react"
import styled from "styled-components"

const LaunchPlaceholder = () => (
  <LaunchContainer>
    <StyledTitle>HR Scoreboard</StyledTitle>
  </LaunchContainer>
)

const LaunchContainer = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 40px;
`

const StyledTitle = styled.h1`
  color: green;
  font-size: 62px;
`

export default LaunchPlaceholder
