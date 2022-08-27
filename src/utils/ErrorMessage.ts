/**
 * 將 API 結果丟進來會直接幫你處理錯誤資訊
 * @param result
 */
const handleError = async (result: any) => {
  const { data } = result;
  const { message, error } = data;
  if (error) {
    const allError = error.join(",");
    alert(`${message}: ${allError}`);
  } else {
    alert(`${message}`);
  }
};

export default handleError;
