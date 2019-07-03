import React, { useEffect } from "react";
import { Container, Title } from "../components/styled";

function Scoreboard({ initializePage, isInitialize, value }) {
  console.log("Scoreboard", isInitialize, value);

  useEffect(() => {
    initializePage(665);
  }, [initializePage]);

  return (
    <Container>
      <Title>Scoreboard</Title>
    </Container>
  );
}

export default Scoreboard;
