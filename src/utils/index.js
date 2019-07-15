import axios from "axios";

export function getStatusString(status) {
  switch (status) {
    case "open":
      return "New";
    case "expects":
      return "On hold";
    case "inwork":
      return "In Progress";
    case "payment":
      return "Payment";
    case "replacement":
      return "Replacement";
    case "recommendation":
      return "Recomendation";
    default:
      return "NoStatus";
  }
}

export function getUserLetters(username) {
  let string = "";
  username
    .split(" ")
    .map(item => item.slice(0, 1))
    // eslint-disable-next-line array-callback-return
    .map(item => {
      string = string.concat(item);
    });
  return string;
}

export async function apiRequest(method, url, data) {
  const response = await axios({ method, url, data });
  if (response.data.status === "error") {
    throw new Error(data.message);
  }
  return response.data;
}

export async function fetchStatisticsLoop(items) {
  const count = items.length;
  let promiseArray = [];
  for (let i = 0; i < count; i++) {
    const item = items[i];
    promiseArray.push(
      axios.post("/hr/stat/getVacancyInterviewDetalInfo", {
        vacancyId: item.vacancyId,
        withCandidatesHistory: true
      })
    );
  }
  return await Promise.all(promiseArray);
}

export function formItemsWithStats(items, respArray) {
  if (items.length !== respArray.length) {
    throw new Error("Arrays count dont match");
  }
  const itemDetails = respArray.map(resp => ({ ...resp }));
  const resultArray = items.map((item, index) => {
    const statItem = itemDetails[index];
    const vacancyId = JSON.parse(statItem.config.data).vacancyId;
    if (vacancyId !== item.vacancyId) {
      console.log("wait... what?", vacancyId, item.vacancyId);
      return { ...item };
    }
    return {
      ...item,
      ...statItem.data
    };
  });
  return resultArray;
}
