import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GreyText, AppText } from "../common"

const Information = ({ title, text }) => (
  <InfoBox>
    <GreyText>{title}</GreyText>
    <InfoText>{text}</InfoText>
  </InfoBox>
)

Information.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const InfoBox = styled.div`
  flex: 1;
  padding-top: 21px;
`

const InfoText = styled(AppText)`
  font-size: 18px;
  line-height: 18px;
  margin-top: 7px;
`

export default Information
