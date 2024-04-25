import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { AddTodo } from './AddTodo.jsx'
import { Todos } from './TODOS.jsx'

function App() {
  return (
    <div className="flex flex-col gap-[30px] items-center align-center">
      <Provider store={store}>
        <h1 className=" text-[40px] font-semibold"> Redux Toolkit Todo </h1>
        <AddTodo />
        <Todos/>
     
      </Provider>
    </div>
    
  )
}

export default App
