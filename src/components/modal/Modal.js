import React, { Component } from "react"
import "./Modal.css"
import isNil from "lodash/fp/isNil"
import Project1 from "../projects/project1"

function SergeyModal() {
  return <h1>SergeyAwesome!</h1>;
}

function RomanModal() {
  return <h1>RomanAwesome!</h1>;
}

const getModalToRender = (modalID) => {
  switch (modalID) {
    case 'modalIvan':
      return <Project1/>
    case 'modalSergey':
      return <SergeyModal/>
    case 'modalRoman':
      return <RomanModal/>
  
    default:
      break;
  }
}

export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }
  componentDidMount() {
      window.addEventListener("keyup", this.handleKeyUp, false)
      document.addEventListener("click", this.handleOutsideClick, false)
    }
  
  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false)
    document.removeEventListener("click", this.handleOutsideClick, false)
  }
  
  // Close with Esc
  handleKeyUp(e) {
    const { onCloseRequest } = this.props
    const keys = {
      27: () => {
        e.preventDefault()
        onCloseRequest()
        window.removeEventListener("keyup", this.handleKeyUp, false)
      }
    }
  
      if (keys[e.keyCode]) {
        keys[e.keyCode]()
      }
    }
  
  handleOutsideClick(e) {
    const { onCloseRequest } = this.props

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest()
        document.removeEventListener("click", this.handleOutsideClick, false)
      }
    }
  }
  
  render() {
    const { onCloseRequest, modalID, children } = this.props
    
    const modalToRender = getModalToRender(modalID)
    return (
      <div className='modal-overlay'>
        <div className='modal' ref={node => (this.modal = node)}>
          <div className='modal-content'>{modalToRender}</div>
        </div>

        <button
          type="button"
          className='close-button'
          onClick={onCloseRequest}
        />
      </div>
    )
  }
}
