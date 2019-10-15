import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { Text } from "../components/styled"
import StatItem from "./StatsItem"

const Header = () => {
  const list = [{ title: "Long-List", value: 213 }, { title: "Calling", value: 13 }, { title: "Interview", value: 3 }, { title: "Offer", value: 1 }]
  const startDate = useSelector(state => state.startDate)
  const endDate = useSelector(state => state.endDate)
  const dateFormat = "MM.D.YYYY"
  const rangeString = `${startDate.format(dateFormat)} — ${endDate.format(dateFormat)}`
  return (
    <Container>
      <InfoContainer>
        <Title>Recruitment statistics</Title>
        <DateString>{rangeString}</DateString>
      </InfoContainer>
      {list.map((item, index) => (
        <StatItem key={index.toString()} title={item.title} value={item.value} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const InfoContainer = styled.div`
  flex: 1;
`

const Title = styled(Text)`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #ffffff;
`

const DateString = styled(Text)`
  font-size: 38px;
  font-weight: lighter;
  color: #636b8b;
  margin-top: 20px;
`

export default Header
