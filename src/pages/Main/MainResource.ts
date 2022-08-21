import ErrorMessage from "@/utils/ErrorMessage";

const handleLogout = async () => {
  const token = localStorage.getItem("token");

  try {
    const result = await fetch(`${process.env.API_PATH}/users/sign_out`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const { status } = result;
    console.log(result);

    if (status === 200) {
      const data = await result.json();
      const { message } = data;
      localStorage.clear();
      return message;
    } else {
      ErrorMessage(result);
    }
  } catch (err) {
    console.error(err);
  }
};

export default {
  handleLogout,
};
