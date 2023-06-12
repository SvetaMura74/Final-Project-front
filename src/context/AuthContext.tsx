import { createContext, useEffect, useState } from "react";
import { AuthContextType, ChildProps } from "../@types";

const initialState: AuthContextType = {
  isLoggedIn: false,
  isAdmin: false,
  login(username, email, token) {},
  logout() {},
};
const AuthContext = createContext<AuthContextType>(initialState);

const AuthContextProvider = ({ children }: ChildProps) => {
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      const token = user.token;
      const email = user.email;
      const username = user.username;
      const roles = user.roles;

      login(username, email, token);
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [roles, setRoles] = useState([]);
  
    const login = (username: string, email: string, token: string) => {
      setIsLoggedIn(true);
      
     
      setIsAdmin(true)
  
      
      setEmail(email);
      setUsername(username);
      setToken(token);
    };
  const logout = () => {
    setIsLoggedIn(false);
    setEmail(undefined);
    setUsername(undefined);
    setToken(undefined);
  };
  const contextValues = {
    isLoggedIn,
    isAdmin,
    username,
    email,
    token,
    login,
    logout,
    roles
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };
export default AuthContext;
