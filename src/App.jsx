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
    <Provider store={store}>
      <h1> Redux Toolkit Todo </h1>
      <AddTodo/>
      <Todos/>
     
    </Provider>
  )
}

export default App
