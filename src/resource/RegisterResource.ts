import ApiService from "@/utils/ApiService";

const userRegister = async (user: {
  email: string;
  nickname: string;
  password: string;
}) => {
  return ApiService.post("/users", { user });
};

export default {
  userRegister,
};
