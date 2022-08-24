export const createType = {
  MAIN_GET_TODOS: "MAIN_GET_TODOS",
  MAIN_GET_TODOS_SUCCESS: "MAIN_GET_TODOS_SUCCESS",
  MAIN_ADD_TODOS: "MAIN_ADD_TODOS",
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

export const addTodos = (content: string) => {
  return {
    type: createType.MAIN_ADD_TODOS,
    content,
  };
};
