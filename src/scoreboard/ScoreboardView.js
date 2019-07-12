import React, { Component } from "react";
import { Container } from "../components/styled";
import Placeholder from "../components/Placeholder";
import VacancyItem from "../components/VacancyItem";

class Scoreboard extends Component {
  componentDidMount() {
    this.doLogin();
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate", this.props);
    if (!prevProps.user && this.props.user) {
      this.daVacanciesFetch();
    }
  }

  doLogin = () => {
    this.props.logIn();
  };

  daVacanciesFetch = () => {
    const { getVacansies, user } = this.props;
    getVacansies(user.personId);
  };

  render() {
    const { isLoading, items, error } = this.props;

    if (error) {
      console.log("got error", error);
    }

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
}

export default Scoreboard;

// function Scoreboard({ items, error, isLoading, logIn, getVacansies }) {
//   useEffect(() => {
//     // logIn();
//     getVacansies();
//   }, [getVacansies, logIn]);

//   if (isLoading || items.length === 0) {
//     return <Placeholder />;
//   }

//   if (error) {
//     console.log("got error", error);
//   }

//   return (
//     <Container>
//       {items.map(item => (
//         <VacancyItem key={item.vacancyId} item={item} />
//       ))}
//     </Container>
//   );
// }
