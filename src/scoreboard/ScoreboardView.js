import React, { useEffect } from "react";
import { Container, Title } from "../components/styled";

function Scoreboard(props) {
  // console.log("Scoreboard render", props);
  const { getVacansies, logIn } = props;
  useEffect(() => {
    logIn();
    getVacansies();
  }, [getVacansies, logIn]);

  return (
    <Container>
      <Title>Scoreboard</Title>
    </Container>
  );
}

export default Scoreboard;
