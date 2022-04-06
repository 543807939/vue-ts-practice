import MyRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
export default new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
