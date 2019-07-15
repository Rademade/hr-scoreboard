import axios from "axios";

export async function apiRequest(method, url, data = null) {
  const response = await axios({ method, url, data });
  if (response.data.status === "error") {
    throw new Error(data.message);
  }
  return response.data;
}

export function formData(vacancies, stages, statistics) {
  return vacancies.map(vacancy => {
    const { vacancyInterviewDetalInfo } = statistics.find(
      item => item.vacancyId === vacancy.vacancyId
    ).data;
    const stagesArray = vacancy.interviewStatus
      .split(",")
      .map(id => {
        const detailInfo = vacancyInterviewDetalInfo[id] || [];
        const customState =
          stages.find(stage => stage.customInterviewStateId === id) || {};
        return {
          id: customState.customInterviewStateId || id,
          type: customState.type || "system",
          name: customState.name || "name",
          detailInfo
        };
      })
      .filter(state => state.type !== "refuse");
    return {
      ...vacancy,
      funnelStages: stagesArray
    };
  });
}
