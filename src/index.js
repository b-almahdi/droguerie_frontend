import React from "react";
import ReactDOM from "react-dom";

import App from "./root";
import * as serviceWorker from "./root/serviceWorker";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
