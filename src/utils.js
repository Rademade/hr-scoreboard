import _ from "lodash"

export function formPersonsArray(vacancies) {
  const array = vacancies.map(({ responsiblesPerson }) => ({
    ...responsiblesPerson
  }))
  return _.uniq(
    array
      .filter(({ type }) => type === "recruiter")
      .map(({ personId }) => personId)
  )
}

// function getName(key) {
//   switch (key) {
//     case "longlist":
//       return "Long list/Applied people";
//     case "hr_interview":
//       return "HR Interview";
//     case "tech_screen":
//       return "Tech Screen";
//     case "sent_offer":
//       return "Offer Sent";
//     case "accept_offer":
//       return "Offer Accepted";
//     case "approved":
//       return "Hired";
//     default:
//       return "reject";
//   }
// }

// const getKeys = object => Object.keys(object);

// function formWeekReport(infoMap) {
//   const resObject = {};
//   getKeys(infoMap).forEach(akey => {
//     const info = infoMap[akey];
//     getKeys(info).forEach(bkey => {
//       const stages = info[bkey];
//       getKeys(stages).forEach(ckey => {
//         const resProp = resObject[ckey];
//         if (resProp) {
//           resObject[ckey] = [...resProp, ...stages[ckey]];
//         } else {
//           resObject[ckey] = stages[ckey];
//         }
//       });
//     });
//   });
//   return resObject;
// }

// export function formData(vacancies, stages, statistics, reports) {
//   return vacancies.map(vacancy => {
//     const report = reports.find(
//       report => report.vacancy.vacancyId === vacancy.vacancyId
//     );
//     const weekReport = report ? formWeekReport(report.infoMap) : {};
//     const { vacancyInterviewDetalInfo } = statistics.find(
//       item => item.vacancyId === vacancy.vacancyId
//     ).data;
//     const details = vacancy.interviewStatus
//       .split(",")
//       .map(id => {
//         const customStage = stages.find(
//           stage => stage.customInterviewStateId === id
//         );
//         return {
//           id,
//           description: customStage ? customStage.name : getName(id),
//           detailInfo: vacancyInterviewDetalInfo[id] || [],
//           weekDetailInfo: weekReport[id] || [],
//           customType: customStage ? customStage.type : null
//         };
//       })
//       .filter(stage => stage.description !== "reject")
//       .filter(stage => stage.customType !== "refuse");
//     return {
//       ...vacancy,
//       weekDetailedInfo: weekReport,
//       detailedInfo: details
//     };
//   });
// }
