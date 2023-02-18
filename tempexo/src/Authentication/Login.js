
import { useState } from "react";
import { UseAuth } from "../AuthProvider"
export default function Login() {
    const login = UseAuth().login;
    const [username,setUsername] = useState("");
    const [password,setPassword] =  useState("");
    function handleLogin(e){
        e.preventDefault();
        login(username,password);
    }
    return (
        <>
        <h1>Login !</h1>
        <form>
            <input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit" onClick={handleLogin}>login</button>
        </form>
        </>
    )
}