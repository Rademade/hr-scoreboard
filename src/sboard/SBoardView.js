import React from "react";
import { useSboardState } from "./state";
import {
  SboardView,
  PlaceholderView,
  LoadingTitle,
  NoItemsTitle,
  ErrorText
} from "../components/styled";
import SBoardItem from "./SBoardItem";

function SBoardView() {
  const { isLoading, isLoggedIn, itemsWithStats, error } = useSboardState();
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

  if (itemsWithStats.length < 1) {
    return (
      <PlaceholderView>
        <NoItemsTitle>No vacancies...</NoItemsTitle>
      </PlaceholderView>
    );
  }

  return (
    <SboardView>
      {itemsWithStats.map(item => (
        <SBoardItem key={item.position} data={item} />
      ))}
    </SboardView>
  );
}

export default SBoardView;
