import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
//import MuiTreeView from "material-ui-treeview";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
