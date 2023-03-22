import React from "react";
import Modal from "react-modal";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <Modal isOpen={!!imageUrl} onRequestClose={onClose}>
      <div className="h-full overflow-auto">
        <img src={imageUrl} alt="Image" className="w-full" />
      </div>
      <button className="absolute top-0 right-0 p-2" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Modal>
  );
};

export default ImageModal;
