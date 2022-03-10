import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserContextProvider from "./contexts/userContext.jsx";



ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
          <App />
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
