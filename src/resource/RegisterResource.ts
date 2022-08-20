// import ApiService from "@/utils/ApiService";

import { data } from "autoprefixer";

const userRegister = async (user: {
  email: string;
  nickname: string;
  password: string;
}) => {
  const res = await fetch(`${process.env.API_PATH}/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ user }),
  });
  if (res.status === 201) {
    const data = await res.json();
    const { message } = data;
    alert(`${message}`);
    return message;
  } else {
    const data = await res.json();
    const { message, error } = data;
    const allError = error.join(",");
    alert(`${message}: ${allError}`);
    return false;
  }
};

export default {
  userRegister,
};
