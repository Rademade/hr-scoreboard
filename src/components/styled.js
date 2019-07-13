import styled from "styled-components";

// base
export const Container = styled.div`
  display: inline-block;
  padding: 20px;
  width: 100%;
`;

export const Text = styled.p`
  margin: 0;
`;

// placeholder
export const PlaceholderView = styled.div`
  display: inline-block;
  text-align: center;
  padding: 120px 0px;
  border: 1px solid red;
`;

export const LoadingText = styled.h2`
  color: green;
`;

export const ErrorText = styled(Text)`
  margin: 10px 0px;
`;

// item
export const ItemContainer = styled.div`
  border: 2px solid red;
  padding: 10px;
  width: 300px;
  margin-right: 20px;
`;

export const StatusContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
