/**
 * 有無 token 來判斷有無登入
 * @returns boolean
 */
const checkAuth = () => {
  const token = sessionStorage.getItem("token");
  return !!token;
};

export default checkAuth;
