import React from "react"
import styled from "styled-components"

const Header = () => (
  <Container>
    <Title>Recruitment statistics</Title>
  </Container>
)

const Container = styled.div`
  border: solid 1px white;
`
const Title = styled.p`
  margin: 0px;
  font-size: 38px;
  letter-spacing: -0.2px;
  color: #ffffff;
`

export default Header
