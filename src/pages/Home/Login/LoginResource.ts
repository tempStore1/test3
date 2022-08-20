const userLogin = async (user: { email: string; password: string }) => {
  const res = await fetch(`${process.env.API_PATH}/users/sign_in`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ user }),
  });
  if (res.status === 200) {
    const data = await res.json();
    const { message } = data;
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
  userLogin,
};
