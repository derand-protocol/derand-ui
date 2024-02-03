import React from "react";
import "./style.css";
const Modal = ({ title, setShowModal, children }) => {
  return (
    <div className="modal-wrapper" onClick={(_e) => setShowModal(false)}>
      <div className="modal-content">
        <div className="modal-title">
          <div>{title}</div>
          <div className="closeModalBtn" onClick={() => setShowModal(false)}>
            <img
              src="/cross.png"
              width="16px"
              height="16px"
              alt="close modal"
            />
          </div>
        </div>
        <div className="children-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
