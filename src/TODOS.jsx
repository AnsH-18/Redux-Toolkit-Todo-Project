import { useDispatch, useSelector } from "react-redux"
import { removeTodo, updateEditStatus } from "./features/todo/todoSlice"

export function Todos(){

    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    function handleDelete(id){
        dispatch(removeTodo(id))
    }

    return (
        <>
        {todos.map((todo) => {
            return (
                <>
                    <p>{todo.id}</p>
                    <h3>{todo.text}</h3>
                    <button onClick={() => {handleDelete(todo.id)}}>Delete</button>
                    <button onClick={() => {dispatch(updateEditStatus(todo.id))}}>Edit</button>
                </>
            )
        })}
        
        </>
    )
}