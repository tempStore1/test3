import { createRoot } from "react-dom/client";
import App from "./App";
import "@/assets/css/tailwind.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import * as React from "react";

// ===============================================================
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </HashRouter>
  </Provider>
);
