import React from "react"
import { useSelector } from "react-redux"
import VacancyItem from "./VacancyItem"
import { ListContainer } from "./components"

const VacancyList = () => {
  const vacancies = useSelector(state => state.vacancies)
  return (
    <ListContainer>
      {vacancies.map((vacancy, index) => (
        <VacancyItem key={index} data={vacancy} />
      ))}
    </ListContainer>
  )
}

export default VacancyList
