
import { createContext,useContext, useState } from "react"
export const AuthContext = createContext(null);


export function UseAuth(){
    return useContext(AuthContext);
}



export default function AuthProvider({ children }){
    const [user,setUser] = useState(null);
   
    return(
        <AuthContext.Provider value={user}>
            { children }
        </AuthContext.Provider>
    )

   
}