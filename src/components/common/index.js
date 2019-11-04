import styled from "styled-components"

export const AppText = styled.p`
  @font-face {
    font-family: "SFProDisplay-Medium";
    src: local("SFProDisplay-Medium"),
      url(../assets/fonts/SFProDisplay-Medium.ttf) format("ttf");
  }
  margin: 0;
  font-size: 28px;
  color: #ffffff;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;
  margin: 35px 40px 0px 40px;
  border-radius: 12px;
  background: #23283b;
`

export const GreyText = styled(Text)`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: #636b8b;
  text-transform: uppercase;
`

export const CommonText = styled(Text)`
  font-size: 18px;
  line-height: 18px;
`
