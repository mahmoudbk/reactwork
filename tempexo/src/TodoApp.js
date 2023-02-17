import {  useReducer, useState } from "react";
import Todo from "./Todo";
import { UseAuth } from "./AuthProvider";
export const ACTIONS = {
  ADDTODO : 'add-todo',
  TOGGLETODO : 'toggle-todo',
  DELETETODO : 'delete-todo'
}
function reducer(todos,action){
  switch (action.type){
    case ACTIONS.ADDTODO:
      return [...todos,newTodo(action.payload.todo)]
    case ACTIONS.TOGGLETODO:
      return toggleTodo(todos,action.payload.id)

    case ACTIONS.DELETETODO:
      return deleteTodo(todos,action.payload.id)

    default:
      return todos
    
  }
}

function newTodo(todo){
  return {id:Date.now(),todo:todo,complete:false}
}

function toggleTodo(arr,id){
  return arr.map((todo)=> {
    if (todo.id===id){
      return {...todo,complete:!todo.complete}
    }
    return todo
  })
}

function deleteTodo(arr,id){
  return arr.filter((todo)=> todo.id!==id);

}
function TodoApp() {

  const [todo, setTodo] = useState('');
  const [todos,dispatch] = useReducer(reducer,[])
  const user = UseAuth();
  

  


  function handleSubmit(e){
    e.preventDefault();
    dispatch({type:ACTIONS.ADDTODO,payload:{todo:todo}})
    setTodo("");
  }
  return (
  <>
  <h1>Todo list</h1> 

  <form onSubmit={handleSubmit}>
    <input value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="enter your todo for today"/>
    
  </form>
  {todos.map((todo)=> {
    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
  })}
  </>
  );
}

export default TodoApp;
