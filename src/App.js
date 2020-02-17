import React, { Children } from 'react'
import './App.css'
import ModalLauncher from './ModalLauncher'

let projects = [
  {name:"Ivan", desc: "descriptionIvan", modal: "modalIvan", modalClass: "modal-button"},
  {name:"Sergey", desc: "descriptionSergey", modal: "modalSergey", modalClass: "modal-button"},
  {name:"Roman", desc: "descriptionRoman", modal: "modalRoman", modalClass: "modal-button"}
]


function App() {
  const tiles = projects.map((project) =>
    <section>
      <ModalLauncher modalId={project.name} modalClass={project.modalClass} buttonLabel={project.name}/>
    </section>
  );
  return (
    <div className="App">
      {tiles}
    </div>
  )
}

export default App

