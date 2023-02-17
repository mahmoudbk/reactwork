import TodoApp from './TodoApp';
import { UseAuth } from './AuthProvider';
import Login from './Authentication/Login';
export default function App(){
    const auth = UseAuth();
    if(auth.user){
        return <TodoApp/>
    }else {
        return <Login/>
    }
   
   
   
  }