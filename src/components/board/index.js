import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { FlexContainer } from "../common"
import Vacancy from "./Vacancy"

const Board = () => {
  const vacancies = useSelector(state => state.vacancies)
  return (
    <BoardContainer>
      {vacancies.map((vacancy, index) => (
        <Vacancy key={index} data={vacancy} />
      ))}
    </BoardContainer>
  )
}

export const BoardContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  padding-bottom: 25px;
  margin-top: 38px;
  border-radius: 12px;
  background: #23283b;
`

export default Board
