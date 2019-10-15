import React from "react"
import styled from "styled-components"
import { Container } from "../components/styled"
import { Text } from "../components/styled"

const BoardItem = props => {
  return (
    <ItemContainer>
      <HeaderContainer>
        <ImagePlaceholder />
        <NameText>Julia Ruden</NameText>
      </HeaderContainer>
    </ItemContainer>
  )
}

const ItemContainer = styled(Container)`
  flex: 1;
  margin: 0px 22px 0px 22px;
  border-radius: 12px;
  background: #23283b;
`

const HeaderContainer = styled(Container)`
  flex: 1;
  align-items: center;
  padding: 22px 40px 0px 40px;
`

const ImagePlaceholder = styled.div`
  height: 78px;
  width: 78px;
  border-radius: 39px;
  border: 1px solid white;
  background: #1c4140;
`

const NameText = styled(Text)`
  font-size: 32px;
  margin-left: 20px;
`

export default BoardItem
