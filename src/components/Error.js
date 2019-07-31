import React from "react";
import errorImage from "./error.png";
import { LaunchContainer, ErrorTitle } from "./styledComponents";

function Error({ error }) {
  return (
    <LaunchContainer>
      <img src={errorImage} alt="error" width="200" height="200" />
      <ErrorTitle>{error}</ErrorTitle>
    </LaunchContainer>
  );
}

export default Error;
