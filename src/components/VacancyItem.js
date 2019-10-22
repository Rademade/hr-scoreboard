import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"
import { ReactComponent as FireLogo } from "../assets/images/fire.svg"

const VacancyItem = ({ data }) => {
  const { position, created, statistics } = data
  return (
    <Container>
      <TitleContainer>
        <PositionText>{position}</PositionText>
        <FireLogo />
      </TitleContainer>
      <PeriodContainer>
        <GreyText>Created</GreyText>
        <ValueText>{created.format("MM.D.YYYY")}</ValueText>
      </PeriodContainer>
      <StatsContainer>
        {statistics.map((item, index) => (
          <CategoryContainer key={index.toString()} noBorder={false}>
            <ValueText>{item.count}</ValueText>
            <GreyText>{item.name}</GreyText>
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
`

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  border-right: ${props => (props.noBorder ? null : "1px solid #353b53")};
`

const PeriodContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid #353b53;
`

const StatsContainer = styled.div`
  display: flex;
  padding-top: 16px;
  height: 59px;
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
