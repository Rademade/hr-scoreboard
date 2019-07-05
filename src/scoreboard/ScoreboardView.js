import React, { useEffect } from "react";
import { Container } from "../components/styled";
import VacancyItem from "../components/VacancyItem";

function Scoreboard(props) {
  const { getVacansies, logIn } = props;
  useEffect(() => {
    logIn();
    getVacansies();
  }, [getVacansies, logIn]);

  return (
    <Container>
      <VacancyItem />
    </Container>
  );
}

export default Scoreboard;
