import React, { useReducer, useState } from "react";
import AuthContext from "./auth-context";
import api from "../helpers/api";

const token = localStorage.getItem("token");

const initialState = {
  logged: token !== null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        logged: true,
      };
    case "logout":
      return {
        ...state,
        logged: false,
      };
    case "register":
      return {
        ...state,
        logged: true,
      };
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async ({ email, password, name, surname, role }) => {
    return await api
      .register({ email, password, name, surname, role })
      .then((token) => {
        dispatch({ type: "register", token: token.token });
        localStorage.setItem("token", token.token);
        return token;
      })
      .catch((e) => {
        dispatch({ type: "logout" });
        Promise.reject(e);
      });
  };

  const login = async ({ email, password }) => {
    await api
      .login({ email, password })
      .then((token) => {
        dispatch({ type: "login", token: token.token });
        localStorage.setItem("token", token.token);
      })
      .catch((e) => {
        dispatch({ type: "logout" });
        Promise.reject(e);
      });
  };

  const logout = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ ...state, token, login, logout, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
