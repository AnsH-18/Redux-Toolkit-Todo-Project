import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateEditStatus, updateTodo } from "./features/todo/todoSlice.js"

export function AddTodo(){

    const [input, setInput] = useState()
    const [editing , setEditing] = useState(false)
    const [id, setId] = useState()
    const dispatch = useDispatch()

    const toUpdateValue = useSelector(state => state.todo)
    useEffect(() => {
        toUpdateValue.forEach(todo => {
            if(todo.toEdit === true){
                setInput(todo.text)
                setId(todo.id)
                setEditing(true)
            }
        })
    }, [toUpdateValue])
    

    function handleInput(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    function handleEdit(e){
        e.preventDefault()
        setInput(e.target.value)
        dispatch(updateEditStatus(id))
        dispatch(updateTodo({id: id, text: input}))
        setId("")
        setInput("")
        setEditing(false)
    }

    return (
        <form className= " flex justify-center gap-[20px] h-[40px]  w-fit" onSubmit={!editing ? handleSubmit : handleEdit}>
            <input className="pl-[10px] border border-solid  border-gray-300 border-2 rounded-sm w-[300px] sm:w-[500px]" placeholder="Add A Todo" value={input} onChange={handleInput}></input>
            <button className="w-[60px] text-white font-bold bg-blue-500" type="submit">{!editing ? "Add" : "Edit"}</button>
        </form>
    )
}