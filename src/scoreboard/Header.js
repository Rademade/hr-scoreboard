import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { Text } from "../components/styled"

const Header = () => {
  const startDate = useSelector(state => state.startDate)
  const endDate = useSelector(state => state.endDate)
  const dateFormat = "MM.D.YYYY"
  const rangeString = `${startDate.format(dateFormat)} — ${endDate.format(dateFormat)}`
  return (
    <Container>
      <Title>Recruitment statistics</Title>
      <DateString>{rangeString}</DateString>
    </Container>
  )
}

const Container = styled.div`
  border: solid 1px white;
`
const Title = styled(Text)`
  font-size: 38px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #ffffff;
`

const DateString = styled(Text)`
  font-size: 26px;
  font-weight: lighter;
  color: #636b8b;
`

export default Header
