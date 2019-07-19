import styled from "styled-components";

export const Title = styled.h1`
  margin: 0px;
`;

export const Text = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const RootContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTitle = styled(Title)`
  color: green;
  margin-top: 100px;
  align-self: center;
`;

export const VacancyContainer = styled.div`
  border-bottom: solid 1px #ecf0f1;
  border-right: ${({ index }) =>
    (index === 0 || index % 2 === 0) && "solid 1px #ecf0f1"};
  flex: 1;
`;

export const VacancyTitle = styled.h1`
  text-align: center;
  color: #ecf0f1;
`;

export const InfoContainer = styled.div`
  padding: 20px;
  border-top: solid 1px #ecf0f1;
`;

export const SmallTitle = styled.h3`
  margin: 0px 0px 5px 0px;
  color: rgb(226, 158, 87);
`;

export const PersonText = styled(Text)`
  margin: 0px 0px 5px 0px;
  color: #ecf0f1;
`;

export const RowContainer = styled.div`
  display: flex;
  padding: 5px 0px 5px 0px;
  margin-bottom: 20px;
  align-items: center;
`;

export const DefaultText = styled(Text)`
  margin: 2px 0px 0px 10px;
  color: #ecf0f1;
`;

export const CreatedTitle = styled.h3`
  margin: 0px;
  color: rgb(196, 138, 220);
`;

export const ClientTitle = styled.h3`
  margin: 0px;
  color: rgb(52, 152, 219);
`;
