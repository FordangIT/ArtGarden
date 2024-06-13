import React from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  buttonText: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message,
  buttonText
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">{buttonText}</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
