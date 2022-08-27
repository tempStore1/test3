import ApiService from "@/utils/ApiService";

const userLogout = async () => {
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

export default {
  userLogout,
  getTodos,
  addTodos,
  editTodos,
};
