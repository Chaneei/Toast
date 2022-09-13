import React from "react";

const Modal = ({ setModalIsOpen, ModalIsOpen }) => {
  return (
    <div className="modal">
      <div className="modal-menu">
        <i class="modal-icon fa-solid fa-envelope"></i>
        <h4>Email</h4>
        <p>lsc90726@gmail.com</p>
        <a href="mailto:lsc90726@gmail.com" target="_blank">
          <span>Send a message</span>
        </a>
      </div>
      <div className="modal-menu">
        <i class="modal-icon fa-brands fa-github"></i>
        <h4>Github</h4>
        <p>Chaneei</p>
        <a href="https://github.com/Chaneei" target="_blank">
          <span>Go to github</span>
        </a>
      </div>
      <button className="closebtn" onClick={() => setModalIsOpen(false)}>
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  );
};

export default Modal;
