import React, { useEffect } from "react";
import {
  Container,
  Text,
  PlaceholderView,
  LoadingText,
  ErrorText
} from "../components/styled";
import VacancyItem from "../components/VacancyItem";

const Wrapper = ({ children }) => <Container>{children()}</Container>;

function ScoreboardView({
  isLoading,
  isEmpty,
  error,
  items,
  logIn,
  getVacansies
}) {
  useEffect(() => {
    // logIn();
    getVacansies();
  }, [logIn, getVacansies]);

  return (
    <Wrapper>
      {() => {
        if (error) {
          return (
            <PlaceholderView>
              <ErrorText>{`Something goes wrong...`}</ErrorText>
              <ErrorText>{`Error: ${error}`}</ErrorText>
            </PlaceholderView>
          );
        }

        if (isLoading || items.length < 1) {
          return (
            <PlaceholderView>
              <LoadingText>Loading vacancies...</LoadingText>
            </PlaceholderView>
          );
        }

        if (isEmpty) {
          return (
            <PlaceholderView>
              <Text>No vacancies...</Text>
            </PlaceholderView>
          );
        }

        return items.map(item => <VacancyItem item={item} />);
      }}
    </Wrapper>
  );
}

export default ScoreboardView;
