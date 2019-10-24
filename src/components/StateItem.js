import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"

const StateItem = ({ count, weekCount, title }) => (
  <Container>
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
    <ValueItem count={count} />
    <ValueItem count={weekCount} />
  </Container>
)

const ValueItem = ({ count }) => (
  <ValueContainer>
    <ValueText>{count}</ValueText>
  </ValueContainer>
)

StateItem.propTypes = {
  count: PropTypes.number.isRequired,
  weekCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  width: 142px;
`

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 102px;
  width: 102px;
  margin-top: 20px;
  border-radius: 18px;
  border: 2px solid #393e4f;
`

const TitleContainer = styled.div`
  height: 48px;
`

const TitleText = styled(Text)`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: #636b8b;
`

const ValueText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`

export default StateItem
