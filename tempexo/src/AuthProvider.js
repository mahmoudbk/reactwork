
import { createContext,useContext, useState } from "react"
import users from './users.json';









export const AuthContext = createContext(null);




export const UseAuth = ()=> useContext(AuthContext);



export default function AuthProvider({ children }){
    const [user,setUser] = useState(localStorage.getItem('username'));
    const login = (username,password)=>{
        //some login logic here
        console.log(localStorage.getItem('username'));
        users.users.map((u)=>{
            if(u.username==username && u.password==password){
               
                setUser(u.username);
               
                return true;
            }
        })
        
       
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