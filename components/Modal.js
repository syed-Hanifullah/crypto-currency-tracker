import React from "react";
const Modal = ({ open, onClose, children, actionBtnText = "Save" }) => {
 return (
  <dialog className={`modal  ${open ? "modal-open" : ""}`}>
   <div className="modal-box">
    {children}
    <button onClick={onClose} className="fixed top-2 right-2">
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
     </svg>
    </button>
    <div className="modal-action">
     <button className="btn capitalize	" onClick={onClose}>
      Close
     </button>
     <button type="submit" className="btn btn-primary capitalize">
      {actionBtnText}
     </button>
    </div>
   </div>
  </dialog>
 );
};

export default Modal;
