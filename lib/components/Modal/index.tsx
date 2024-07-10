"use client";

import { useCallback, useRef } from "react";

const Modal = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const openModal = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  return (
    <>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
