import React from "react";
import {
  ItemView,
  StatusView,
  ItemTitle,
  ItemText
} from "../components/styled";
import { getStatusString } from "../utils";

function BoardItem({ data }) {
  console.log("data", data);
  const { position, status, responsiblesPerson } = data;
  return (
    <ItemView>
      <ItemTitle>{position}</ItemTitle>
      <StatusView>
        <ItemText>{getStatusString(status)}</ItemText>
        {responsiblesPerson.map(({ responsible, personId }) => {
          return <p key={personId}>{responsible.fullName}</p>;
        })}
      </StatusView>
    </ItemView>
  );
}

export default BoardItem;
