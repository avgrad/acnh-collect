import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import storage form URL
const hash = (() => {
    let h = window.location.hash;
    while (h.startsWith("#")) h = h.substr(1);
    return h;
})().split("=");
const importHash = hash[0] === "import" ? hash[1] : "";
if (importHash.length !== 0) {
    const localStorageVal = importHash.split(";");
    localStorage.setItem("donated", JSON.stringify(localStorageVal));
    window.location.replace(
        window.location.origin +
            window.location.pathname +
            window.location.search
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
