type Headers = {
  method?: string;
  headers?: object;
  body?: object;
};
interface ApiService {
  get: (url: string, object?: Headers) => any;
}

export const ApiService: ApiService = {
  get: async (url: string, headers: Headers) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("error", err);
    }
  },
};
