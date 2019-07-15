import React, { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from "../App";
import SBoardItem from "./SBoardItem";
import { Title } from "./commonStyled";

const Scoreboard = () => (
  <Wrapper>
    {({ appInitialize, items, error }) => {
      if (!appInitialize) return <StyledTitle>Loading...</StyledTitle>;

      if (appInitialize && error) return <p>error</p>;

      return items.map(item => <SBoardItem key={item.position} data={item} />);
    }}
  </Wrapper>
);

const Wrapper = ({ children }) => {
  const state = useContext(AppStateContext);
  return (
    <RootContainer isInit={state.appInitialize}>
      {children(state)}
    </RootContainer>
  );
};

const RootContainer = styled.div`
  display: ${({ isInit }) => isInit && "flex"};
  text-align: ${({ isInit }) => !isInit && "center"};
  flex-wrap: wrap;
  padding: 20px;
`;

const StyledTitle = styled(Title)`
  color: green;
  margin-top: 100px;
`;

export default Scoreboard;
