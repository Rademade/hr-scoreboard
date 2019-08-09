import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from "../App";
import errorImage from "./error.png";
import Vacancy from "./Vacancy";

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
        return (
          <LaunchContainer>
            <img src={errorImage} alt="error" width="200" height="200" />
            <ErrorTitle>{error}</ErrorTitle>
          </LaunchContainer>
        );
      }

      return items.map((item, index) => (
        <Vacancy {...item} key={item.position} hlight={(index + 1) % 2 === 0} />
      ));
    }}
  </Wrapper>
);

const Wrapper = ({ children }) => {
  const state = useContext(AppStateContext);
  return <RootContainer>{children(state)}</RootContainer>;
};

const RootContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const LaunchContainer = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 40px;
`;

const StyledTitle = styled.h1`
  color: green;
  font-size: 62px;
`;

const ErrorTitle = styled.h2`
  margin: 0;
  color: #ecf0f1;
  margin-top: 20px;
`;

export default Scoreboard;
