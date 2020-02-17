import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalLauncher.css"

export default class ModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalMode: null // 'modal1' 'modal2'
    };
  }
 
 openModal(id) {
    this.setState({ modalMode: id });
  }

  closeModal() {
    this.setState({ modalMode: null });
  }

  render() {

    const { buttonLabel, children } = this.props;
    const { modalMode } = this.state;
    
    return (
      <div>
        <button
          type="button"
          className="modal-button"
          onClick={() => this.openModal('modal1')}
        >
          {buttonLabel}
        </button>

        <button
          type="button"
          className="modal-button"
          onClick={() => this.openModal('modal2')}
        >
          {buttonLabel}
        </button>

        {modalMode === 'modal1' && (
          <Modal onCloseRequest={() => this.closeModal()}>
            {children} modal1
          </Modal>
        )}

        {modalMode === 'modal2' && (
          <Modal onCloseRequest={() => this.closeModal()}>
            {children} modal2
          </Modal>
        )}
      </div>
    );
  }
}
