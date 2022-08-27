import ApiService from "@/utils/ApiService";

const userLogin = (user: { email: string; password: string }) => {
  return ApiService.post("/users/sign_in", { user });
};

export default {
  userLogin,
};
