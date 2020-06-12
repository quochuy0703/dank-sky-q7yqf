import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    rootElement
  );
render();
