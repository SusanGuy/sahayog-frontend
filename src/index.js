import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import userReducer from "./store/reducers/user";
import uiReducer from "./store/reducers/ui";
import campaignReducer from "./store/reducers/campaign";
import alertReducer from "./store/reducers/alert";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  modal: uiReducer,
  campaign: campaignReducer,
  alert: alertReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
