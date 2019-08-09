import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StatsInfo = ({ detailedInfo }) => (
  <Container>
    <TitleRow>
      <StatView>
        <Text>State</Text>
      </StatView>
      <Item value={"Week"} />
      <Item value={"All"} />
    </TitleRow>
    <div>
      {detailedInfo.map(({ id, description, weekDetailInfo, detailInfo }) => (
        <Row key={id}>
          <Item isTitle value={description} />
          <Item value={weekDetailInfo.length} />
          <Item value={detailInfo.length} />
        </Row>
      ))}
    </div>
  </Container>
);

const Item = ({ value, isTitle }) => {
  const renderValue = () => <Text>{value}</Text>;

  return isTitle ? (
    <TitleView>{renderValue()}</TitleView>
  ) : (
    <ItemView>{renderValue()}</ItemView>
  );
};

StatsInfo.propTypes = {
  detailedInfo: PropTypes.array.isRequired
};

const Container = styled.div`
  margin-top: 5px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: dashed 1px #ecf0f1;
`;

const TitleRow = styled(Row)`
  padding-bottom: 4px;
  border-bottom: solid 1px #ecf0f1;
`;

const TitleView = styled.div`
  flex: 2;
  text-align: right;
  padding: 2px 0px;
`;

const StatView = styled.div`
  flex: 2;
  text-align: center;
  padding: 2px 0px;
`;

const ItemView = styled.div`
  flex: 1;
  text-align: center;
  padding: 2px 0px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  color: #ecf0f1;
`;

export default StatsInfo;
