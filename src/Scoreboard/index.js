import React from "./node_modules/react";
import { Container, Title } from "../components/styled";

function Scoreboard(props) {
  console.log("Scoreboard", props);
  return (
    <Container>
      <Title>Scoreboard</Title>
    </Container>
  );
}

export default Scoreboard;
