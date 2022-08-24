export const createType = {
  MAIN_GET_TODOS: "MAIN_GET_TODOS",
  MAIN_GET_TODOS_SUCCESS: "MAIN_GET_TODOS_SUCCESS",
};

export const getTodos = () => {
  return {
    type: createType.MAIN_GET_TODOS,
  };
};

export const getTodosSuccess = (response: any) => {
  return {
    type: createType.MAIN_GET_TODOS_SUCCESS,
    todos: response.data.todos,
  };
};
