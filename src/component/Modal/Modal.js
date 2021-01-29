import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from './modal.module.css'

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("Keydown", (e) => {
      if (e.code === "Escape") {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("Keydown", (e) => {
      if (e.code === "Escape") {
        this.props.onClose();
      }
    });
  }

  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <p className={styles.text}>Модальне вікно </p>
          
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
