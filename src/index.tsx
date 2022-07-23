import { createRoot } from "react-dom/client";
import App from "./App";
import "@/assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, history } from "./store";
import * as React from "react";

// ===============================================================
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </Provider>
);
