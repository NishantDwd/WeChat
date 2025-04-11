import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {

    const [authuser,setUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return <AuthContext.Provider value = {{authuser,setUser}}>
        {children}  

    </AuthContext.Provider>;
}
