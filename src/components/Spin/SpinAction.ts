export const createType = {
  LOADING_STATUS: "LOADING_STATUS",
};

export const loadingStatus = (isLoading: boolean) => {
  return {
    type: createType.LOADING_STATUS,
    isLoading,
  };
};
