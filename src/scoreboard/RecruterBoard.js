// import React, { useEffect } from "react"
// import styled from "styled-components"
// import { useSelector, connect } from "react-redux"
// import PropTypes from "prop-types"
// import Text from "../components/Text"
// import Category from "../components/Category"
// import VacancyItem from "../components/VacancyItem"
// import { getVacancyList } from "../state/actions"

// const RecruterBoard = ({ recruter, getVacancyList }) => {
//   const { fullName, personId } = recruter
//   const vacancyList = useSelector(state =>
//     state.vacancies && state.vacancies[personId]
//       ? state.vacancies[personId]
//       : []
//   )
//   const endDate = useSelector(state => state.endDate)

//   // mock
//   const categories = useSelector(state => state.mockCategories)

//   useEffect(() => {
//     getVacancyList(personId)
//   }, [getVacancyList, personId])

//   return (
//     <ItemContainer>
//       <HeaderContainer>
//         <UserContainer>
//           <ImagePlaceholder />
//           <NameText>{fullName}</NameText>
//         </UserContainer>
//         {categories.map((item, index) => (
//           <Category
//             key={index.toString()}
//             title={item.title}
//             value={item.value}
//           />
//         ))}
//       </HeaderContainer>
//       <VacancyContainer>
//         {vacancyList.map((vacancy, index) => (
//           <VacancyItem
//             key={index.toString()}
//             data={vacancy}
//             endDate={endDate}
//             categories={categories}
//           />
//         ))}
//       </VacancyContainer>
//     </ItemContainer>
//   )
// }

// RecruterBoard.propTypes = {
//   recruter: PropTypes.object.isRequired
// }

// const mapDispatchToProps = {
//   getVacancyList
// }

// const ItemContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin: 0px 22px 0px 22px;
//   border-radius: 12px;
//   background: #23283b;
// `

// const HeaderContainer = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   padding: 28px 40px 0px 40px;
// `

// const UserContainer = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
// `

// const VacancyContainer = styled.div`
//   padding: 25px 40px 5px 40px;
// `

// const ImagePlaceholder = styled.div`
//   height: 78px;
//   width: 78px;
//   border-radius: 39px;
//   border: 1px solid white;
//   background: #1c4140;
// `

// const NameText = styled(Text)`
//   font-size: 32px;
//   margin-left: 20px;
// `

// export default connect(
//   null,
//   mapDispatchToProps
// )(RecruterBoard)
