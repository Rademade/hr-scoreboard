import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"

const StateItem = ({ count, weekCount, title }) => (
  <Container>
    <TitleText>{title}</TitleText>
    <ItemText>{count}</ItemText>
    <ItemText>{weekCount}</ItemText>
  </Container>
)

StateItem.propTypes = {
  count: PropTypes.number.isRequired,
  weekCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`

const TitleText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`

const ItemText = styled(Text)`
  font-weight: bold;
  margin-top: 20px;
  font-size: 16px;
`

export default StateItem
