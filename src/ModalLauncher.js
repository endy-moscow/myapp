import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalLauncher.css"

export default class ModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {

    const { buttonLabel, children, classes } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className="modal-button"
          onClick={() => this.handleToggleModal(1)}
        >
          {buttonLabel}
        </button>

        {showModal && (
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            {children} 23232
          </Modal>
        )}
      </div>
    );
  }
}
