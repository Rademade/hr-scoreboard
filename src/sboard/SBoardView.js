import React from "react";
import {
  SboardView,
  PlaceholderView,
  LoadingTitle,
  NoItemsTitle,
  ErrorText
} from "../components/styled";
import BoardItem from "./BoardItem";
import { useLoginFetch } from "./AuthState";
import { useDataFetch } from "./DataState";

function Wrapper({ children }) {
  const [{ user, authLoading, authError }] = useLoginFetch();
  const [{ items, dataLoading, dataError }] = useDataFetch();
  const isLoading = authLoading || dataLoading;
  const error = authError || dataError;
  return children({
    user,
    items,
    isLoading,
    error
  });
}

function SBoardView() {
  return (
    <Wrapper>
      {({ items, isLoading, error }) => {
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
      }}
    </Wrapper>
  );
}

export default SBoardView;
