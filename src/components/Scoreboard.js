import React, { useContext } from "react";
import { AppStateContext } from "../App";
import Vacancy from "./Vacancy";
import { RootContainer, StyledTitle } from "./styledComponents";

const Scoreboard = () => (
  <Wrapper>
    {({ appInitialize, items, error }) => {
      if (!appInitialize) return <StyledTitle>Loading...</StyledTitle>;

      if (appInitialize && error) return <p>{error}</p>;

      return items.map((item, index) => (
        <Vacancy {...item} index={index} key={item.position} />
      ));
    }}
  </Wrapper>
);

const Wrapper = ({ children }) => {
  const state = useContext(AppStateContext);
  return <RootContainer>{children(state)}</RootContainer>;
};

export default Scoreboard;
