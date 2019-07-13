import React from "react";
import { ItemContainer, StatusContainer } from "./styled";

function VacancyItem({ item }) {
  // console.log("VacancyItem", item);

  if (item.status === "canceled" || item.status === "completed") {
    return null;
  }

  return (
    <ItemContainer>
      <h2>{item.position}</h2>
      <StatusContainer>
        <p>{`Status: ${getStatus(item.status)}`}</p>
        <p>{`Client: ${item.clientId.name}`}</p>
      </StatusContainer>
      {item.responsiblesPerson.map((person, index) => (
        <p key={index.toString()}>{person.responsible.fullName}</p>
      ))}
    </ItemContainer>
  );
}

function getStatus(status) {
  switch (status) {
    case "open":
      return "New";
    case "expects":
      return "On hold";
    case "inwork":
      return "In Progress";
    case "payment":
      return "Payment";
    case "replacement":
      return "Replacement";
    case "recommendation":
      return "Recomendation";
    default:
      return "NoStatus";
  }
}

export default VacancyItem;
