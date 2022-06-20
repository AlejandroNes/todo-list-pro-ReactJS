import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {

  const tareas = [
    {id:1, tarea:"React", descripcion: "Aprender react en este mes de cero a experto", fecha:"2022-06-21", estado:false},
    {id:2, tarea:"Ingles", descripcion: "Aprender las bases del Ingles", fecha:"2022-06-23", estado:false}, 
  ]

  const [task, setTask] = useState(tareas)

  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Formulario 
            task={task}
            setTask={setTask}
            />
          </div>
          <div className="col-12 col-sm-6">
            <TodoList 
            task={task}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
