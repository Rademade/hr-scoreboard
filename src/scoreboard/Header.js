import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Text from "../components/Text"
import HeaderCategory from "../components/HeaderCategory"

const Header = () => {
  const categories = [
    { title: "Long-List", value: 0 },
    { title: "Calling", value: 0 },
    { title: "Interview", value: 0 },
    { title: "Offer", value: 0 }
  ]
  const startDate = useSelector(state => state.startDate)
  const endDate = useSelector(state => state.endDate)
  const dateFormat = "MM.D.YYYY"
  const rangeString = `${startDate.format(dateFormat)} — ${endDate.format(
    dateFormat
  )}`
  return (
    <HeaderContainer>
      <InfoContainer>
        <Title>Recruitment statistics</Title>
        <DateString>{rangeString}</DateString>
      </InfoContainer>
      {categories.map((item, index) => (
        <HeaderCategory
          key={index.toString()}
          title={item.title}
          value={item.value}
        />
      ))}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  padding: 40px 60px 0px 60px;
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled(Text)`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.2px;
`

const DateString = styled(Text)`
  font-size: 38px;
  font-weight: lighter;
  color: #636b8b;
`

export default Header
