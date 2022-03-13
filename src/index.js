import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import SearchContextProvider from "./contexts/searchContext.js";
import UserContextProvider from "./contexts/userContext.jsx";



ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <SearchContextProvider>
          <App />
      </SearchContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
