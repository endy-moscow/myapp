import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalLauncher.css"

export default class ModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalMode: null
    };
  }
 
 openModal(id) {
    this.setState({ modalMode: id });
  }

  closeModal() {
    this.setState({ modalMode: null });
  }

  render() {

    const { 
      modalLauncherLabel,
      children,
      modalId,
      modalLauncherClass,
    } = this.props;
    const { modalMode } = this.state;
    
    return (
      <div> 
        <div
          className={modalLauncherClass}
          onClick={() => this.openModal(modalId)}
        >
          {modalLauncherLabel}
        </div>

        {modalMode === modalId && (
          <Modal onCloseRequest={() => this.closeModal()}>
            {children} {modalId}
          </Modal>
        )}
      </div>
    );
  }
}
