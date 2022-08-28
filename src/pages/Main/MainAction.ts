export const createType = {
  MAIN_USER_LOGOUT: "MAIN_USER_LOGOUT",
  MAIN_GET_TODOS: "MAIN_GET_TODOS",
  MAIN_GET_TODOS_SUCCESS: "MAIN_GET_TODOS_SUCCESS",
  MAIN_ADD_TODOS: "MAIN_ADD_TODOS",
  MAIN_PUT_TODOS: "MAIN_PUT_TODOS",
  MAIN_DELETE_TODOS: "MAIN_DELETE_TODOS",
};

export const userLogout = () => {
  return {
    type: createType.MAIN_USER_LOGOUT,
  };
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

export const editTodos = (content: string, id: string) => {
  return {
    type: createType.MAIN_PUT_TODOS,
    content,
    id,
  };
};

export const deleteTodos = (id: string) => {
  return {
    type: createType.MAIN_DELETE_TODOS,
    id,
  };
};
