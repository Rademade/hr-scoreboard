import React from "react"
import styled from "styled-components"
import Text from "./Text"

const StatsHeader = () => (
  <Container>
    <Scale>
      <HeaderText>Scale</HeaderText>
    </Scale>
    <Date>
      <HeaderText>Week</HeaderText>
    </Date>
    <Date>
      <HeaderText>All</HeaderText>
    </Date>
  </Container>
)

const Container = styled.div`
  display: flex;
`

const Scale = styled.div`
  flex: 2;
`

const Date = styled.div`
  flex: 1;
`

const HeaderText = styled(Text)`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #636b8b;
  text-transform: uppercase;
`

export default StatsHeader
