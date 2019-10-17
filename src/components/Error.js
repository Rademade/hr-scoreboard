import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import errorImage from "../assets/images/error.png"

const Error = ({ message }) => (
  <Container>
    <img src={errorImage} alt="error" width="200" height="200" />
    <ErrorText>{message}</ErrorText>
  </Container>
)

Error.propTypes = {
  message: PropTypes.string.isRequired
}

const Container = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 40px;
`

const ErrorText = styled.h2`
  margin: 0;
  color: #ecf0f1;
  margin-top: 20px;
`

export default Error
