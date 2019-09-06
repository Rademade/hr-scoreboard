import React from "react"
import moment from "moment"
import styled from "styled-components"
import PositionInfo from "./PositionInfo"
import StatsInfo from "./StatsInfo"

const Vacancy = ({
  status,
  position,
  responsiblesPerson,
  dc,
  clientId,
  detailedInfo,
  hlight
}) => {
  const creationDate = moment(dc).format("MMMM Do YYYY")

  if (!(status === "inwork" || status === "open")) {
    return null
  }

  return (
    <Container>
      <Content hlight={false}>
        <PositionInfo
          position={position}
          creationDate={creationDate}
          name={clientId.name}
          responsiblesPerson={responsiblesPerson}
        />
        <StatsInfo detailedInfo={detailedInfo} />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 25%;
`

const Content = styled.div`
  padding: 5px 5px;
  background: ${({ hlight }) => (hlight ? "#2b3a4a" : null)};
`

export default Vacancy
