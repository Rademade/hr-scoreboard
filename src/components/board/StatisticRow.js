import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GreyText, AppText } from "../common"

const StatisticRow = ({ values, isHeader }) => (
  <Container>
    {values.map((value, index) => {
      const isFirst = index === 0
      return (
        <Element key={index} flex={isFirst ? 2 : 1}>
          {isHeader ? (
            <GreyText>{value}</GreyText>
          ) : (
            <MainSText>{value}</MainSText>
          )}
        </Element>
      )
    })}
  </Container>
)

StatisticRow.propTypes = {
  values: PropTypes.array.isRequired,
  isHeader: PropTypes.bool
}

const Container = styled.div`
  display: flex;
`

const Element = styled.div`
  flex: ${props => props.flex || 1};
`

const MainSText = styled(AppText)`
  font-size: 16;
`

export default StatisticRow
