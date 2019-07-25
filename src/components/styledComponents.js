import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LaunchContainer = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 40px;
`;

export const VacancyContainer = styled.div`
  flex: 1;
  border-bottom: solid 1px #ecf0f1;
  border-right: ${({ index }) =>
    (index === 0 || index % 2 === 0) && "solid 1px #ecf0f1"};
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding: 20px 0px;
`;

export const InfoContainer = styled.div`
  border-top: solid 1px #ecf0f1;
  padding: 10px 10px 0px 10px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 10px 0px;
`;

export const PersonContainer = styled.div`
  padding: 10px 5px;
  flex: 1;
`;

export const DetailsContainer = styled.div`
  border-top: solid 1px #ecf0f1;
  padding-bottom: 20px;
`;

export const DetailsRow = styled.div`
  border-bottom: dashed 1px #ecf0f1;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const StateView = styled.div`
  width: 40%;
  text-align: center;
`;

export const MiddleView = styled.div`
  padding: 0px 0px;
`;

export const RightView = styled.div`
  width: 30%;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  color: green;
  font-size: 62px;
`;

export const ErrorTitle = styled.h2`
  margin: 0;
  color: #ecf0f1;
  margin-top: 20px;
`;

export const VacancyTitle = styled.h1`
  margin: 0px;
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

export const ResponsibleTitle = styled.h3`
  margin: 0px 0px 10px 5px;
  color: rgb(241, 195, 15);
`;

export const CommonText = styled.p`
  margin: 0px;
  color: #ecf0f1;
  font-size: 18px;
`;

export const ValueText = styled(CommonText)`
  margin: 0px 0px 0px 5px;
`;
