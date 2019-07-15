import axios from "axios";

export async function apiRequest(method, url, data) {
  const response = await axios({ method, url, data });
  console.log("resp", response);
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
