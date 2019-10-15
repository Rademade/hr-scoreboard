import React from "react"
import styled from "styled-components"
import Text from "../components/Text"
import Category from "../components/Category"

const BoardItem = props => {
  const list = [
    { title: "Long-List", value: 213 },
    { title: "Calling", value: 13 },
    { title: "Interview", value: 3 },
    { title: "Offer", value: 1 }
  ]
  return (
    <ItemContainer>
      <HeaderContainer>
        <UserContainer>
          <ImagePlaceholder />
          <NameText>{props.title}</NameText>
        </UserContainer>
        {list.map((item, index) => (
          <Category
            key={index.toString()}
            title={item.title}
            value={item.value}
          />
        ))}
      </HeaderContainer>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0px 22px 0px 22px;
  border-radius: 12px;
  background: #23283b;
`

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 28px 40px 0px 40px;
`

const UserContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
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
