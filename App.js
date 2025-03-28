import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Ensure correct path
import AppWrapper from "./redux/AppWrapper"; // Ensure correct path

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
