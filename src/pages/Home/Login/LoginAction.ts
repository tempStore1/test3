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

export const LoginState = (state: string) => {
  return {
    type: createType.USER_LOGIN_STATE,
    state,
  };
};
