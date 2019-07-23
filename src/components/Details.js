import React from "react";
import {
  CommonText,
  DetailsContainer,
  DetailsRow,
  StateView,
  MiddleView,
  RightView
} from "./styledComponents";

function Details({ detailedInfo }) {
  return (
    <DetailsContainer>
      <DetailsRow>
        <StateView>
          <CommonText>State</CommonText>
        </StateView>
        <MiddleView>
          <CommonText>Current week</CommonText>
        </MiddleView>
        <RightView>
          <CommonText>All time</CommonText>
        </RightView>
      </DetailsRow>
      {detailedInfo.map(({ id, description, weekDetailInfo, detailInfo }) => (
        <DetailsRow key={id}>
          <StateView>
            <CommonText>{description}</CommonText>
          </StateView>
          <MiddleView>
            <CommonText>{weekDetailInfo.length}</CommonText>
          </MiddleView>
          <RightView>
            <CommonText>{detailInfo.length}</CommonText>
          </RightView>
        </DetailsRow>
      ))}
    </DetailsContainer>
  );
}

export default Details;
