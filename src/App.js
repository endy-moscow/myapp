import React, { Children } from 'react'
import './App.css'
import ModalLauncher from './components/modal/ModalLauncher'
import projects from './data/projects.js'

function App() {
  return (
    <div className="App">
      {projects.map((project) =>
        <section>
          <ModalLauncher 
            modalId={project.id} 
            project={project}
            modalLauncherClass={project.modalClass} 
            modalLauncherLabel={project.name}
          />
        </section>
      )}
    </div>
  )
}

export default App

