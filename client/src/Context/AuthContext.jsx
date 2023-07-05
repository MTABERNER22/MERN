import React, { useState, useContext} from "react";

export const AuthContext = React.createContext()

const AuthProvider = ({children})=>{
   const [login, setLogin] = useState(localStorage.getItem("login") ? true:false);
   const[user, setUser] = useState(JSON.parse(localStorage.getItem("users")) || {});
   const handleLogin = (userInfo)=>{
    localStorage.setItem("login", "true");
    setLogin(true);
    if (userInfo){ 
      localStorage.setItem("users", JSON.stringify(userInfo))
      setUser(userInfo);}
   }
   const handleLogout = ()=>{
    localStorage.removeItem("login");
    localStorage.removeItem("users");

    setLogin(false)
   }
   return(
    <AuthContext.Provider value={{login, handleLogin, handleLogout, user}}>
      {children}
    </AuthContext.Provider>
   )
}

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext)