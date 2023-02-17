import { ACTIONS } from "./App";

export default function Todo({todo, dispatch}){
    
  

    function handleCheck() {
        dispatch({
          type: ACTIONS.TOGGLETODO,
          payload: { id: todo.id },
        });}
    return (
        <ul>
            <li>name : {todo.name}</li>
            <li> <input type="checkbox" onChange={handleCheck} checked={todo.complete}/> </li>
        </ul>
    )
}