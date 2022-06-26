import { ApiService } from "@/utils/ApiService";

export function getRandomData() {
  const res = ApiService.get("https://api.waifu.im/random");
  return res;
}
