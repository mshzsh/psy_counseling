import React, { useEffect } from 'react'

const Modal = ({
  OurModal,
  setModalState,
  state,
  getState,
  selectedState,
  getState2,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    // eslint-disable-next-line
    <div
      onClick={e => {
        if (e.currentTarget === e.target) {
          setModalState(false)
        }
      }}
      className="fixed w-full flex justify-center items-center z-[100]  inset-0 h-full !bg-black !bg-opacity-50 !backdrop-blur-[2px]"
    >
      <OurModal
        closeIconHandler={setModalState}
        state={state}
        getState={getState}
        getState2={getState2}
        setModalState={setModalState}
        selectedState={selectedState}
      />
    </div>
  )
}

export default Modal
