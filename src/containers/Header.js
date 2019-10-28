import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Text from "../components/Text"
import HeaderState from "../components/HeaderState"
import { getStateName } from "../helpers/constants"

const Header = () => {
  const categories = [
    "longlist",
    "e025c9f3fbf14cfb9c47cb09ec34adc3",
    "interview",
    "sent_offer"
  ]
  const { startDate, endDate } = useSelector(state => state.datesRange)
  const dateFormat = "MM.D.YYYY"
  const rangeString = `${startDate.format(dateFormat)} — ${endDate.format(
    dateFormat
  )}`
  const customStates = useSelector(state => state.customStates)
  const generalStatistic = useSelector(state => state.generalStatistic)
  return (
    <HeaderContainer>
      <InfoContainer>
        <Title>Recruitment statistics</Title>
        <DateString>{rangeString}</DateString>
      </InfoContainer>
      {categories.map((state, index) => {
        const value = generalStatistic[state]
        const customState = customStates[state]
        const title = customState ? customState.name : getStateName(state)
        return <HeaderState key={index} title={title} value={value} />
      })}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  padding: 30px 60px 0px 60px;
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled(Text)`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.2px;
`

const DateString = styled(Text)`
  font-size: 38px;
  font-weight: lighter;
  color: #636b8b;
`

export default Header
