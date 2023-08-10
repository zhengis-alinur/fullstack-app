import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";
import { Provider } from "react-redux";
import store from "./app/redux/store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <NavBar />
        <App />
    </Provider>
);
