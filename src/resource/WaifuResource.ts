import { ApiService } from "@/utils/ApiService";

export function getRandomData() {
  const res = ApiService.get("https://api.waifu.im/random");
  return res;
}

const WaifuResource = {
  getRandomData: () => {
    return ApiService.get("https://api.waifu.im/random");
  },
};

export default WaifuResource;
