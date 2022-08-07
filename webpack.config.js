const webpackConfig = require("./webpack");
const defaultConfig = "development";

// 採用 dev 還是 prod 方式啟動、打包專案。
module.exports = (configName) => {
  console.log("[entry]configName--->", configName);

  // 沒有帶--env 就使用預設的
  const configNameKeys = Object.keys(configName);
  const envMode = configNameKeys.filter(
    (item) => item === "development" || item === "production"
  );
  const requestedConfig = envMode || defaultConfig;

  let LoadedConfig;
  if (webpackConfig[requestedConfig] !== undefined) {
    LoadedConfig = webpackConfig[requestedConfig];
  } else {
    console.warn(`
      Provided environment "${configName}" was not found.
      Please use one of the following ones:
      ${Object.keys(webpackConfig).join(" ")}
    `);
    LoadedConfig = webpackConfig[defaultConfig];
  }
  return LoadedConfig;
};
