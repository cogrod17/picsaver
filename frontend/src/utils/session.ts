import { SessionData } from "models/redux-models";

export const checkSession = (): SessionData | null => {
  let ls = localStorage.getItem("session");
  return ls ? JSON.parse(ls) : null;
};
