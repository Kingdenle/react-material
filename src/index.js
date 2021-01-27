import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Entry from "./container/entry";

const router = (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Entry} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}