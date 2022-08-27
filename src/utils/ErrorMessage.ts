import { notification } from "antd";

/**
 * 將 API 結果丟進來會直接幫你處理錯誤資訊
 * @param result
 */
const handleError = (result: any) => {
  const { data } = result;
  const { message, error } = data;
  if (error) {
    const allError = error.join(",");
    notification.error({
      message: "錯誤",
      description: `${message}: ${allError}`,
    });
  } else {
    notification.error({
      message: "錯誤",
      description: `${message}`,
    });
  }
};

export default handleError;
