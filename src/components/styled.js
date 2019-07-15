import styled from "styled-components";

// base
export const Text = styled.p`
  margin: 0;
`;

export const Title = styled.h2`
  margin: 0;
`;

// placeholder
export const PlaceholderView = styled.div`
  text-align: center;
  padding: 120px 0px;
`;

export const LoadingTitle = styled(Title)`
  color: green;
`;

export const NoItemsTitle = styled(Title)`
  color: black;
`;

export const ErrorText = styled(Text)`
  margin: 10px 0px;
`;

export const SboardView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
