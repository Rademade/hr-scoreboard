import React, { useContext } from "react";
import { AppStateContext } from "../App";
import Vacancy from "./Vacancy";
import {
  RootContainer,
  StyledTitle,
  LaunchContainer
} from "./styledComponents";
import Error from "./Error";

const Scoreboard = () => (
  <Wrapper>
    {({ appInitialize, items, error }) => {
      if (!appInitialize) {
        return (
          <LaunchContainer>
            <StyledTitle>HR Scoreboard</StyledTitle>
          </LaunchContainer>
        );
      }

      if (appInitialize && error) {
        return <Error error={error} />;
      }

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
