const userLogin = async (user: { email: string; password: string }) => {
  const res = await fetch(`${process.env.API_PATH}/users/sign_in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  const { status, headers } = res;

  if (status === 200) {
    const data = await res.json();
    const { message } = data;
    const token = headers.get("authorization");

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("token", token);

    return message;
  } else {
    const data = await res.json();
    const { message, error } = data;
    if (error) {
      const allError = error.join(",");
      alert(`${message}: ${allError}`);
    } else {
      alert(`${message}`);
    }
    return false;
  }
};

export default {
  userLogin,
};
