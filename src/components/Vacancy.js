import React from "react";
import moment from "moment";
import {
  VacancyContainer,
  TitleContainer,
  VacancyTitle,
  InfoContainer,
  RowContainer,
  PersonContainer,
  CreatedTitle,
  ClientTitle,
  ResponsibleTitle,
  ValueText
} from "./styledComponents";
import Details from "./Details";

function Vacancy({
  status,
  position,
  index,
  responsiblesPerson,
  dc,
  clientId,
  detailedInfo
}) {
  const creationDate = moment(dc).format("MMMM Do YYYY");

  if (!(status === "inwork" || status === "open")) {
    return null;
  }

  // return (
  //   <div style={{ border: "solid 1px white" }}>
  //     <h4>{position}</h4>
  //   </div>
  // );

  return (
    <VacancyContainer index={index}>
      <TitleContainer>
        <VacancyTitle>{position}</VacancyTitle>
      </TitleContainer>
      <InfoContainer>
        <RowContainer>
          <CreatedTitle>Created:</CreatedTitle>
          <ValueText>{creationDate}</ValueText>
        </RowContainer>
        <RowContainer>
          <ClientTitle>Client:</ClientTitle>
          <ValueText>{clientId.name}</ValueText>
        </RowContainer>
      </InfoContainer>
      <PersonContainer>
        <ResponsibleTitle>Responsibles</ResponsibleTitle>
        <div style={{ display: "flex" }}>
          {responsiblesPerson
            .filter(({ type }) => type === "recruiter")
            .map(({ personId, responsible }, index, array) => {
              const comma =
                index < array.length - 1 && array.length > 1 ? "," : "";
              return (
                <ValueText key={personId}>
                  {responsible.fullName + comma}
                </ValueText>
              );
            })}
        </div>
      </PersonContainer>
      <Details detailedInfo={detailedInfo} />
    </VacancyContainer>
  );
}

export default Vacancy;
