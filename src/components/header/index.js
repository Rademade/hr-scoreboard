import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { AppText, FlexContainer } from "../common"
import Statistic from "./Statistic"

const Header = () => {
  const { startDate, endDate } = useSelector(state => state.datesRange)
  const dateFormat = "MM.D.YYYY"
  const rangeString = `${startDate.format(dateFormat)} — ${endDate.format(
    dateFormat
  )}`
  return (
    <FlexContainer>
      <TitleBox>
        <TitleText>Recruitment statistics</TitleText>
        <DateText>{rangeString}</DateText>
      </TitleBox>
      <Statistic />
    </FlexContainer>
  )
}

const TitleBox = styled.div`
  flex: 1;
`

const TitleText = styled(AppText)`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.2px;
`

const DateText = styled(AppText)`
  font-size: 38px;
  font-weight: lighter;
  color: #636b8b;
`

export default Header
