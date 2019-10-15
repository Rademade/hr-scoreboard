import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Text from "./Text"

const VacancyItem = ({ title }) => (
  <Container>
    <TitleContainer>
      <Text>{title}</Text>
    </TitleContainer>
  </Container>
)

VacancyItem.propTypes = {
  title: PropTypes.string
}

const Container = styled.div`
  padding: 24px 32px 20px 32px;
  margin-bottom: 32px;
  background: #2a2f45;
  border-radius: 12px;
`

const TitleContainer = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #353b53;
`

export default VacancyItem
