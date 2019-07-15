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

// board
export const SboardView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemView = styled.div`
  width: 300px;
  margin: 20px;
  border: solid 2px green;
`;

export const ItemTitle = styled.h4`
  margin: 0;
  padding: 10px;
  text-align: center;
  border-bottom: solid 2px green;
`;

export const ItemText = styled.h5`
  margin: 0;
`;

export const StatusView = styled.div`
  text-align: left;
  padding: 10px;
`;

export const ResponsiblesView = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
`;

export const PersonView = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0px 5px;
  background-color: lightgray;
  border-radius: 3px;
`;

export const Letters = styled(Text)`
  line-height: 40px;
`;
