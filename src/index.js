import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <BrowserRouter>
  <UserContextProvider>
        <App />
  </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
