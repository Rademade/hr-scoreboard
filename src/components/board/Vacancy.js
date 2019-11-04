import React from "react"
import styled from "styled-components"
import { GreyText, AppText } from "../common"
import Header from "./Header"

const Vacancy = ({ data }) => {
  const responsiblesNames = data.responsibles.map(item => item.name).join(", ")
  return (
    <Container>
      <Header
        position={data.position}
        responsibles={responsiblesNames}
        date={data.created}
      />
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
