import React, { useEffect } from "react";
import { Container, Title } from "../components/styled";

function Scoreboard({ getVacansies, isLoading, data, error }) {
  console.log("Scoreboard render", isLoading, data, error);

  useEffect(() => {
    getVacansies();
  }, [getVacansies]);

  return (
    <Container>
      <Title>Scoreboard</Title>
    </Container>
  );
}

export default Scoreboard;
