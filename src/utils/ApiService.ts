interface ApiService {
  get: (url: string) => unknown;
}

export const ApiService: ApiService = {
  get: async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log("error", err);
    }
  },
};
