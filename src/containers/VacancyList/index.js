import React from "react"
import { useSelector } from "react-redux"
import VacancyItem from "./VacancyItem"
import { ListContainer } from "./styledComponents"

const VacancyList = () => {
  const vacancies = useSelector(state => state.vacancies)
  return (
    <ListContainer>
      {vacancies.map((vacancy, index) => (
        <VacancyItem key={index.toString()} data={vacancy} />
      ))}
    </ListContainer>
  )
}

export default VacancyList
