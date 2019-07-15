import React from "react";
import { PersonView, Letters } from "./styled";
import { getUserLetters } from "../utils";

function PersonItem({ person }) {
  // console.log("PersonItem", person);
  return (
    <PersonView>
      <Letters>{getUserLetters(person.fullName)}</Letters>
    </PersonView>
  );
}

export default PersonItem;
