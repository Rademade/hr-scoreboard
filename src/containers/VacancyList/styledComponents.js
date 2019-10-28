import styled from "styled-components"
import Text from "../../components/Text"

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;
  margin: 70px 40px 0px 40px;
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

export const MainText = styled(Text)`
  font-size: 18px;
  line-height: 18px;
`
