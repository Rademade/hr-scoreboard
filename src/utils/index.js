import axios from "axios";
import _ from "lodash";

function getName(key) {
  switch (key) {
    case "longlist":
      return "Long list/Applied people";
    case "hr_interview":
      return "HR Interview";
    case "tech_screen":
      return "Tech Screen";
    case "sent_offer":
      return "Offer Sent";
    case "accept_offer":
      return "Offer Accepted";
    case "approved":
      return "Hired";
    default:
      return "reject";
  }
}

export async function apiRequest(method, url, data = null) {
  const response = await axios({ method, url, data });
  if (response.data.status === "error") {
    throw new Error(response.data.message);
  }
  return response.data;
}

export async function fetchLoop(items, url, data) {
  const count = items.length;
  let promiseArray = [];
  for (let i = 0; i < count; i++) {
    const item = items[i];
    promiseArray.push(axios.post(url, { ...data, vacancyId: item.vacancyId }));
  }
  const resolvedArray = await Promise.all(promiseArray);
  return resolvedArray
    .map(resp => ({ ...resp }))
    .map(item => {
      const vacancyId = JSON.parse(item.config.data).vacancyId;
      const { data } = item;
      return { vacancyId, data };
    });
}

export function formPersonsArray(vacancies) {
  const array = [];
  vacancies.forEach(({ responsiblesPerson }) =>
    array.push(...responsiblesPerson)
  );
  return _.uniq(
    array
      .filter(({ type }) => type === "recruiter")
      .map(({ personId }) => personId)
  );
}

const getKeys = object => Object.keys(object);

function formWeekReport(infoMap) {
  const resObject = {};
  getKeys(infoMap).forEach(akey => {
    const info = infoMap[akey];
    getKeys(info).forEach(bkey => {
      const stages = info[bkey];
      getKeys(stages).forEach(ckey => {
        const resProp = resObject[ckey];
        if (resProp) {
          resObject[ckey] = [...resProp, ...stages[ckey]];
        } else {
          resObject[ckey] = stages[ckey];
        }
      });
    });
  });
  return resObject;
}

export function formData(vacancies, stages, statistics, reports) {
  return vacancies.map(vacancy => {
    const { infoMap } = reports.find(
      report => report.vacancy.vacancyId === vacancy.vacancyId
    );
    const weekReport = formWeekReport(infoMap);
    const { vacancyInterviewDetalInfo } = statistics.find(
      item => item.vacancyId === vacancy.vacancyId
    ).data;
    const details = vacancy.interviewStatus
      .split(",")
      .map(id => {
        const customStage = stages.find(
          stage => stage.customInterviewStateId === id
        );
        return {
          id,
          description: customStage ? customStage.name : getName(id),
          detailInfo: vacancyInterviewDetalInfo[id] || [],
          weekDetailInfo: weekReport[id],
          customType: customStage ? customStage.type : null
        };
      })
      .filter(stage => stage.description !== "reject")
      .filter(stage => stage.customType !== "refuse");
    return {
      ...vacancy,
      weekDetailedInfo: weekReport,
      detailedInfo: details
    };
  });
}
