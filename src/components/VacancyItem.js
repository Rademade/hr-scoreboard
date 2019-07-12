import React from "react";
import { ItemContainer } from "./styled";

function VacancyItem({ item }) {
  // console.log("VacancyItem", item);
  return (
    <ItemContainer>
      <p>{item.position}</p>
      <Status status={item.status} />
    </ItemContainer>
  );
}

//TODO: hide vacation if status canceled or completed
const Status = ({ status }) => {
  switch (status) {
    case "open":
      return <p>New</p>;
    case "expects":
      return <p>On hold</p>;
    case "inwork":
      return <p>In Progress</p>;
    case "payment":
      return <p>Payment</p>;
    case "replacement":
      return <p>Replacement</p>;
    case "recommendation":
      return <p>Recomendation</p>;
    default:
      return <p>NoStatus</p>;
  }
};

export default VacancyItem;
