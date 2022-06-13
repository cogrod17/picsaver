import axios from "axios";

const API_URL = "http://localhost:8000";

interface RequestModel {
  method: "get" | "post" | "patch" | "put" | "delete";
  endpoint: string;
  body?: {};
}

export const request = async ({ method, endpoint, body }: RequestModel) => {
  return await axios[method](`${API_URL}/${endpoint}`, { ...body });
};
