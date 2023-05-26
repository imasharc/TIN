import { engineerList, engineerDetailsList } from "./engineerApiMockData";

export function getEngineersApiCall() {
  return engineerList;
}

export function getEngineerByIdApiCall(engineerId) {
  const engineer = engineerDetailsList.find(
    (engineer) => engineer.id === engineerId
  );
  return engineer;
}
