import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "../../components/Text"
import { GreyText, MainText } from "./styledComponents"
import StatisticRow from "./StatisticRow"
import { getStateName } from "../../helpers/constants"

const VacancyItem = ({ data }) => {
  const { position, created, vacancyId, states } = data
  const statistic = useSelector(state => state.statistic[vacancyId])
  const weekStatistic = useSelector(state => state.weekStatistic[vacancyId])
  const customStates = useSelector(state => state.customStates)
  return (
    <Container>
      <Header>
        <Position>
          <PositionText>{position}</PositionText>
        </Position>
        <Info>
          <Responsibles>
            <GreyText>Responsibles</GreyText>
            <InfoText>JuliaRuden, Kate Vakulenko</InfoText>
          </Responsibles>
          <Created>
            <GreyText>Created</GreyText>
            <InfoText>{created.format("MM.D.YYYY")}</InfoText>
          </Created>
        </Info>
      </Header>
      <Statistic>
        <StatisticRow isHeader values={["scale", "week", "all"]} />
        {states.map((state, index) => {
          const count = statistic[state]
          const weekCount = weekStatistic[state]
          const customState = customStates[state]
          const title = customState ? customState.name : getStateName(state)
          return (
            <StatisticWrapper key={index}>
              <StatisticRow values={[title, weekCount, count]} />
            </StatisticWrapper>
          )
        })}
      </Statistic>
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
  box-shadow: 0px 20px 68px rgba(0, 0, 0, 0.2);
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

const Info = styled.div`
  display: flex;
  padding-top: 20px;
`

const Responsibles = styled.div`
  flex: 2;
`

const Created = styled.div`
  flex: 1;
`

const Statistic = styled.div`
  padding: 30px 30px 30px 30px;
`

const StatisticWrapper = styled.div`
  padding-top: 20px;
`

const PositionText = styled(Text)`
  font-size: 27px;
  font-weight: bold;
`

const InfoText = styled(MainText)`
  margin-top: 10px;
`

export default VacancyItem
