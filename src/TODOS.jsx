import { useDispatch, useSelector } from "react-redux"
import { removeTodo, updateEditStatus } from "./features/todo/todoSlice"

export function Todos(){

    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    function handleDelete(id){
        dispatch(removeTodo(id))
    }

    return (
        <div className=" w-[400px] sm:w-[500px]">
        {todos.map((todo) => {
            return (
                <div className="p-3 bg-gray-50 shadow-lg flex flex-col mb-[30px] ">
                    <p className="text-sm text-gray-500">{todo.id}</p>
                    <p className="text-2xl break-words">{todo.text}</p>
                    <div className="flex justify-center gap-5 mt-[15px]">
                        <button className="bg-gray-100 w-[60px]" onClick={() => {handleDelete(todo.id)}}>Delete</button>
                        <button className="bg-gray-100 w-[60px]" onClick={() => {dispatch(updateEditStatus(todo.id))}}>Edit</button>
                    </div>
                   
                </div>
            )
        })}
        
        </div>
    )
}