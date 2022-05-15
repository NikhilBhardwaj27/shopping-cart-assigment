import React from "react";
import ReactDOM from "react-dom";
import "./modal.styles.scss";

const MODAL_CUSTOM_CLASS = {
  filled: "filled",
  empty: "empty",
};

const Modal = ({ show, header, body, footer, customClass, ...otherProps }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modal-container">
          <div className={`modal-main ${MODAL_CUSTOM_CLASS[customClass]}`}>
            <div className="modal-header">{header}</div>
            <div className={`modal-body`}>
              {body}
            </div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
