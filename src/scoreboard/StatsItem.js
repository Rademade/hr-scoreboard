import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Text } from "../components/styled"

const StatItem = ({ value, title }) => (
  <Container>
    <ValueContainer>
      <ValueText>{value}</ValueText>
    </ValueContainer>
    <TitileText>{title}</TitileText>
  </Container>
)

StatItem.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1C4140;
  border-radius: 12px;
  height: 94px;
  width: 94px;
`

const TitileText = styled(Text)`
  color: #1EC882;
  font-size: 18px;
  margin-top: 10px;
`

const ValueText = styled(Text)`
  color: #1EC882;
  font-size: 32px;
  opacity: 1;
` 

export default StatItem