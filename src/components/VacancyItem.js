import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"
import { ReactComponent as FireLogo } from "../assets/images/fire.svg"
import { appendCategoriesWithInfo } from "../services/utils"

const VacancyItem = ({ data }) => {
  const { position, created, modified } = data
  const dateFormat = "MM.D.YYYY"
  const rangeString = `${created.format(dateFormat)} - ${modified.format(
    dateFormat
  )}`

  return (
    <Container>
      <TitleContainer>
        <PositionText>{position}</PositionText>
        <FireLogo />
      </TitleContainer>
      <StatsContainer>
        <PeriodContainer>
          <ValueText>{rangeString}</ValueText>
          <GreyText>Active period</GreyText>
        </PeriodContainer>
        {appendCategoriesWithInfo().map((item, index) => (
          <CategoryContainer key={index.toString()} noBorder={false}>
            <ValueText>{item.value}</ValueText>
            <GreyText>{item.title}</GreyText>
          </CategoryContainer>
        ))}
      </StatsContainer>
    </Container>
  )
}

VacancyItem.propTypes = {
  data: PropTypes.object.isRequired
}

const Container = styled.div`
  width: 30%;
  margin-left: 20px;
  margin-top: 20px;
  padding: 24px 32px 20px 32px;
  background: #2a2f45;
  border-radius: 12px;
  box-shadow: 0px 20px 68px rgba(0, 0, 0, 0.2);
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #353b53;
`

const StatsContainer = styled.div`
  display: flex;
  padding-top: 16px;
  height: 59px;
`

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 119px;
  border-right: ${props => (props.noBorder ? null : "1px solid #353b53")};
`

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

const PositionText = styled(Text)`
  font-size: 32px;
`

const ValueText = styled(Text)`
  font-size: 22px;
`

const GreyText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #636b8b;
`

export default VacancyItem
