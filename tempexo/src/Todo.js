
import { ACTIONS } from "./TodoApp";
export default function Todo({todo,dispatch}){
    function handleDelete(){
        dispatch({
            type:ACTIONS.DELETETODO,
            payload: { id:todo.id }
        })
    }
    function handleToggle(){
        dispatch({
            type:ACTIONS.TOGGLETODO,
            payload: { id:todo.id }
        })
    }
    return (
        <div>
            <p>{todo.todo}</p> <input onChange={handleToggle} type='checkbox' checked={todo.complete}/>
            <button onClick={handleDelete}>delete</button>
            <hr/>
        </div>
    )
}