interface ApiService {
  get: (url: string) => any;
}

export const ApiService: ApiService = {
  get: async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("error", err);
    }
  },
};
