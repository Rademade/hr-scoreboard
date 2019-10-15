import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"

const Category = ({ value, title }) => (
  <Container>
    <ValueText>{value}</ValueText>
    <TitleText>{title}</TitleText>
  </Container>
)

Category.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

const Container = styled.div`
  height: 90px;
  width: 90px;
  margin-left: 20px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #393e4f;
`

const TitleText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #636b8b;
  margin-top: 10px;
`

const ValueText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 22px;
`

export default Category
