import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = [{id: Date.now(), text: "Hello world", toEdit: false}]

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo : (state, action) => {
           const newTodo = {
            id: Date.now(),
            text: action.payload,
            toEdit: false
           }
           state.push(newTodo)
           console.log(state)

        },
        removeTodo : (state, action) => {
            console.log(action)
            state = state.filter(todo => todo.id !== action.payload);
            return state
        },
        updateEditStatus : (state, action) => {
            state.forEach(todo => {
                if(todo.id === action.payload){
                    todo.toEdit = !todo.toEdit
                    console.log(todo.toEdit);
                }
            })
            return state
        },
        updateTodo : (state, action) => {
            state.forEach(todo => {
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text
                }
            })
            return state
        }
    }

})

export const  {addTodo, removeTodo, updateEditStatus, updateTodo} = todoSlice.actions

export default todoSlice.reducer
 