import React from "react"
import { useSelector } from "react-redux"
import { FlexContainer } from "../common"
import StatisticItem from "./StatisticItem"
import {
  statsCategories,
  hrCustomCategory,
  getStateName
} from "../../helpers/constants"

const Statistic = () => {
  const customStates = useSelector(state => state.customStates)
  const generalStatistic = useSelector(state => state.generalStatistic)
  return (
    <FlexContainer>
      {statsCategories.map((state, index) => {
        let value = generalStatistic[state]
        if (state === "interview") {
          const hrInterviewValue = generalStatistic[hrCustomCategory] || 0
          value += hrInterviewValue
        }
        const customState = customStates[state]
        const title = customState ? customState.name : getStateName(state)
        return <StatisticItem key={index} title={title} value={value} />
      })}
    </FlexContainer>
  )
}

export default Statistic
