import React, { Component } from "react";
import { PageContainer } from "../components/styled";
import Placeholder from "../components/Placeholder";
import VacancyItem from "../components/VacancyItem";

class Scoreboard extends Component {
  componentDidMount() {
    // this.doLogin();
    this.daVacanciesFetch();
  }

  componentDidUpdate(prevProps) {
    // console.log("componentDidUpdate", this.props);
    if (!prevProps.user && this.props.user) {
      this.daVacanciesFetch();
    }
  }

  doLogin = () => {
    this.props.logIn();
  };

  daVacanciesFetch = () => {
    this.props.getVacansies();
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
      <PageContainer>
        {items.map(item => (
          <VacancyItem key={item.vacancyId} item={item} />
        ))}
      </PageContainer>
    );
  }
}

export default Scoreboard;

// hr/stat/getVacancyInterviewDetalInfo

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
