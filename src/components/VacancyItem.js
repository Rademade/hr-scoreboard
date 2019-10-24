import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"
import StateItem from "./StateItem"

const VacancyItem = ({ data }) => {
  const { position, created, vacancyId, states } = data
  const statistic = useSelector(state => state.statistic[vacancyId])
  const customStates = useSelector(state => state.customStates)
  return (
    <Container>
      <PositionText>{position}</PositionText>
      <DateContainer>
        <CreatedText>{created.format("MM.D.YYYY")}</CreatedText>
        <GreyText>Created</GreyText>
      </DateContainer>
      <StatsContainer>
        {states.map((state, index) => {
          const count = statistic[state]
          const customState = customStates[state]
          const title = customState ? customState.name : getStateName(state)
          return (
            <StateItem key={index.toString()} title={title} value={count} />
          )
        })}
      </StatsContainer>
    </Container>
  )
}

VacancyItem.propTypes = {
  data: PropTypes.object.isRequired
}

const getStateName = key => {
  switch (key) {
    case "longlist":
      return "Long list"
    case "interview":
      return "Interview"
    case "interview_with_the_boss":
      return "Interview with CEO"
    case "test_task":
      return "Test task"
    default:
      return "Name"
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px 20px 0px 20px;
  padding: 24px 32px 20px 32px;
  background: #2a2f45;
  border-radius: 12px;
  box-shadow: 0px 20px 68px rgba(0, 0, 0, 0.2);
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #353b53;
`

const StatsContainer = styled.div`
  display: flex;
  padding-top: 20px;
`

const PositionText = styled(Text)`
  font-size: 32px;
`

const GreyText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #636b8b;
`

const CreatedText = styled(Text)`
  font-size: 22px;
  margin-bottom: 10px;
`

// const StatText = styled(Text)`
//   font-size: 26px;
//   font-weight: bold;
//   margin-top: 32px;
// `

export default VacancyItem
