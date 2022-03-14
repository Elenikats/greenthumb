import React from "react";
import { useEffect, useState } from "react";

export const userContext = React.createContext();

const userLocal = localStorage.getItem("user");
const defaultUser = !userLocal ? "" : JSON.parse(userLocal);

const usersLocal = localStorage.getItem("users");
const defaultUsers = usersLocal ? JSON.parse(usersLocal) : [];

// GET DATA
const loginLocal = localStorage.getItem("login");
const defaultLogin = loginLocal ? JSON.parse(loginLocal) : false;

const loggedInFirstNameLocal = localStorage.getItem("loggedInFirstName");
const defaultLoggedInFirstName = loggedInFirstNameLocal
  ? JSON.parse(loggedInFirstNameLocal)
  : "";

export default function UserContextProvider(props) {
  const [users, setUsers] = useState(defaultUsers);
  const [user, setUser] = useState(defaultUser);
  const [login, setLogin] = useState(defaultLogin);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [cartIconClicked, setCartIconClicked] = useState(false);
  const [loggedInFirstName, setLoggedInFirstName] = useState(
    defaultLoggedInFirstName
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // this stores the login to Local Storage in JSON format. The useEffect will update when [login] changes. WE SEND DATA
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
  }, [login]);

  useEffect(() => {
    localStorage.setItem(
      "loggedInFirstName",
      JSON.stringify(loggedInFirstName)
    );
  }, [loggedInFirstName]);

  const value = [
    user,
    setUser,
    users,
    setUsers,
    login,
    setLogin,
    show,
    setShow,
    alert,
    setAlert,
    cartIconClicked,
    setCartIconClicked,
    loggedInFirstName,
    setLoggedInFirstName,
  ];

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
