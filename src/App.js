import "./styles.css";
import { Board } from "./component";
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Board />
      </Provider>
    </>
  );
}

export default App;
