import ApiService from "./ApiService";

import { Login } from "./ApiRouates";
export const login = async (email, password) => {
  return await ApiService.request(Login, "POST", { email, password });
};
