import React from "react";
import {
  SboardView,
  PlaceholderView,
  LoadingTitle,
  NoItemsTitle,
  ErrorText
} from "../components/styled";
import { useSboardState } from "./state";
import SBoardItem from "./SBoardItem";

function SBoardView() {
  const state = useSboardState();
  const { isLoading, isLoggedIn, vacancies, itemsWithStats, error } = state;
  console.log("render", state);

  if (error) {
    return (
      <PlaceholderView>
        <ErrorText>{`Something goes wrong...`}</ErrorText>
        <ErrorText>{`Error: ${error}`}</ErrorText>
      </PlaceholderView>
    );
  }

  if (isLoading || !isLoggedIn) {
    return (
      <PlaceholderView>
        <LoadingTitle>Loading vacancies...</LoadingTitle>
      </PlaceholderView>
    );
  }

  if (vacancies.length < 1) {
    return (
      <PlaceholderView>
        <NoItemsTitle>No vacancies...</NoItemsTitle>
      </PlaceholderView>
    );
  }

  return (
    <SboardView>
      {itemsWithStats.map(item => (
        <SBoardItem key={item.position} item={item} />
      ))}
    </SboardView>
  );
}

export default SBoardView;
