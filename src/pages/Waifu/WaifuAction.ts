type actionCreatorType = {
  TEST?: "TEST";
  GET___WAIFU_INFO?: "GET___WAIFU_INFO";
};

export const actionCreator: actionCreatorType = {
  TEST: "TEST",
  GET___WAIFU_INFO: "GET___WAIFU_INFO",
};

export const test = () => {
  return {
    type: actionCreator.TEST,
  };
};

export const getWaifuInfo = () => {
  return {
    type: actionCreator.GET___WAIFU_INFO,
  };
};
