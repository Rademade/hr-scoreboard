import React, { useEffect, useState } from "react";
import {
  SboardView,
  PlaceholderView,
  LoadingTitle,
  NoItemsTitle,
  ErrorText
} from "../components/styled";
import BoardItem from "./BoardItem";

function ScoreboardView({ isLoading, error, items, logIn, getVacansies }) {
  if (error) {
    return (
      <PlaceholderView>
        <ErrorText>{`Something goes wrong...`}</ErrorText>
        <ErrorText>{`Error: ${error}`}</ErrorText>
      </PlaceholderView>
    );
  }

  if (isLoading) {
    return (
      <PlaceholderView>
        <LoadingTitle>Loading vacancies...</LoadingTitle>
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

export default ScoreboardView;
