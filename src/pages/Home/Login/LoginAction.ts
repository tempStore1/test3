export const createType = {
  USER_LOGIN: "USER_LOGIN",
  USER_LOGIN_STATE: "USER_LOGIN_STATE",
};

export const userLogin = (user: { email: string; password: string }) => {
  return {
    type: createType.USER_LOGIN,
    user,
  };
};

export const LoginState = (message: string, state: boolean) => {
  return {
    type: createType.USER_LOGIN_STATE,
    message,
    state,
  };
};
