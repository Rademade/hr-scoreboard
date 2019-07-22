import React from "react";
import {
  CommonText,
  DetailsContainer,
  DetailsRow,
  DescriptionContainer
} from "./styledComponents";

function Details({ detailedInfo }) {
  // console.log("DETAILS", detailedInfo);
  return (
    <DetailsContainer>
      {detailedInfo.map(({ id, description, detailInfo }) => (
        <DetailsRow key={id}>
          <DescriptionContainer>
            <CommonText>{description}</CommonText>
          </DescriptionContainer>
          <div style={{ paddingLeft: "10px" }}>
            <CommonText>{detailInfo.length}</CommonText>
          </div>
        </DetailsRow>
      ))}
    </DetailsContainer>
  );
}

export default Details;
