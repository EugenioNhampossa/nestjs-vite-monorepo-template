import { todoContract } from "@repo/api-contract";
import { initQueryClient } from "@ts-rest/react-query";

const apiClient = initQueryClient(todoContract, {
  baseHeaders: {},
  baseUrl: "",
});

export default apiClient;
