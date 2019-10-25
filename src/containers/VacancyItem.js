import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "../components/Text"
import StateItem from "../components/StateItem"
import { getStateName } from "../helpers/constants"

// const statistic = useSelector(state => state.statistic[vacancyId])
// const weekStatistic = useSelector(state => state.weekStatistic[vacancyId])
// const customStates = useSelector(state => state.customStates)

// const count = statistic[state]
// const weekCount = weekStatistic[state]
// const customState = customStates[state]
// const title = customState ? customState.name : getStateName(state)

const VacancyItem = ({ data }) => {
  const { position, created, vacancyId, states } = data
  return (
    <Container>
      <Header>
        <Position>
          <PositionText>{position}</PositionText>
        </Position>
        <Credentials>
          <div>
            <GreyText>Responsibles</GreyText>
            <InfoText>JuliaRuden, Kate Vakulenko</InfoText>
          </div>
          <CreatedInfo>
            <GreyText>Created</GreyText>
            <InfoText>{created.format("MM.D.YYYY")}</InfoText>
          </CreatedInfo>
        </Credentials>
      </Header>
    </Container>
  )
}

VacancyItem.propTypes = {
  data: PropTypes.object.isRequired
}

const Container = styled.div`
  width: 570px;
  margin-left: 25px;
  margin-top: 25px;
  border-radius: 12px;
  background: #2a2f45;
  box-shadow: 0px 20px 68px #000000;
`

const Header = styled.div`
  background: #2f354d;
  border-radius: 12px;
  padding: 20px 0px 20px 30px;
`
const Position = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #373e57;
`

const Credentials = styled.div`
  display: flex;
  padding-top: 20px;
`

const CreatedInfo = styled.div`
  margin-left: 80px;
`

const PositionText = styled(Text)`
  font-size: 27px;
  font-weight: bold;
`

const GreyText = styled(Text)`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #636b8b;
`

const CommonText = styled(Text)`
  font-size: 18px;
  line-height: 18px;
`

const InfoText = styled(CommonText)`
  margin-top: 7px;
`

export default VacancyItem
