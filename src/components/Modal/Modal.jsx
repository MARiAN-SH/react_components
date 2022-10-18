import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

// вибрав портал доданий в (public/index.html)
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModal);
  }

  handleModal = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  handleModalClick = e => {
    console.log('e.target: ', e.target);
    console.log('e.currentTarget: ', e.currentTarget);

    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleModalClick}>
        <div className="Modal__content">
          <button className="Modal__close" onClick={this.props.close}>
            закрити
          </button>
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
