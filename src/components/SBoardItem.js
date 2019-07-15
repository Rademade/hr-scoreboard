import React from "react";
import {
  ItemView,
  StatusView,
  ItemTitle,
  ItemText,
  ResponsiblesView
} from "./styled";
import PersonItem from "./PersonItem";
import { getStatusString } from "../utils";

function BoardItem({ data }) {
  // console.log("BoardItem", data);
  const { position, status, responsiblesPerson } = data;
  return (
    <ItemView>
      <ItemTitle>{position}</ItemTitle>
      <StatusView>
        <ItemText>{getStatusString(status)}</ItemText>
      </StatusView>
      <ResponsiblesView>
        {responsiblesPerson.map(({ responsible, personId }) => {
          return <PersonItem key={personId} person={responsible} />;
        })}
      </ResponsiblesView>
    </ItemView>
  );
}

export default BoardItem;
