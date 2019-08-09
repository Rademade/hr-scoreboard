import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PositionInfo = ({ position, creationDate, name, responsiblesPerson }) => (
  <Fragment>
    <Title>{position}</Title>
    <RawRow>
      <Created>Created:</Created>
      <ItemText>{creationDate}</ItemText>
    </RawRow>
    <Row>
      <Client>Client:</Client>
      <ItemText>{name}</ItemText>
    </Row>
    <View>
      <Responsibles>Responsibles</Responsibles>
      <RawRow>
        {responsiblesPerson
          .filter(({ type }) => type === "recruiter")
          .map(({ personId, responsible }, index, array) => {
            const comma =
              index < array.length - 1 && array.length > 1 ? "," : "";
            return <Text key={personId}>{responsible.fullName + comma}</Text>;
          })}
      </RawRow>
    </View>
  </Fragment>
);

PositionInfo.propTypes = {
  position: PropTypes.string.isRequired,
  creationDate: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  responsiblesPerson: PropTypes.array.isRequired
};

const View = styled.div`
  margin-top: 5px;
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

const Title = styled.h2`
  margin: 0;
  color: #ecf0f1;
  height: 65px;
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

export default PositionInfo;
