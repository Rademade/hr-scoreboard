import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import StatisticRow from "./StatisticRow"
import { getStateName } from "../../helpers/constants"

const Statistic = ({ vacancyId, states }) => {
  const statistic = useSelector(state => state.statistic[vacancyId])
  const weekStatistic = useSelector(state => state.weekStatistic[vacancyId])
  const customStates = useSelector(state => state.customStates)
  return (
    <Container>
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
    </Container>
  )
}

Statistic.propTypes = {
  vacancyId: PropTypes.string,
  states: PropTypes.array
}

const Container = styled.div`
  padding: 30px;
`

const StatisticWrapper = styled.div`
  padding-top: 20px;
`

export default Statistic
