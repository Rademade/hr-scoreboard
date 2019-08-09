import React from "react";
import moment from "moment";
import styled from "styled-components";

function Vacancy({
  status,
  position,
  responsiblesPerson,
  dc,
  clientId,
  detailedInfo,
  isRight
}) {
  const creationDate = moment(dc).format("MMMM Do YYYY");

  if (!(status === "inwork" || status === "open")) {
    return null;
  }

  return (
    <Container>
      <Content isRight={isRight}>
        <Title>{position}</Title>
        <RawRow>
          <Created>Created:</Created>
          <ItemText>{creationDate}</ItemText>
        </RawRow>
        <Row>
          <Client>Client:</Client>
          <ItemText>{clientId.name}</ItemText>
        </Row>
        <View>
          <Responsibles>Responsibles</Responsibles>
          <RawRow>
            {responsiblesPerson
              .filter(({ type }) => type === "recruiter")
              .map(({ personId, responsible }, index, array) => {
                const comma =
                  index < array.length - 1 && array.length > 1 ? "," : "";
                return (
                  <Text key={personId}>{responsible.fullName + comma}</Text>
                );
              })}
          </RawRow>
        </View>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: 0 }}>State</p>
            <p style={{ margin: 0 }}>Current Week</p>
            <p style={{ margin: 0 }}>All</p>
          </div>
          <div>
            {detailedInfo.map(
              ({ id, description, weekDetailInfo, detailInfo }) => (
                <div
                  key={id}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ margin: 0 }}>{description}</p>
                  <p style={{ margin: 0 }}>{weekDetailInfo.length}</p>
                  <p style={{ margin: 0 }}>{detailInfo.length}</p>
                </div>
              )
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 25%;
`;

const Content = styled.div`
  padding: 5px 10px 5px 10px;
  /* border-right: ${({ isRight }) => (!isRight ? "solid 1px #ecf0f1" : null)};
  border-bottom: solid 1px #ecf0f1; */
`;

const View = styled.div`
  margin-top: 5px;
`;

const Title = styled.h2`
  margin: 0;
  color: #ecf0f1;
  height: 65px;
`;

const RawRow = styled.div`
  display: flex;
`;

const Row = styled(RawRow)`
  align-items: flex-end;
  margin-top: 5px;
`;

const Text = styled.p`
  margin: 0px;
  font-size: 18px;
  color: #ecf0f1;
`;

const ItemText = styled(Text)`
  margin-left: 5px;
`;

const Created = styled.h3`
  color: rgb(196, 138, 220);
  margin: 0px;
`;

const Client = styled.h3`
  color: rgb(52, 152, 219);
  margin: 0px;
`;

const Responsibles = styled.h3`
  color: rgb(241, 195, 15);
  margin: 0px;
`;

export default Vacancy;
