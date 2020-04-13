import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import lang from './resources';
import { Provider as CollectionProvider } from "./useCollection";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <CollectionProvider>
      <App />
    </CollectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: reg => {
    alert(lang.general.applicationUpdatedMessage);
  }
});
