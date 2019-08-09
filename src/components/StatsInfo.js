import React from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";

const StatsInfo = ({ detailedInfo }) => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p style={{ margin: 0 }}>State</p>
      <p style={{ margin: 0 }}>Current Week</p>
      <p style={{ margin: 0 }}>All</p>
    </div>
    <div>
      {detailedInfo.map(({ id, description, weekDetailInfo, detailInfo }) => (
        <div
          key={id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p style={{ margin: 0 }}>{description}</p>
          <p style={{ margin: 0 }}>{weekDetailInfo.length}</p>
          <p style={{ margin: 0 }}>{detailInfo.length}</p>
        </div>
      ))}
    </div>
  </div>
);

StatsInfo.propTypes = {
  detailedInfo: PropTypes.array.isRequired
};

export default StatsInfo;
