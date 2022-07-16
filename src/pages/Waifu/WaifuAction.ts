type actionCreatorType = {
  TEST?: "TEST";
  GET___WAIFU_INFO?: "GET___WAIFU_INFO";
  GET___WAIFU_INFO_SUCCESS?: "GET___WAIFU_INFO_SUCCESS";
};

export const actionCreator: actionCreatorType = {
  TEST: "TEST",
  GET___WAIFU_INFO: "GET___WAIFU_INFO",
  GET___WAIFU_INFO_SUCCESS: "GET___WAIFU_INFO_SUCCESS",
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

export const getWaifuInfoSuccess = (response: any) => {
  const { images } = response;
  return {
    type: actionCreator.GET___WAIFU_INFO_SUCCESS,
    waifuInfo: images[0],
  };
};
