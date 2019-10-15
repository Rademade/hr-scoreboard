import React from "react"
import styled from "styled-components"
import { Text } from "../components/styled"

const Header = () => (
  <Container>
    <Title>Recruitment statistics</Title>
  </Container>
)

const Container = styled.div`
  border: solid 1px white;
`
const Title = styled(Text)`
  margin: 0px;
  font-size: 38px;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #ffffff;
`

export default Header
