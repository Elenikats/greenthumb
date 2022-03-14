import React from "react";
import { useEffect, useState } from "react";
import userArray from "../user.js";

export const userContext = React.createContext();

const userLocal = localStorage.getItem("user");

const defaultUser = !userLocal ? userArray[0] : JSON.parse(userLocal);

const usersLocal = localStorage.getItem("users");
const defaultUsers = usersLocal ? JSON.parse(usersLocal) : userArray;

export default function UserContextProvider(props) {
  const [users, setUsers] = useState(defaultUsers);
  const [user, setUser] = useState(defaultUser);
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [cartIconClicked, setCartIconClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

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
  ];

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
