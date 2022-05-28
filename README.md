# Base Starter Kit

> 剛剛建立自己的 Starter Kit，沒有實際運用過，所以應該之後還會補東西進來。

## Features

- 使用 React 18 以上
- CSS-in-JS 使用常見的 styled-components
- 使用 TypeScript 開發
- 使用 Webpack 5 以上
- 測試使用 jest 和 React Testing Library
- ESLint 採用 Airbnb 格式並全部採用雙引號
- react-router-dom 採用 v5 版本，主要是配合公司版本

## Directory Structure

### Src Directory

| Name      | Describe                                                        |
| --------- | --------------------------------------------------------------- |
| Common    | 放置通用 API                                                    |
| Component | 放置通用元件                                                    |
| CSS       | 放 CSS，不過因為使用 styled-components 所以應該不太會使用到這個 |
| Pages     | 放置路由元件                                                    |
| index.tsx | 進入點                                                          |

### Public Directory

> 單純放置靜態資源。

| Name       | Describe |
| ---------- | -------- |
| index.html | root     |
| Image      | 圖片     |

## Scripts

- `start` - 啟動 Web Server。
- `build` - 打包專案。
- `lint` - 使用 ESLint 解決格式問題。
- `test:jest` - 啟動測試。
- `test:jest--coverage` - 啟動測試並產出報告。
