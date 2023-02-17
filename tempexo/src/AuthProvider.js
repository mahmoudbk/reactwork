
import { createContext,useContext, useState } from "react"
export const AuthContext = createContext(null);




export const UseAuth = ()=> useContext(AuthContext);



export default function AuthProvider({ children }){
    const [user,setUser] = useState(null);
    const login = (username,password)=>{
        //some login logic here
        setUser(username);
    }

    const logout = ()=> {
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            { children }
        </AuthContext.Provider>
    )

   
}