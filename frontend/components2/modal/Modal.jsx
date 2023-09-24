import React, { useState, useEffect } from "react";

const Modal = ({ OurModal, setModalState, state, getState, selectedState }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <>
      <div
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setModalState(false);
          }
        }}
        className="fixed w-full flex justify-center items-center  inset-0 h-full !bg-black !bg-opacity-50 !backdrop-blur-[2px]"
      >
        <OurModal
          closeIconHandler={setModalState}
          state={state}
          getState={getState}
          setModalState={setModalState}
          selectedState={selectedState}
        />
      </div>
    </>
  );
};

export default Modal;
