import ApiService from "@/utils/ApiService";

const userLogin = async (user: { email: string; password: string }) => {
  return ApiService.post("/users/sign_in", { user });
};

export default {
  userLogin,
};
