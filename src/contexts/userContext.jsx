import React from "react";
import { useEffect, useState } from "react";
import userArray from "../user.js";

export const userContext = React.createContext();

const userLocal = localStorage.getItem("user");
const defaultUser = userLocal ? JSON.parse(userLocal) : null;

const usersLocal = localStorage.getItem("users");
const defaultUsers = usersLocal ? JSON.parse(usersLocal) : [];

export default function UserContextProvider(props) {
  const [users, setUsers] = useState(defaultUsers);
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const value = [user, setUser, users, setUsers];

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
