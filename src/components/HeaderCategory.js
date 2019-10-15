import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"

const HeaderCategories = ({ value, title }) => (
  <Container>
    <ValueContainer>
      <ValueText>{value}</ValueText>
    </ValueContainer>
    <TitileText>{title}</TitileText>
  </Container>
)

HeaderCategories.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
`

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c4140;
  border-radius: 12px;
  height: 94px;
  width: 94px;
`

const TitileText = styled(Text)`
  font-weight: bold;
  color: #1ec882;
  font-size: 18px;
  margin-top: 10px;
`

const ValueText = styled(Text)`
  font-weight: bold;
  color: #1ec882;
  font-size: 32px;
`

export default HeaderCategories
