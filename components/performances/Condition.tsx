import { useState } from "react";

export default function Condition() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    console.log("open");
  };

  const closeModal = () => {
    setOpen(false);
    console.log("close");
  };
  return (
    <>
      <button className="btn" onClick={openModal}>
        상세검색
      </button>
      {open && (
        <dialog className="modal bg-[#999999] bg-opacity-30" open>
          <div className="relative bg-white w-96 h-[45rem] lg:w-[45rem] lg:h-96 rounded-md shadow-2xl">
            <form method="dialog" onSubmit={closeModal}>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                조건 검색하기
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
