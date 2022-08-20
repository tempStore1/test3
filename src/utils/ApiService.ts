const ApiService = {
  get: async (url: string) => {
    try {
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("error", err);
    }
  },
  post: async (
    url: string,
    params: {
      headers: {
        "Content-type": "application/json";
      };
    }
  ) => {
    const { headers } = params;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body,
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("error", err);
      return err;
    }
  },
};

export default ApiService;
