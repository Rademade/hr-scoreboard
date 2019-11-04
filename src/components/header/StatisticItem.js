import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { AppText, FlexContainer } from "../common"

const StatisticItem = ({ value, title }) => (
  <Container>
    <ValueContainer>
      <ValueText>{value}</ValueText>
    </ValueContainer>
    <TitileText>{title}</TitileText>
  </Container>
)

StatisticItem.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

const Container = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
`

const ValueContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  background: #1c4140;
  border-radius: 12px;
  height: 80px;
  width: 80px;
`

const TitileText = styled(AppText)`
  font-weight: bold;
  color: #1ec882;
  font-size: 14px;
  line-height: 14px;
  margin-top: 10px;
  text-transform: uppercase;
`

const ValueText = styled(AppText)`
  font-weight: bold;
  color: #1ec882;
  font-size: 32px;
`

export default StatisticItem
