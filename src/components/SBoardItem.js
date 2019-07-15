import React from "react";
import styled from "styled-components";
import Funnel from "./Funnel";

const ItemContainer = styled.div`
  width: 300px;
  margin: 20px;
  border: solid 2px green;
`;

const Title = styled.h4`
  margin: 0px;
  padding: 10px;
  text-align: center;
  border-bottom: solid 2px green;
`;

const InfoContainer = styled.div`
  padding: 10px;
`;

const PersonName = styled.p`
  color: grey;
  margin: 5px 0px;
`;

function BoardItem({ data }) {
  const {
    position,
    status,
    responsiblesPerson,
    vacancyInterviewDetalInfo
  } = data;

  if (!(status === "inwork" || status === "open")) {
    return null;
  }

  return (
    <ItemContainer>
      <Title>{position}</Title>
      <InfoContainer>
        <h5 style={{ margin: "0px" }}>Responsibles</h5>
        {responsiblesPerson.map(({ responsible, personId, type }) => {
          if (type !== "recruiter") return null;
          return <PersonName key={personId}>{responsible.fullName}</PersonName>;
        })}
      </InfoContainer>
      <Funnel details={vacancyInterviewDetalInfo} />
    </ItemContainer>
  );
}

export default BoardItem;
