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

const Status = ({ status }) => {
  //TODO: status keys are unknown
  switch (status) {
    case "inwork":
      return <p>InWork</p>;
    default:
      return <p>NoStatus</p>;
  }
};

export default VacancyItem;
