import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };
  const onClose = () => {
    setShowModalPopup(false);
  };
  return (
    <section className="modal_box container">
      <button className="btn" onClick={handleToggleModalPopup}>
        {showModalPopup ? "close" : "open"} modal popup
      </button>
      {showModalPopup && (
        <Modal body={<div>Customized body</div>} onClose={onClose} />
      )}
    </section>
  );
}
