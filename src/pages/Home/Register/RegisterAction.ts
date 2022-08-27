export const createType = {
  USER_REGISTER: "USER_REGISTER",
  USER_REGISTER_STATUS: "USER_REGISTER_STATUS",
};

export const userRegister = (user: {
  email: string;
  nickname: string;
  password: string;
}) => {
  return {
    type: createType.USER_REGISTER,
    user,
  };
};

export const userRegisterStatus = (message: string) => {
  return {
    type: createType.USER_REGISTER_STATUS,
    message,
  };
};
