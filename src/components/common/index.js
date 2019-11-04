import styled from "styled-components"

export const AppText = styled.p`
  @font-face {
    font-family: "SFProDisplay-Medium";
    src: local("SFProDisplay-Medium"),
      url(../assets/fonts/SFProDisplay-Medium.ttf) format("ttf");
  }
  margin: 0;
  font-size: 16px;
  color: #ffffff;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const GreyText = styled(AppText)`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #636b8b;
  text-transform: uppercase;
`
