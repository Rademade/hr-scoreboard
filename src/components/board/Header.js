import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { AppText, FlexContainer } from "../common"
import Information from "./Information"

const Header = ({ position, responsibles, date }) => {
  return (
    <HeaderBox>
      <TitleText>{position}</TitleText>
      <FlexContainer>
        <Information title={"responsibles"} text={responsibles} />
        <Information title={"created"} text={date.format("MM.D.YYYY")} />
      </FlexContainer>
    </HeaderBox>
  )
}

Header.propTypes = {
  position: PropTypes.string,
  responsibles: PropTypes.string
}

const HeaderBox = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 22px;
  box-shadow: 0px 20px 68px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`

const TitleText = styled(AppText)`
  font-size: 27px;
  line-height: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #373e57;
`

export default Header
