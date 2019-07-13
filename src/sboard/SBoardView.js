import React from "react";
import {
  SboardView,
  PlaceholderView,
  LoadingTitle,
  NoItemsTitle,
  ErrorText
} from "../components/styled";
import { useVacancyState } from "./state";
import BoardItem from "./BoardItem";

function SBoardView() {
  const [{ isLoading, user, items, error }] = useVacancyState();

  if (isLoading || !user.isAuth) {
    return (
      <PlaceholderView>
        <LoadingTitle>Loading vacancies...</LoadingTitle>
      </PlaceholderView>
    );
  }

  if (error) {
    return (
      <PlaceholderView>
        <ErrorText>{`Something goes wrong...`}</ErrorText>
        <ErrorText>{`Error: ${error}`}</ErrorText>
      </PlaceholderView>
    );
  }

  if (items.length < 1) {
    return (
      <PlaceholderView>
        <NoItemsTitle>No vacancies...</NoItemsTitle>
      </PlaceholderView>
    );
  }

  return (
    <SboardView>
      {items.map(item => (
        <BoardItem key={item.position} item={item} />
      ))}
    </SboardView>
  );
}

export default SBoardView;
