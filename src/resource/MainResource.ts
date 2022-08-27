import ApiService from "@/utils/ApiService";

const userLogout = async () => {
  return ApiService.delete("/users/sign_out");

  // const token = localStorage.getItem("token");

  // try {
  //   const result = await fetch(`${process.env.API_PATH}/users/sign_out`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: token,
  //     },
  //   });

  //   const { status } = result;

  //   if (status === 200) {
  //     const data = await result.json();
  //     const { message } = data;
  //     localStorage.clear();
  //     return message;
  //   } else {
  //     ErrorMessage(result);
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
};

const getTodos = () => {
  return ApiService.get("/todos");
};

const addTodos = (data: { todo: { content: string } }) => {
  return ApiService.post("/todos", data);
};

export default {
  userLogout,
  getTodos,
  addTodos,
};
