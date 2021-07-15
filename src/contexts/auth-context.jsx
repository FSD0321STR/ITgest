import React, { createContext } from "react";

const AuthContext = createContext({
    logged: false,
    register: () => {},
    login: () => {},
    logout: () => {},
});

export default AuthContext;
