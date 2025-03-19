import { ForgetPassword } from "./ApiRouates";
import ApiService from "./ApiService";
import { UpdatePassword } from "./ApiRouates";

export const sendForgotPasswordRequest = async (email) => {
    return await ApiService.request(ForgetPassword, "POST", { email });
};

export const setUpdatePassword = async (email) => {
    return await ApiService.request(UpdatePassword,"PUT",{email});
};
