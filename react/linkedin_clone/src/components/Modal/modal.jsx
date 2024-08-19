import React, { useState } from "react";
import styles from "./modal.module.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleDelete = () => {
    onDelete(); // Call the passed delete function from parent
    toggleModal(); // Close modal after deleting
  };

  return (
    <div>
      {/* Trigger Button */}
      <button onClick={toggleModal} className={styles.menuButton}>
        •••
      </button>

      {/* Modal Structure */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.modalOptions}>
              <li>Save</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
