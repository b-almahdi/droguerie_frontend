import React from "react";
import ReactDOM from "react-dom";

import App from "./root";
import * as serviceWorker from "./root/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
