import ApiService from "@/utils/ApiService";

const userLogout = () => {
  return ApiService.delete("/users/sign_out");
};

const getTodos = () => {
  return ApiService.get("/todos");
};

const addTodos = (data: { todo: { content: string } }) => {
  return ApiService.post("/todos", data);
};

const editTodos = (data: { todo: { content: string } }, id: string) => {
  return ApiService.put(`/todos/${id}`, data);
};

const deleteTodos = (id: string) => {
  return ApiService.delete(`/todos/${id}`);
};

export default {
  userLogout,
  getTodos,
  addTodos,
  editTodos,
  deleteTodos,
};
