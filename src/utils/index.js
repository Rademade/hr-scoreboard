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
