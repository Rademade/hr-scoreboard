import React, { useEffect } from "react";
import { Container } from "../components/styled";
import Placeholder from "../components/Placeholder";
import VacancyItem from "../components/VacancyItem";

function Scoreboard({ items, error, isLoading, getVacansies }) {
  useEffect(() => {
    getVacansies();
  }, [getVacansies]);

  if (isLoading || items.length === 0) {
    return <Placeholder />;
  }

  return (
    <Container>
      {items.map(item => (
        <VacancyItem key={item.vacancyId} item={item} />
      ))}
    </Container>
  );
}

export default Scoreboard;
