import React from "react";
import {
  VacancyContainer,
  VacancyTitle,
  InfoContainer,
  PersonText,
  SmallTitle,
  RowContainer,
  DefaultText,
  CreatedTitle,
  ClientTitle
} from "./styledComponents";
// import Funnel from "./Funnel";

function Vacancy(props) {
  console.log("Vacancy", props);
  const { status, position, index, responsiblesPerson, dc, clientId } = props;
  const creationDate = new Date(dc);

  if (!(status === "inwork" || status === "open")) {
    return null;
  }

  return (
    <VacancyContainer index={index}>
      <VacancyTitle>{position}</VacancyTitle>
      <InfoContainer>
        <RowContainer>
          <CreatedTitle>Created:</CreatedTitle>
          <DefaultText>{creationDate.toLocaleDateString("en-US")}</DefaultText>
        </RowContainer>
        <RowContainer>
          <ClientTitle>Client:</ClientTitle>
          <DefaultText>{clientId.name}</DefaultText>
        </RowContainer>
        <SmallTitle>Responsibles</SmallTitle>
        {responsiblesPerson.map(({ personId, responsible, type }) => {
          if (type !== "recruiter") return null;
          return <PersonText key={personId}>{responsible.fullName}</PersonText>;
        })}
      </InfoContainer>
    </VacancyContainer>
  );
}

export default Vacancy;
