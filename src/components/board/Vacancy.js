import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Statistic from "./Statistic"

const Vacancy = ({ data }) => {
  const responsiblesNames = data.responsibles.map(item => item.name).join(", ")
  return (
    <Container>
      <Header
        position={data.position}
        responsibles={responsiblesNames}
        date={data.created}
      />
      <Statistic vacancyId={data.vacancyId} states={data.states} />
    </Container>
  )
}

const Container = styled.div`
  width: 570px;
  margin-left: 25px;
  margin-top: 25px;
  border-radius: 12px;
  background: #2a2f45;
  box-shadow: 0px 20px 68px rgba(0, 0, 0, 0.2);
`

export default Vacancy
