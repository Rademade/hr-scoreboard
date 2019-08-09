import React from "react";
import moment from "moment";
import styled from "styled-components";
import PositionInfo from "./PositionInfo";
import StatsInfo from "./StatsInfo";

const Vacancy = ({
  status,
  position,
  responsiblesPerson,
  dc,
  clientId,
  detailedInfo,
  isRight
}) => {
  const creationDate = moment(dc).format("MMMM Do YYYY");

  if (!(status === "inwork" || status === "open")) {
    return null;
  }

  return (
    <Container>
      <Content isRight={isRight}>
        <PositionInfo
          position={position}
          creationDate={creationDate}
          name={clientId.name}
          responsiblesPerson={responsiblesPerson}
        />
        <StatsInfo detailedInfo={detailedInfo} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
`;

const Content = styled.div`
  padding: 5px 10px 5px 10px;
  /* border-right: ${({ isRight }) => (!isRight ? "solid 1px #ecf0f1" : null)};
  border-bottom: solid 1px #ecf0f1; */
`;

export default Vacancy;
