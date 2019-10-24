import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import VacancyItem from "./VacancyItem"

const VacancyList = () => {
  const vacancies = useSelector(state => state.vacancies)
  return (
    <BoardContainer>
      {vacancies.map((vacancy, index) => (
        <VacancyItem key={index.toString()} data={vacancy} />
      ))}
    </BoardContainer>
  )
}

const BoardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 20px;
  margin: 70px 40px 0px 40px;
  border-radius: 12px;
  background: #23283b;
`

export default VacancyList
