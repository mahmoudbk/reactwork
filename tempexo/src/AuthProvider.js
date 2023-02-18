
import { createContext,useContext, useState } from "react"
import users from './users.json';
import Cookies from 'js-cookie';



export const AuthContext = createContext(null);
export const UseAuth = ()=> useContext(AuthContext);



export default function AuthProvider({ children }){
    const [user,setUser] = useState(Cookies.get('username'));
    const login = (username,password)=>{
        //some login logic here
       
        users.users.map((u)=>{
            
            
            if(u.username.toString()===username && u.password.toString()===password){
                Cookies.set("username",u.username);
                setUser(u.username);
                return u;
            }
            return u;
        })
        
       
    }

    const logout = ()=> {
        Cookies.remove('username')
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            { children }
        </AuthContext.Provider>
    )

   
}