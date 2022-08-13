// import svg 後 Webpack 不會跑出紅字
declare module "*.svg" {
  const content: any;
  export default content;
}
